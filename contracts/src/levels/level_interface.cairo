use starknet::ContractAddress;

// Level base interface
#[starknet::interface]
trait ILevel<TContractState> {
    
    fn deploy_instance(self: @TContractState, player: ContractAddress) -> ContractAddress;
    fn validate_instance(self: @TContractState, instance: ContractAddress);

}