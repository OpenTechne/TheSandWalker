(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{45545:function(){},46047:function(){},50303:function(){},57513:function(e,t,n){Promise.resolve().then(n.bind(n,49730))},49730:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(17821),a=n(38008),s=n.n(a);n(21743);var o=n(36410),l=n(15604),i=n(33768);n(92341);var c=n(49573),d=n.n(c),u=n(33198);function m(e){let{available:t,connect:n,connectors:a}=e,[o,l]=(0,u.useState)(!1);function i(){l(!1)}function c(e,t){return void 0!==t.find(t=>t.id()===e)}return o?(0,r.jsx)("div",{id:"popup-modal",tabIndex:-1,className:" fixed top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full",children:(0,r.jsx)(d(),{appElement:document.getElementById("body"),className:"fixed z-50 inset-0 overflow-y-auto",style:{display:"flex",alignItems:"center",justifyContent:"center",overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0, 0, 0, 0.75)"}},isOpen:o,onRequestClose:i,ariaHideApp:!1,children:(0,r.jsx)("div",{className:"flex justify-center items-center flex-col min-h-screen",children:(0,r.jsxs)("div",{className:"relative rounded-lg shadow bg bg-zinc-800",children:[(0,r.jsxs)("button",{type:"button",className:"absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white","data-modal-hide":"popup-modal",onClick:i,children:[(0,r.jsx)("svg",{"aria-hidden":"true",className:"w-5 h-5",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})}),(0,r.jsx)("span",{className:"sr-only",children:"Close modal"})]}),(0,r.jsx)("button",{className:"h-1"}),(0,r.jsx)("div",{className:"py-6 px-10 mx-20 my-10 text-center",children:(0,r.jsxs)("div",{className:"flex flex-col gap-4 w-max",children:[(0,r.jsx)("button",{"data-modal-hide":"popup-modal",type:"button",className:"text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-600 rounded-lg border border-gray-900 text-md font-medium px-5 py-2.5 shadow-md hover:text-white focus:z-10",onClick:()=>{n(a[0]),i()},children:(0,r.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,r.jsx)(s(),{src:"/bravoos.svg",alt:"My SVG",width:50,height:50}),(0,r.jsx)("p",{children:c("bravoos",t)?"Connect to Bravoos":"install Bravoos"})]})}),(0,r.jsx)("button",{"data-modal-hide":"popup-modal",type:"button",className:"text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-600 rounded-lg border border-gray-900 text-md font-medium px-5 py-2.5 shadow-md hover:text-white focus:z-10",onClick:()=>{n(a[1]),i()},children:(0,r.jsxs)("div",{className:"flex flex-row items-center gap-4 w-max",children:[(0,r.jsx)(s(),{src:"./argent.svg",alt:"My SVG",width:50,height:50}),(0,r.jsx)("p",{children:c("argentX",t)?"Connect to argentX":"Install argentX"}),(0,r.jsx)("div",{className:"pl-10"})]})})]})})]})})})}):(0,r.jsx)(x,{onClick:function(){l(!0)}})}function x(e){let{key:t,text:n,onClick:a}=e;return(0,r.jsx)("button",{type:"button",className:"bg-white hover:bg-gray-200 text-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-xs  px-3 py-2 text-center",onClick:a,children:"Connect Wallet"},"{key}")}function g(){let{connect:e,connectors:t,disconnect:n,available:a,refresh:s}=(0,l.useConnectors)(),{account:o,address:c,status:d}=(0,l.useAccount)();return((0,u.useEffect)(()=>{let e=setInterval(s,1e3);return()=>clearInterval(e)},[s,e]),"connected"===d)?(0,r.jsx)("button",{type:"button",className:"text-black bg-white hover:bg-gray-200 focus:ring-4  focus:outline-none focus:ring-emerald-900 shadow-lg shadow-gray-400/50 dark:shadow-lg dark:shadow-gray-800/80  font-medium rounded-lg text-sm text-center mt-2 p-2",onClick:()=>{navigator.clipboard.writeText(c),i.Am.success("Address Copied",{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},children:c.substring(0,4)+".."+c.substring(c.length-4,c.length)}):(0,r.jsx)(m,{available:a,connectors:t,connect:e})}var p=n(67375);n(63744);let h="0x07788534312cf58a2826db0309aff1723f1b63418257691ff5fad78d8ca66beb",f=[{type:"constructor",name:"constructor",inputs:[{name:"_owner_felt",type:"core::felt252"}]},{type:"function",name:"get_owner",inputs:[],outputs:[{type:"core::starknet::contract_address::ContractAddress"}],state_mutability:"external"},{type:"function",name:"register_level",inputs:[{name:"level",type:"core::starknet::contract_address::ContractAddress"}],outputs:[],state_mutability:"external"},{type:"function",name:"is_registered_level",inputs:[{name:"level",type:"core::starknet::contract_address::ContractAddress"}],outputs:[{type:"core::felt252"}],state_mutability:"external"},{type:"function",name:"set_level",inputs:[{name:"_level",type:"core::felt252"}],outputs:[],state_mutability:"external"},{type:"function",name:"create_instance",inputs:[],outputs:[{type:"core::felt252"}],state_mutability:"external"},{type:"function",name:"submit_instance",inputs:[{name:"instance",type:"core::starknet::contract_address::ContractAddress"}],outputs:[],state_mutability:"external"},{type:"event",name:"the_sand_walker::the_sand_walker::TheSandWalker::Event",kind:"enum",variants:[]}],b=[new l.InjectedConnector({options:{id:"braavos"}}),new l.InjectedConnector({options:{id:"argentX"}})];function v(){let{contract:e}=(0,l.useContract)({address:h,abi:f});return(0,r.jsx)("div",{children:(0,r.jsx)(l.StarknetConfig,{connectors:b,children:(0,r.jsxs)("div",{className:"relative flex h-screen flex-col items-center gap-5 justify-center bg-level-one bg-cover",children:[(0,r.jsx)("div",{}),(0,r.jsx)("div",{className:" absolute right-5 top-5",children:(0,r.jsx)(g,{})}),(0,r.jsxs)("ul",{className:"rounded-3xl flex flex-col gap-5 mx-5",children:[(0,r.jsxs)("li",{className:"rounded-3xl border-white bg-[#333] p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg",children:[(0,r.jsx)("p",{className:"text-3xl p-2 text-amber-100",children:"Lvl 1: The elder door "}),(0,r.jsx)("p",{className:"text-xs p-5",children:"In this level you should be able to get the code to unlock the door and get out from the pyramid."}),(0,r.jsx)("button",{className:"transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-amber-900/40 hover:text-amber-100 hover:border-amber-100 bg-amber-100/40 border-amber-900 shadow-md bg-amber-100/40 text-amber-900 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-4 lg:text-xs",onClick:async()=>{await e.connect(starknet.account),console.log("object"),console.log([h]),await e.invoke("create_instance",[])},children:"Deploy Instance"})]}),(0,r.jsxs)("li",{className:"rounded-3xl border-white bg-[#333] p-3 text-center text-white shadow-md backdrop-blur-md lg:p-5 lg:text-lg",children:[(0,r.jsx)("p",{className:"text-3xl p-2  text-amber-100",children:"SMARTCONTRACT"}),(0,r.jsx)(o.Z,{language:"rust",className:" text-left text-xs",style:p.Z,children:"#[starknet::contract]\n    mod Level1Code {\n      use starknet::get_block_timestamp;\n      use starknet::syscalls::keccak_syscall;\n      use traits::Into;\n      use array::ArrayTrait;\n      use core::result::ResultTrait;\n\n      #[storage]\n      struct Storage {\n        secret_word: u64,\n        gate_creation_timestamp: u64,\n        is_gate_open: felt252,\n      }\n\n      #[constructor]\n      fn constructor(ref self: Storage) {\n        let timestamp: u64 = get_block_timestamp().into();\n        \n        self.secret_word.write(timestamp);\n      }\n\n    #[external]\n    fn open_gate(ref self: Storage ,_secret_word: u64) {\n      assert(get_block_timestamp() > self.gate_creation_timestamp.read(), 'too fast');\n      assert(self.secret_word.read() == _secret_word, 'the secret is wrong');\n\n      self.is_gate_open.write(1);\n    }\n\n    #[external]\n    fn get_is_gate_open(ref self: Storage)-> felt252 {\n      self.is_gate_open.read()\n    } \n  }"})]})]})]})})})}},21743:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(17821);function a(e){return(0,r.jsx)("div",{className:"flex w-full justify-center",children:(0,r.jsx)("button",{className:"transition ease-in-out delay-150 hover:scale-110 duration-300 rounded-full border-4 hover:bg-amber-900/40 hover:text-amber-100 hover:border-amber-100 bg-amber-100/40 border-amber-900 shadow-md bg-amber-100/40 text-amber-900 [text-shadow:_2px_2px_2px_rgb(0_0_0_/_20%)] p-4 lg:text-2xl",onClick:()=>{window.scrollTo({top:window.innerHeight*e.page,behavior:"smooth"})},children:"Start the game"})})}n(38008)}},function(e){e.O(0,[150,440,985,61,250,322,62,744],function(){return e(e.s=57513)}),_N_E=e.O()}]);