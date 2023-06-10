#[starknet::contract]
mod TheSandWalker {
    use starknet::ContractAddress;
    use starknet::get_caller_address;

    #[storage]
    struct Storage {
        owner: ContractAddress,
        // level -> felt252"bool"
        registered_level: LegacyMap::<ContractAddress, felt252>,
        // Instance -> player
        instance_player: LegacyMap::<ContractAddress, ContractAddress>,
        // Instance -> level
        instance_level: LegacyMap::<ContractAddress, ContractAddress>,
        // Instance -> true
        is_instace_pwn: LegacyMap::<ContractAddress, felt252>
    }

    #[constructor]
    fn constructor(ref self: Storage) {
        self.owner.write(get_caller_address());
    }

    #[external]
    fn get_owner(ref self: Storage) -> ContractAddress{
        self.owner.read()
    }

    #[external]
    fn register_level(ref self: Storage, level: ContractAddress) {
        assert(get_caller_address() == self.owner.read(), 'only owner');
        self.registered_level.write(level, 1);
    }

    #[view]
    fn is_registered_level(ref self: Storage ,level: ContractAddress) -> felt252 {
        self.registered_level.read(level)
    }

    // Players funcs
    #[external]
    fn create_instance(ref self: Storage, level: ContractAddress) -> ContractAddress {
        // deploy instance for player
        let instance_address: ContractAddress = ILevelDispatcher { contract_address: level}.create_instance();

        // bind player address to instance
        self.instance_player.write(instance_address, get_caller_address());

        // bind instance to level
        self.instance_level.write(instance_address, level);

        // TODO: EMIT EVENT "NeInstance"

        // return instance address
        instance_address
    }

    #[external]
    fn submit_instance(ref self: Storage, instance: ContractAddress) {
        // check if instance is already pwn
        assert(self.is_instace_pwn.read(instance) == 0, ' instance already pwned ');
        // check if instance corresponds to caller
        assert(get_caller_address() == self.instance_player.read(instance) , 'this is not your instance');
        
        // get level of instance
        let level: ContractAddress = self.instance_level.read(instance);

        // check if pwned
        if(ILevelDispatcher { contract_address: level}.check_instance(instance) == 1){
            // Congrats you pwn the level 
            self.is_instace_pwn.write(instance, 1)
            // TODO: EMIT EVENT
        } else {
            // TODO: change the assert with event emission to track failed submissions
            assert(false, 'level not pwn')
        }
    }

    #[starknet::interface]
    trait ILevel {
        // Deploy instance and returns instance address
        fn create_instance(ref self: Storage) -> ContractAddress;
        // Checks if instnace is pwnd and returns true or false
        fn check_instance(ref self: Storage, instance: ContractAddress) -> felt252;
    }
}

