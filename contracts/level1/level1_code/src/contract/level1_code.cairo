#[starknet::contract]
mod Level1Code {
    use starknet::get_block_timestamp;
    use starknet::syscalls::keccak_syscall;
    use traits::Into;
    use array::ArrayTrait;
    use core::result::ResultTrait;

    #[storage]
    struct Storage {
        secret_word: u256,
        gate_creation_timestamp: u64,
        is_gate_open: bool,
    }

    #[constructor]
    fn constructor(ref self: Storage) {
        let timestamp: u64 = get_block_timestamp().into();
        let mut secret_codex = ArrayTrait::new();
        let mut counter: u8 = 0;
        loop {
            if counter == 18 {
                break ();
            }
            if counter % 3 == 0 {
                secret_codex.append(timestamp);
            } else {
                secret_codex.append(0)
            }
            counter += 1;
        };

        let secret = keccak_syscall(secret_codex.span()).unwrap();

        self.secret_word.write(secret);
    }

    fn open_gate(ref self: Storage, _secret_word: u256) {
        assert(get_block_timestamp() > self.gate_creation_timestamp.read(), 'too fast');
        assert(self.secret_word.read() == _secret_word, 'the secret is wrong');

        self.is_gate_open.write(true);
    }

    fn get_is_gate_open(ref self: Storage)-> bool {
        self.is_gate_open.read()
    }
    // Deploy instance and returns instance address
    
    // fn create_instance() -> ContractAddress {

    // }

    // // Checks if instnace is pwnd and returns true or false
    // fn check_instance(instance: ContractAddress) -> bool {

    // }

    
}

    // #[abi]
    // trait ILevel {
    //     // Deploy instance and returns instance address
    //     fn create_instance() -> ContractAddress;
    //     // Checks if instnace is pwnd and returns true or false
    //     fn submit_instance(instance: ContractAddress) -> bool;
    // }