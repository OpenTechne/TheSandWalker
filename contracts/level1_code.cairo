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
    // Deploy instance and returns instance address
    
    // fn create_instance() -> ContractAddress {

    // }

    // // Checks if instnace is pwnd and returns true or false
    // fn check_instance(instance: ContractAddress) -> bool {

    // }

    
}
