"use client";

import Image from "next/image";
import Start from "@/components/Buttons/Start";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ConnectWallet } from '../utils';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { StarknetConfig, InjectedConnector, useContract} from '@starknet-react/core';
import { Provider, Contract, Account, ec, json } from "starknet";



let CONTRACT_ADDRESS = "0x07788534312CF58A2826Db0309Aff1723f1b63418257691Ff5fAD78D8Ca66Beb";

let level1 = [
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "_owner_felt",
        "type": "core::felt252"
      }
    ]
  },
  {
    "type": "function",
    "name": "get_owner",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "register_level",
    "inputs": [
      {
        "name": "level",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "is_registered_level",
    "inputs": [
      {
        "name": "level",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [
      {
        "type": "core::felt252"
      }
    ],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "set_level",
    "inputs": [
      {
        "name": "_level",
        "type": "core::felt252"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "create_instance",
    "inputs": [],
    "outputs": [
      {
        "type": "core::felt252"
      }
    ],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "submit_instance",
    "inputs": [
      {
        "name": "instance",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "event",
    "name": "the_sand_walker::the_sand_walker::TheSandWalker::Event",
    "kind": "enum",
    "variants": []
  }
];

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' } }),
  new InjectedConnector({ options: { id: 'argentX' } }),
];


export default function Level1Page() {

   const { contract } = useContract({
     address: CONTRACT_ADDRESS,
     abi: level1,
  });
  
  return (
   <div>
        <StarknetConfig connectors={connectors}>

    <div className="relative flex h-screen flex-col items-center gap-5 justify-center bg-level-one bg-cover">
    <div>

        </div>
        <div className=' absolute right-5 top-5'>
          <ConnectWallet/>
        </div>
        <ul className="rounded-3xl flex flex-col gap-5 mx-5">
          
            <li className="rounded-3xl border-white bg-[#333] p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg">
              <p className="text-3xl p-2 text-amber-100">Lvl 1: The elder door </p>
              <p className="text-xs p-5">In this level you should be able to get the code to unlock the door and get out from the pyramid.</p>
              <button
              className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-amber-900/40 hover:text-amber-100 hover:border-amber-100 bg-amber-100/40 border-amber-900 shadow-md bg-amber-100/40 text-amber-900 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-4 lg:text-xs"
              onClick={async () => {

                await contract.connect(starknet.account);
                
                const r = [CONTRACT_ADDRESS];
                console.log(typeof r);
                console.log(r);
                const ci = await contract.invoke("create_instance", []);

                
              }}
      >Deploy Instance</button>
            </li>
            <li className="rounded-3xl border-white bg-[#333] p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg">
              <p className="text-3xl p-2  text-amber-100">SMARTCONTRACT</p>
              <SyntaxHighlighter language="rust" className=" text-left text-xs" style={agate}>
              {`#[starknet::contract]
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
  }`}
    
            </SyntaxHighlighter>  
            </li>
            </ul>

    </div>
        </StarknetConfig>

   </div>
  );
}
