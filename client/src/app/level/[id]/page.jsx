"use client";

import Image from "next/image";
import Start from "@/components/Buttons/Start";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ConnectWallet } from '../../utils';
import { agate } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import { StarknetConfig, InjectedConnector, useContract} from '@starknet-react/core';
import { Provider, Contract, Account, ec, json } from "starknet";
import { useRouter } from 'next/navigation';
import levelData from '../../../../levels_data/levelData.json';
import React, { useState } from 'react';
import TextFileViewer from "@/components/Sections/TextFileViewer";

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' } }),
  new InjectedConnector({ options: { id: 'argentX' } }),
];

export default function LevelPage({ params }) {

  const router = useRouter();
  const {id} = params;
  // Obtener la información del nivel seleccionado
  const selectedLevel = levelData.find((level) => level.level === id);
  console.log(selectedLevel);

   const { contract } = useContract({
     address: selectedLevel.contractAddress,
     abi: selectedLevel.abi,
  });
  
  return (
   <div>
        <StarknetConfig connectors={connectors}>

    <div className="relative flex h-screen flex-col items-center gap-5 justify-center bg-level-1 bg-cover">
    <div>

        </div>
        <div className=' absolute right-5 top-5'>
          <ConnectWallet/>
        </div>
        <ul className="rounded-3xl flex flex-col gap-5 mx-5">
        
            <li className="rounded-3xl border-white bg-[#333] p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg">
              <p className="text-3xl p-2 text-amber-100">Lvl {selectedLevel.level}: {selectedLevel.title} </p>
              <p className="text-xs p-5">{selectedLevel.description}</p>
              <button
              className="transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-amber-900/40 hover:text-amber-100 hover:border-amber-100 bg-amber-100/40 border-amber-900 shadow-md bg-amber-100/40 text-amber-900 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-4 lg:text-xs"
              onClick={async () => {

                await contract.connect(starknet.account);
                
                const r = [address];
                console.log(typeof r);
                console.log(r);
                const ci = await contract.invoke("create_instance", []);

                
              }}>Deploy Instance</button>
            </li>
            
            <li className="rounded-3xl border-white bg-[#333] p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg">
              <p className="text-3xl p-2  text-amber-100">SMARTCONTRACT</p>
              <SyntaxHighlighter language="rust" className=" text-left text-xs" style={agate}>
              {<TextFileViewer />}
    
            </SyntaxHighlighter>  
            </li>
            </ul>

    </div>
        </StarknetConfig>

   </div>
  );
}
