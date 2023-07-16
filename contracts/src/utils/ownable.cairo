use starknet::ContractAddress;

#[starknet::interface]
trait IOwnable<TContractState> {

    fn owner(self: @TContractState) -> ContractAddress;
    fn transfer_ownership(ref self: TContractState, new_owner: ContractAddress);
    fn renounce_ownership(ref self: TContractState);
    fn initializer(ref self: TContractState, init_owner: ContractAddress);
}

#[starknet::contract]
mod Ownable {
    use super::IOwnable;
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use zeroable::Zeroable;

    #[storage]
    struct Storage {
        _owner: ContractAddress
    }

    #[derive(Drop, starknet::Event)]
    fn OwnershipTransferred(previous_owner: ContractAddress, new_owner: ContractAddress) {}

    #[external(v0)]
    impl OwnableImpl of super::IOwnable<ContractState> {

        fn owner(self: @ContractState) -> ContractAddress {
            self._owner.read()
        }

        fn transfer_ownership(ref self: ContractState, new_owner: ContractAddress) {
            assert(!new_owner.is_zero(), 'New owner is the zero address');
            InternalMethods::assert_only_owner(@self);
            InternalMethods::_transfer_ownership(ref self, new_owner);
        }

        fn renounce_ownership(ref self: ContractState) {
            InternalMethods::assert_only_owner(@self);
            InternalMethods::_transfer_ownership(ref self, Zeroable::zero());
        }

        fn initializer(ref self: ContractState, init_owner: ContractAddress) {
            assert(self._owner.read().is_zero(), 'already been initialized');
            assert(!init_owner.is_zero(), 'Owner is the zero address');
            InternalMethods::_transfer_ownership(ref self, init_owner);
        }
    }

    #[generate_trait]
    impl InternalMethods of InternalMethodsTrait {

        fn assert_only_owner(self: @ContractState) {
            let owner: ContractAddress = self._owner.read();
            let caller: ContractAddress = get_caller_address();
            assert(!caller.is_zero(), 'Caller is the zero address');
            assert(caller == owner, 'Caller is not the owner');
        }

        fn _transfer_ownership(ref self: ContractState, new_owner: ContractAddress) {
            let previous_owner: ContractAddress = self._owner.read();
            self._owner.write(new_owner);
            OwnershipTransferred(previous_owner, new_owner);
        }
    }
}

