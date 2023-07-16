
#[starknet::contract]
mod the_sand_walker{
    use super::super::utils::ownable::Ownable;
    use super::super::utils::ownable::Ownable::ContractState as OwnableSate;    

    use starknet::ContractAddress;

    #[storage]
    struct Storage {}
    
    #[constructor]
    fn constructor(ref self: OwnableSate, owner: ContractAddress) {
        Ownable::OwnableImpl::initializer(ref self,  owner);
    }
}