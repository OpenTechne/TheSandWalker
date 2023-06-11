#[starknet::contract]
mod TheSandWalker {
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use traits::Into;
    use starknet::contract_address::Felt252TryIntoContractAddress;
    use traits::TryInto;
    use option::OptionTrait;


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
        is_instace_pwn: LegacyMap::<ContractAddress, felt252>,

        level: felt252,
    }

    #[constructor]
    fn constructor(ref self: Storage, _owner_felt: felt252) {
        let _owner: ContractAddress = _owner_felt.try_into().unwrap();
        self.owner.write(_owner);
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

    #[external]
    fn is_registered_level(ref self: Storage ,level: ContractAddress) -> felt252 {
        self.registered_level.read(level)
    }

    #[external]
    fn set_level(ref self: Storage, _level: felt252) {
        self.level.write(_level);
    }

    // Players funcs
    #[external]
    fn create_instance(ref self: Storage) -> felt252 {
        let _level: ContractAddress = self.level.read().try_into().unwrap();
        // deploy instance for player
        let instance_address: ContractAddress = ILevelDispatcher { contract_address: _level}.create_instance();

        // bind player address to instance
        self.instance_player.write(instance_address, get_caller_address());

        // bind instance to level
        self.instance_level.write(instance_address, _level);

        // TODO: EMIT EVENT "NeInstance"

        // return instance address
        let instance_address_felt: felt252 = instance_address.into();
        instance_address_felt
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
