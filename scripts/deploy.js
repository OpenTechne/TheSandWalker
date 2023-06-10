import { Provider, Account, Contract, ec, json, stark, uint256, shortString } from "starknet";

import * as fs from 'node:fs';


import 'dotenv/config';


async function deploy() {
    // connect provider
    const provider = new Provider({ sequencer: { network: "goerli-alpha" } });
    // connect your account. To adapt to your own account :
    const privateKey0 = process.env.PRIVATE_KEY;
    const account0Address = process.env.ADDRESS;
    console.log(account0Address);
    const starkKeyPair0 = ec.getKeyPair(privateKey0);
    const account0 = new Account(provider, account0Address, starkKeyPair0);

    // Declare & deploy Test contract in devnet
    // ClassHash has been calculated previously with specific tool
    const testClassHash = "0xff0378becffa6ad51c67ac968948dbbd110b8a8550397cf17866afebc6c17d";
    const compiledTest = json.parse(fs.readFileSync("./compiled_contracts/test.json").toString("ascii"));
    const deployResponse = await account0.declareDeploy({ contract: compiledTest, classHash: testClassHash });

    // Connect the new contract instance :
    const myTestContract = new Contract(compiledTest.abi, deployResponse.deploy.contract_address, provider);
    console.log('✅ Test Contract connected at =', myTestContract.address);
}

deploy();