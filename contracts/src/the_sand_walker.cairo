use starknet::ContractAddress;

// TheSandWalker Interface 
#[starknet::interface]
trait ITheSandWalker<TContractState> {
    // Admin functions
    fn owner(self: @TContractState) -> ContractAddress;
    fn transfer_ownership(ref self: TContractState, new_owner: ContractAddress);
// Players functions
// TODO 
}


#[starknet::contract]
mod TheSandWalker {
    use starknet::ContractAddress;

    #[storage]
    struct Storage {
        _owner: ContractAddress
    }

    impl TheSandWalkerImpl of super::ITheSandWalker<ContractState> {
        fn owner(self: @ContractState) -> ContractAddress {
            self._owner.read()
        }

        fn transfer_ownership(ref self: ContractState, new_owner: ContractAddress) {
            self._owner.write(new_owner);
        }
    }
}
