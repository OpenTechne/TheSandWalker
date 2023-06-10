use array::ArrayTrait;
use result::ResultTrait;
use starknet::ContractAddress;
use starknet::get_caller_address;

use starknet::Felt252TryIntoContractAddress;
use option::OptionTrait;

use debug::PrintTrait;
use traits::Into;
use traits::TryInto;


#[test]
fn test_ownable() {
    let owner_address = 0x05333b98e1ff6cc9491af362f797c7ccb13860fc82051536435ae44cf5fe5ffb;
    // Deploy the_sand_walker
    let mut calldata = ArrayTrait::new();
    calldata.append(owner_address);
    let the_sand_walker_address = deploy_contract('the_sand_walker', @calldata).unwrap();
    
    // assert owner
    let the_sand_walker_owner = call(the_sand_walker_address, 'get_owner', @ArrayTrait::new()).unwrap();
    //the_sand_walker_owner.print();
    assert( owner_address == *the_sand_walker_owner[0] , 'Incorrect owner value');
}

#[test]
fn test_only_owner_can_redister_levels() {
    let owner_address_felt: felt252 = 0x05333b98e1ff6cc9491af362f797c7ccb13860fc82051536435ae44cf5fe5ffb; // 2352084767966724946589435248082306026276602441916248438950367668598944456699
    let owner_address: ContractAddress = owner_address_felt.try_into().unwrap();
    //let owner_address: ContractAddress = .contract_address_try_from_felt252(owner_address_felt).unwrap();

    // Deploy the_sand_walker
    let mut calldata = ArrayTrait::new();
    calldata.append(owner_address_felt);
    let the_sand_walker_address = deploy_contract('the_sand_walker', @calldata).unwrap();
    
    // dummy level address
    let level_address = 0x04987b97e1ff6cc9491af362f797c7ccb13860fc81051536435ae44cf5fe5ffb;

    // assert that reverts if a non owner try to register level
    let mut calldata = ArrayTrait::new();
    calldata.append(level_address);
    match call(the_sand_walker_address, 'register_level', @calldata) {
         Result::Ok(x) => assert(false, 'Shouldnt have succeeded'),
         Result::Err(x) => {
             let err_msg: felt252 = 'only owner'.into();
             let ret_err_msg: felt252 = *x.panic_data.at(0);
             assert(err_msg == ret_err_msg, 'wrong error message');
         }
    }

    // asset that oner can register level
    // prank owner account
    start_prank(owner_address_felt, the_sand_walker_address).unwrap();
    
    // try to register level
    //match call(the_sand_walker_address, 'register_level', @calldata) {
    //    Result::Ok(x) => assert(true, ''),
    //    Result::Err(x) => {
    //        let ret_err_msg: felt252 = *x.panic_data.at(0);
    //        ret_err_msg.print();
    //    assert(false, 'Shouldnt have reverted')},
    //}

    // ceck if the level is registered
    //let is_registered = call(the_sand_walker, 'is_registered_level', @calldata).unwrap();
    //let is_registered = *is_registered[0].into(); 
    //is_registered.print();
    //assert(*is_registered[0] == true, 'level not registered');

}
