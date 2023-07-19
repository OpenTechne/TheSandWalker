use starknet::ContractAddress;
use starknet::contract_address::ContractAddressZeroable;
use starknet::info::get_caller_address;

#[starknet::contract_state(OwnableState)]
struct OwnableStorage {
    owner: ContractAddress, 
}

#[starknet::interface]
trait IOwnable<TContractState> {
    fn owner(self: @TContractState) -> ContractAddress;
    fn is_owner(self: @TContractState, address: ContractAddress) -> bool;
    fn transfer_ownership(ref self: TContractState, new_owner: ContractAddress);
}

#[starknet::component]
impl OwnableImpl<
    TContractState, impl I: GetComponent<TContractState, OwnableState>
> of IOwnable<TContractState> {
    fn owner(self: @TContractState) -> ContractAddress {
        self.component_snap().owner.read()
    }

    fn is_owner(self: @TContractState, address: ContractAddress) -> bool {
        self.component_snap().owner.read() == address
    }

    fn transfer_ownership(ref self: TContractState, new_owner: ContractAddress) {
        is_owner(get_caller_address());
        assert(new_owner.is_non_zero(), 'New owner cannot be zero');
        self.component_snap().owner.write(new_owner);
    }
}

