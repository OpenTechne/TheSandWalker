
#[contract]
mod Level1Code {
    use starknet::get_block_timestamp;
    use starknet::syscalls::keccak_syscall;
    use traits::Into;
    use array::ArrayTrait;
    use core::result::ResultTrait;

    struct Storage {
        secret_word: u256,
        gate_creation_timestamp: u64,
        is_gate_open: bool,
    }

    #[constructor]
    fn constructor() {
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

        secret_word::write(secret);
    }

    #[external]
    fn open_gate(_secret_word: u256) {
        assert(get_block_timestamp() > gate_creation_timestamp::read(), 'too fast');
        assert(secret_word::read() == _secret_word, 'the secret is wrong');

        is_gate_open::write(true);
    }

    #[view]
    fn get_is_gate_open()-> bool {
        is_gate_open::read()
    } 

    #[abi]
    trait ILevel1Code {
        // Deploy instance and returns instance address
        fn open_gate(_secret_word: u256);
        // Checks if instnace is pwnd and returns true or false
        fn get_is_gate_open()-> bool;
    }


}
