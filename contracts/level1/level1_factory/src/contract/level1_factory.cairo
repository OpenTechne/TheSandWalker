use core::option::OptionTrait;
#[contract]
mod Level1Factory {
    use level1_code::contract::level1_code::Level1Code;
    use level1_code::contract::level1_code::Level1Code::ILevel1CodeDispatcher;
    use level1_code::contract::level1_code::Level1Code::ILevel1CodeDispatcherTrait;
    use starknet::class_hash::ClassHash;
    use starknet::class_hash::class_hash_try_from_felt252;
    use starknet::ContractAddress;
    use starknet::get_caller_address;
    use starknet::deploy_syscall;
    use option::OptionTrait;



    struct Storage {
        owner: ContractAddress,
        level1_code_class_hash: ClassHash,
    }

    #[constructor]
    fn constructor() {
        owner::write(get_caller_address());
    }

    #[external]
    fn set_level1_code_class_hash(class_hash_felt252: felt252){
        assert(get_caller_address() == owner::read(), 'only owner');
        let _class_hash: ClassHash = class_hash_try_from_felt252(class_hash_felt252).unwrap(); 
        level1_code_class_hash::write(_class_hash);
    }

    // Deploy instance and returns instance address
    fn create_instance() -> ContractAddress {

    }

    // Checks if instnace is pwnd and returns true or false
    #[external]
    fn check_instance(instance: ContractAddress) -> bool {
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
