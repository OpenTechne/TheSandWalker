#[contract]
mod TheSandWalker {
    // Core Library Imports
    use starknet::ContractAddress;
    use starknet::get_caller_address;

    struct Storage {
        owner: ContractAddress,
        registered_level: LegacyMap::<ContractAddress, bool>,
    }

    #[constructor]
    fn constructor(_owner: ContractAddress) {
        owner::write(_owner);
    }

    #[external]
    fn get_owner() -> ContractAddress{
        owner::read()
    }

    #[external]
    fn register_level(level: ContractAddress) {
        assert(get_caller_address() == owner::read(), 'only owner');
        registered_level::write(level, true);
    }

    #[view]
    fn is_registered_level(level: ContractAddress) -> bool {
        registered_level::read(level)
    }

    // Players functoins
    // #[external]
    // fn deploy_instance(level: ContractAddress) -> felt252 {
    //    
    // }
    
}