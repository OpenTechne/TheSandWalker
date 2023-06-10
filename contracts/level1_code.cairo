<<<<<<< HEAD
=======

>>>>>>> origin/contracts-development
#[starknet::contract]
mod Level1Code {
    use starknet::get_block_timestamp;
    use starknet::syscalls::keccak_syscall;
    use traits::Into;
    use array::ArrayTrait;
    use core::result::ResultTrait;

<<<<<<< HEAD
    #[storage]
=======
    #[storage]    
>>>>>>> origin/contracts-development
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

<<<<<<< HEAD
    fn open_gate(ref self: Storage, _secret_word: u256) {
=======
    #[external]
<<<<<<< HEAD
    fn open_gate(ref self: Storage ,_secret_word: u256) {
>>>>>>> origin/contracts-development
=======
    fn open_gate(ref self: Storage ,_secret_word: u64) {
>>>>>>> origin/contracts-development
        assert(get_block_timestamp() > self.gate_creation_timestamp.read(), 'too fast');
        assert(self.secret_word.read() == _secret_word, 'the secret is wrong');

        self.is_gate_open.write(1);
    }

<<<<<<< HEAD
    fn get_is_gate_open(ref self: Storage)-> bool {
        self.is_gate_open.read()
=======
    #[view]
    fn get_is_gate_open(ref self: Storage)-> felt252 {
        self.is_gate_open.read()
    } 

    #[starknet::interface]
    trait ILevel1Code {
        // Deploy instance and returns instance address
        fn open_gate(ref self: Storage ,_secret_word: u256);
        // Checks if instnace is pwnd and returns true or false
<<<<<<< HEAD
        fn get_is_gate_open(ref self: Storage)-> bool;
>>>>>>> origin/contracts-development
=======
        fn get_is_gate_open(ref self: Storage)-> felt252;
>>>>>>> origin/contracts-development
    }
    // Deploy instance and returns instance address
    
    // fn create_instance() -> ContractAddress {

    // }

    // // Checks if instnace is pwnd and returns true or false
    // fn check_instance(instance: ContractAddress) -> bool {

    // }

    
}
