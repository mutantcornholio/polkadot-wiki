"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1506],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||r;return n?a.createElement(m,s(s({ref:t},c),{},{components:n})):a.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38948:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>h});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),s=["components"],i={id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},l=void 0,p={unversionedId:"learn/learn-teleport",id:"learn/learn-teleport",title:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",source:"@site/../docs/learn/learn-teleport.md",sourceDirName:"learn",slug:"/learn-teleport",permalink:"/zh-CN/docs/learn-teleport",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-teleport.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1652181423,formattedLastUpdatedAt:"2022/5/10",frontMatter:{id:"learn-teleport",title:"Teleporting Assets",sidebar_label:"Teleporting Assets",description:"Steps on how to teleport assets across parachains.",keywords:["teleport","assets","transfer"],slug:"../learn-teleport"},sidebar:"docs",previous:{title:"Statemint",permalink:"/zh-CN/docs/learn-statemint"},next:{title:"Architecture",permalink:"/zh-CN/docs/learn-architecture"}},c={},h=[{value:"How Teleports work",id:"how-teleports-work",level:2},{value:"Initiate Teleport",id:"initiate-teleport",level:3},{value:"Receive Teleported Assets",id:"receive-teleported-assets",level:3},{value:"Deposit Asset",id:"deposit-asset",level:3},{value:"Teleporting Tokens using Polkadot-JS Apps UI",id:"teleporting-tokens-using-polkadot-js-apps-ui",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],u={toc:h};function d(e){var t=e.components,i=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"One of the main properties that Polkadot and Kusama bring to the ecosystems is decentralized\nblockchain interoperability. This interoperability allows for asset teleportation: the process of\nmoving assets, such as coins, tokens, or NFTs, between chains (parachains) to use them as you would\nany other asset native to that chain. Interoperability is possible through ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-crosschain"},"XCM")," and ",(0,r.kt)("a",{parentName:"p",href:"/zh-CN/docs/learn-spree"},"SPREE\nmodules"),", which together ensure that assets are not lost or duplicated across multiple chain."),(0,r.kt)("h2",{id:"how-teleports-work"},"How Teleports work"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"teleport",src:n(84532).Z,width:"1397",height:"611"})),(0,r.kt)("p",null,"As you can see from the diagram above, there are only 2 actors within this model: the source and the destination.\nThe way in which we transfer assets between the source and the destination are briefly summarized in the numbered\nlabels on the diagram, and are explained in more detail below:"),(0,r.kt)("h3",{id:"initiate-teleport"},"Initiate Teleport"),(0,r.kt)("p",null,"The source gathers the assets to be teleported from the sending account and ",(0,r.kt)("strong",{parentName:"p"},"takes them out of the circulating supply"),",\ntaking note of the total amount of assets that was taken out."),(0,r.kt)("h3",{id:"receive-teleported-assets"},"Receive Teleported Assets"),(0,r.kt)("p",null,"The source then creates an XCM instruction called ",(0,r.kt)("inlineCode",{parentName:"p"},"ReceiveTeleportedAssets")," and puts the amount of assets taken out of\ncirculation and the receiving account as parameters to this instruction. It then sends this instruction over to the\ndestination, where it gets processed and new assets get ",(0,r.kt)("strong",{parentName:"p"},"put back into circulating supply accordingly"),"."),(0,r.kt)("h3",{id:"deposit-asset"},"Deposit Asset"),(0,r.kt)("p",null,"The destination then deposits the assets to the receiving account of the asset."),(0,r.kt)("p",null,"The phrases ",(0,r.kt)("strong",{parentName:"p"},"taken out of circulating supply")," and ",(0,r.kt)("strong",{parentName:"p"},"put back into circulating supply")," are highlighted above to firstly give\nan indication of how much flexibility an XCM executor has in implementing the semantics of taking an asset out of and\nputting it back into its circulating supply. The straightforward answer is to burn the assets to take them out of\ncirculation, but one can imagine that there are indeed multiple methods of achieving the same goal, such as transferring\nthe assets locally to an inaccessible account, and likewise for putting assets back to circulation -- the receiving\nconsensus system can freely choose to implement such semantics by releasing assets from a pre-filled and inaccessible\ntreasury of the assets transferred, or perform a mint of the assets."),(0,r.kt)("p",null,"As such, the above also gives a hint on the disadvantages of this model -- it requires both the source and destination\nof have a high level of mutual trust. The destination must trust that the source has appropriately removed the assets\nthat was sent over from the circulating supply, and the source must also trust the destination to put the assets that\nwas taken out of circulation back into circulation. The result of an asset teleportation should result in the same\ncirculating supply of the asset. Failing to uphold either of these two conditions will result in a change in the asset's\ntotal issuance (in the case of fungible tokens) or a complete loss/duplication of an NFT."),(0,r.kt)("h2",{id:"teleporting-tokens-using-polkadot-js-apps-ui"},"Teleporting Tokens using Polkadot-JS Apps UI"),(0,r.kt)("p",null,"",(0,r.kt)("img",{alt:"teleport",src:n(58986).Z,width:"1365",height:"632"}),"",""),(0,r.kt)("p",null,"Here are a couple of things that you need to understand before submitting a teleport transaction"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There will be a transaction fee imposed on the source chain. This fee is ",(0,r.kt)("strong",{parentName:"li"},"not")," automatically\ndeducted from the teleport amount you plan to send. Your account balance should be greater than\nthe teleport amount and the transaction fees. If you do not account for the sending fee, the\nteleport transaction will fail. The sending fee will be deducted from your account balance.")),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Existential Deposit")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"  After the teleport, if your account balance drops below the Existential Deposit which is\n1.000 DOT, that balance will be burnt and lost. Either plan on teleporting all of\nyour balance or leave enough balance such that the account does not get reaped.\n"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There will be a transaction fee imposed at the destination chain. This fee is automatically\ndeducted from the teleport amount you send. After this fee is deducted, the remaining account\nbalance on the destination chain should be greater than its Existential Deposit. If not, the\nteleport transaction will fail and the sending fee along with the teleport amount will be deducted\nfrom your account balance.")),(0,r.kt)("p",null,"Teleportation can be done through the ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," interface or through the\n",(0,r.kt)("inlineCode",{parentName:"p"},"xcmPallet.limitedTeleportAssets()")," extrinsic. In the following example, we will be using the\nPolkadotJS interface to teleport DOT from Polkadot to Statemint."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps")," and connect to the chain with the tokens you want to teleport."),(0,r.kt)("p",{parentName:"li"},"",(0,r.kt)("img",{alt:"teleport",src:n(10400).Z,width:"2870",height:"1163"}),"","")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to \"Accounts > Teleport\". This opens the 'teleport assets' interface:"),(0,r.kt)("p",{parentName:"li"},"",(0,r.kt)("img",{alt:"teleport",src:n(79368).Z,width:"2690",height:"1305"}),"","")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Fill out the transaction:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},'"send from account" - Select the account with the source tokens.'),(0,r.kt)("li",{parentName:"ol"},'"destination chain" - Select the parachain you want to send the assets to.'),(0,r.kt)("li",{parentName:"ol"},'"send to address" - Select the account you want to be in control of the coins on the\ndestination chain.'),(0,r.kt)("li",{parentName:"ol"},'"amount" - Insert the number of tokens you want to teleport. This does not include the\ntransfer fee'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'After reviewing the transaction information and fees, click the "Teleport" button. Remember that\nthe destination chain imposes receiving fee on the teleport amount. (It is currently 0.0032 DOT on\nStatemint.)')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Click "Sign and Submit".')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Enter your password, and click "Sign the transaction".'))),(0,r.kt)("p",null,"The transaction will be signed and broadcasted, and the tokens will appear on the destination chain\nshortly. "),(0,r.kt)("p",null,"",(0,r.kt)("img",{alt:"teleport balance",src:n(29339).Z,width:"2877",height:"1163"})," "),(0,r.kt)("p",null,"A video tutorial on teleporting (on Kusama) is provided below for reference:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/PGyDpH2kad8"},(0,r.kt)("img",{parentName:"a",src:"https://img.youtube.com/vi/PGyDpH2kad8/0.jpg",alt:"Teleporting KSM"}))),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,'If you do not see "Accounts > Teleport" in ',(0,r.kt)("a",{parentName:"p",href:"https://polkadot.js.org/apps/"},"PolkadotJS Apps"),", the source chain that you have\nselected does not support teleportation yet."))}d.isMDXComponent=!0},58986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Teleport-DOT-Statemint-1bbf5774b486de222a419d8888ffe1ea.png"},10400:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Statemint-Teleport-1-debcc2b2e85911db0df8f5ea41c14af6.png"},79368:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Statemint-Teleport-2-7293729e5028b1c1625d7d0fa0565d30.png"},29339:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Statemint-Teleport-3-c7960245d157ebdfdff9b1cbe798ecec.png"},84532:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/teleport-asset-4f624ff92c1b79da7067a267f10abc95.png"}}]);