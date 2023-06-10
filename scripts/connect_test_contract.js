import { Provider, Contract, Account, ec, json } from "starknet";


async function connect_to_starknet() {
    //initialize Provider
    console.log("STARKNET FUNCTION");
    const provider = new Provider({ sequencer: { network: "goerli-alpha2" } });
    // Connect the deployed Test contract in Tesnet
    const testAddress = "0x5f7cd1fd465baff2ba9d2d1501ad0a2eb5337d9a885be319366b5205a414fdd";
  
    // read abi of Test contract
    const { abi: testAbi } = await provider.getClassAt(testAddress);
    if (testAbi === undefined) { throw new Error("no abi.") };
    const myTestContract = new Contract(testAbi, testAddress, provider);
  
    // Interaction with the contract with call
    const bal1 = await myTestContract.call("get_balance");
    console.log("Initial balance =", bal1.res.toString()); // .res because the  return value is called 'res' in the cairo contract
}

connect_to_starknet();