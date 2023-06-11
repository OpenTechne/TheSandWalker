use core::option::OptionTrait;
#[starknet::contract]
mod Level1Factory {
    use super::Level1Code;
    use super::Level1Code::ILevel1CodeDispatcher;
    use super::Level1Code::ILevel1CodeDispatcherTrait;
    use array::ArrayTrait;
    use starknet::class_hash::ClassHash;
    use starknet::class_hash::class_hash_try_from_felt252;
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use starknet::deploy_syscall;
    use starknet::SyscallResult;
    use option::OptionTrait;
    use traits::TryInto;
    use starknet::contract_address::Felt252TryIntoContractAddress;
    use zeroable::Zeroable;




    #[storage]
    struct Storage {
        owner: ContractAddress,
        level1_code_class_hash: ClassHash,
        the_sand_walker_address: ContractAddress,
        seed_nonce: felt252,
    }

    #[constructor]
    fn constructor(ref self: Storage, _owner_felt: felt252) {
        let _owner: ContractAddress = _owner_felt.try_into().unwrap();
        self.owner.write(_owner);    
    }

    #[external]
    fn set_level1_code_class_hash(ref self: Storage, class_hash_felt252: felt252){
        assert(get_caller_address() == self.owner.read(), 'only owner');
        let _class_hash: ClassHash = class_hash_try_from_felt252(class_hash_felt252).unwrap(); 
        self.level1_code_class_hash.write(_class_hash);
    }

    #[external]
    fn set_sand_walker_address(ref self: Storage, _the_sand_walker_address: felt252){
        assert(get_caller_address() == self.owner.read(), 'only owner');
        let _the_sand_walker_address: ContractAddress = _the_sand_walker_address.try_into().unwrap();
        self.the_sand_walker_address.write(_the_sand_walker_address);
    }

    #[external]
    fn get_sand_walker_address(ref self: Storage) -> ContractAddress {
        self.the_sand_walker_address.read()
    }

    // Deploy instance and returns instance address
    #[external]
    fn create_instance(ref self: Storage) -> ContractAddress {
        assert(get_caller_address() == self.the_sand_walker_address.read(), 'only sand walker address');
        let old_seed = self.seed_nonce.read();
        let res: SyscallResult = deploy_syscall(self.level1_code_class_hash.read(), old_seed, ArrayTrait::new().span(), false);
        let mut instance_address: ContractAddress = Zeroable::zero();
        self.seed_nonce.write(old_seed + 1);
        match res {
            Result::Ok(x) => {let (instance_address, _) = x;},
            Result::Err(revert_reason) => assert(false, 'bad deploy'),
        };

        instance_address
    }

    // Checks if instnace is pwnd and returns true or false
    #[external]
    fn check_instance(ref self: Storage, instance: ContractAddress) -> felt252 {
        ILevel1CodeDispatcher { contract_address: instance}.get_is_gate_open()
    }
}

// Deploys a new instance of a previously declared class.
// `class_hash` - The class hash of the contract to be deployed.
// `contract_address_salt` - The salt, an arbitrary value provided by the sender, used in the
//     computation of the contract's address.
// `calldata` - Call arguments for the constructor.
// `deploy_from_zero` - Deploy the contract from the zero address.
// extern fn deploy_syscall(
//    class_hash: ClassHash,
//    contract_address_salt: felt252,
//    calldata: Span<felt252>,
//    deploy_from_zero: bool,
//) -> SyscallResult<(ContractAddress, Span<felt252>)> implicits(GasBuiltin, System) nopanic;


#[starknet::contract]
mod Level1Code {
    use starknet::get_block_timestamp;
    use starknet::syscalls::keccak_syscall;
    use traits::Into;
    use array::ArrayTrait;
    use core::result::ResultTrait;

    #[storage]    
    struct Storage {
        secret_word: u64,
        gate_creation_timestamp: u64,
        is_gate_open: felt252,
    }

    #[constructor]
    fn constructor(ref self: Storage) {
        let timestamp: u64 = get_block_timestamp().into();
        
        self.secret_word.write(timestamp);
    }

    #[external]
    fn open_gate(ref self: Storage ,_secret_word: u64) {
        assert(get_block_timestamp() > self.gate_creation_timestamp.read(), 'too fast');
        assert(self.secret_word.read() == _secret_word, 'the secret is wrong');

        self.is_gate_open.write(1);
    }

    #[external]
    fn get_is_gate_open(ref self: Storage)-> felt252 {
        self.is_gate_open.read()
    } 

    #[starknet::interface]
    trait ILevel1Code {
        // Deploy instance and returns instance address
        fn open_gate(ref self: Storage ,_secret_word: u64);
        // Checks if instnace is pwnd and returns true or false
        fn get_is_gate_open(ref self: Storage)-> felt252;
    }


}


