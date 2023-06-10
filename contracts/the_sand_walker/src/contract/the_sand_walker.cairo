#[contract]
mod TheSandWalker {
    use starknet::ContractAddress;
    use starknet::get_caller_address;

    struct Storage {
        owner: ContractAddress,
        // level -> bool
        registered_level: LegacyMap::<ContractAddress, bool>,
        // Instance -> player
        instance_player: LegacyMap::<ContractAddress, ContractAddress>,
        // Instance -> level
        instance_level: LegacyMap::<ContractAddress, ContractAddress>,
        // Instance -> true
        is_instace_pwn: LegacyMap::<ContractAddress, bool>
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

    // Players funcs
    #[external]
    fn create_instance(level: ContractAddress) -> ContractAddress {
        // deploy instance for player
        let instance_address: ContractAddress = ILevelDispatcher { contract_address: level}.create_instance();

        // bind player address to instance
        instance_player::write(instance_address, get_caller_address());

        // bind instance to level
        instance_level::write(instance_address, level);

        // TODO: EMIT EVENT "NeInstance"

        // return instance address
        instance_address
    }

    #[external]
    fn submit_instance(instance: ContractAddress) {
        // check if instance corresponds to caller
        assert(get_caller_address() == instance_player::read(instance) , 'this is not your instance');
        
        // get level of instance
        let level: ContractAddress = instance_level::read(instance);

        // check if pwned
        if(ILevelDispatcher { contract_address: level}.submit_instance(instance)){
            // Congrats you pwn the level 
            // TODO: EMIT EVENT
        } else {
            // TODO: change the folowing assert with event emission
            assert(false, 'level not pwn')
        }
    }

    #[abi]
    trait ILevel {
        // Deploy instance and returns instance address
        fn create_instance() -> ContractAddress;
        // Checks if instnace is pwnd and returns true or false
        fn submit_instance(instance: ContractAddress) -> bool;
    }
}

