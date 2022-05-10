"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9017],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>h});var a=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,a,s=function(t,e){if(null==t)return{};var n,a,s={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var l=a.createContext({}),c=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=c(t.components);return a.createElement(l.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,s=t.mdxType,i=t.originalType,l=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),u=c(n),h=s,p=u["".concat(l,".").concat(h)]||u[h]||m[h]||i;return n?a.createElement(p,o(o({ref:e},d),{},{components:n})):a.createElement(p,o({ref:e},d))}));function h(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var i=n.length,o=new Array(i);o[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=t,r.mdxType="string"==typeof t?t:s,o[1]=r;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83287:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>m});var a=n(87462),s=n(63366),i=(n(67294),n(3905)),o=["components"],r={id:"learn-statemint",title:"Statemint",sidebar_label:"Statemint",description:"Statemint and its features",slug:"../../learn-statemint"},l=void 0,c={unversionedId:"learn/learn-statemint",id:"learn/learn-statemint",title:"Statemint",description:"Statemint and its features",source:"@site/../docs/learn/learn-statemint.md",sourceDirName:"learn",slug:"/learn-statemint",permalink:"/ru-RU/docs/learn-statemint",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/learn-statemint.md",tags:[],version:"current",lastUpdatedBy:"Radha",lastUpdatedAt:1652185949,formattedLastUpdatedAt:"10.05.2022",frontMatter:{id:"learn-statemint",title:"Statemint",sidebar_label:"Statemint",description:"Statemint and its features",slug:"../../learn-statemint"},sidebar:"docs",previous:{title:"NFTs",permalink:"/ru-RU/docs/learn-nft"},next:{title:"Teleporting Assets",permalink:"/ru-RU/docs/learn-teleport"}},d={},m=[{value:"Creating Assets on Statemint",id:"creating-assets-on-statemint",level:2},{value:"Transferring Assets on Statemint",id:"transferring-assets-on-statemint",level:2}],u={toc:m};function h(t){var e=t.components,r=(0,s.Z)(t,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Statemint is a generic assets parachain which provides functionality for deploying and transferring\nassets \u2014 both Fungible and Non-Fungible Tokens (NFTs). It is a common good parachain on Polkadot\n(not to be confused with ",(0,i.kt)("a",{parentName:"p",href:"https://guide.kusama.network/docs/kusama-statemine/"},"Statemine"),", which is\na parachain on Kusama). The native token of Statemint is DOT. The Existential Deposit (ED), transfer fees,\nand the deposits for proxy/multisig operations on Statemint are about 1/10th of the values on the Relay chain.\nFor example, the Existential Deposit of a Statemint account is 0.1 DOT, when compared to 1 DOT on Polkadot.\nApart from the core protocol token DOT, the assets held on Statemint can be broadly categorized as"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Assets backed by an on-chain protocol\u2019s utility"),(0,i.kt)("li",{parentName:"ul"},"Assets with off-chain backing"),(0,i.kt)("li",{parentName:"ul"},"Assets without any backing")),(0,i.kt)("h2",{id:"creating-assets-on-statemint"},"Creating Assets on Statemint"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Before minting assets on Statemint, we recommend that you try out this tutorial on Westmint, which\nis a parachain on Westend. The WND tokens (Westies) are free and are available through a\n",(0,i.kt)("a",{parentName:"p",href:"https://wiki.polkadot.network/docs/learn-DOT#getting-westies"},"faucet"),"."))),(0,i.kt)("p",null,"To create an asset on Statemint, you would need a deposit of 100 DOT and around 2 DOT for the metadata\n. Before you create an asset on Statemint, ensure that your Statemint account balance is more\nthan 103 DOT, which should seamlessly account for the required deposits and transaction fees. You can\nsend DOT from a Polkadot account to a Statemint account using the teleport functionality. For\ninstructions on teleporting DOT, check this ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-teleport"},"tutorial on Teleports"),"."),(0,i.kt)("p",null,"Assuming you have the required DOT balance on your Statemint account, the following instructions\nshould let you successfully create an asset on Statemint"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemint through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Navigate to Assets page",src:n(91182).Z,width:"1222",height:"380"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the create button and you will be presented with a pop-up window. Choose the creator\naccount, name of the asset to be displayed on Statemint, the asset's symbol, number of decimals\nfor the asset, the minimum balance required to hold this asset on a Statemint account and the most\nimportant field of your asset - the unique asset ID. The UI would not let you enter an ID that has\nalready been taken. After all the details are entered, click on the next button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Asset Metadata",src:n(28523).Z,width:"1510",height:"798"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Choose the admin, issuer and the freezer accounts for your asset and click on the create button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset managing accounts",src:n(98600).Z,width:"1518",height:"510"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction. (If you like to verify the transaction details before signing,\nyou can click on the dropdown button pointed by the arrow in the snapshot below)")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:n(59416).Z,width:"1520",height:"610"})),(0,i.kt)("p",null,"If the transaction is successful, you should see the asset and its details displayed in the\nNetwork > Assets page on Statemint."),(0,i.kt)("h2",{id:"transferring-assets-on-statemint"},"Transferring Assets on Statemint"),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Beware of scams")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Due to the permissionless nature of Statemint, anyone can create an asset with any name and symbol.\nThe most important attribute of an asset is the asset ID. There could be multiple assets with the\nsame name and symbol, but they cannot have the same asset ID."))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The assets can be Sufficient or Non-Sufficient. To hold a Non-Sufficient asset, the Statemint\naccount needs to exist on-chain. This is different from Ethereum where a non-existent account can\nhold ERC-20 tokens. Ensure that the receiver account has at least 0.1 DOT which is the Existential\nDeposit for a Statemint account. Although, there are a few exceptions to this - If an asset is\nSufficient or someone has placed a deposit for that account to hold the asset, the Existential\nDeposit in DOT on the receiver account is not needed."))),(0,i.kt)("p",null,"To hold, send or receive most of the assets on Statemint (which are Non-Suffcient), the accounts\nneed to have a minimum balance of 0.1 DOT (The Existential Deposit on Statemint). You can send DOT\nfrom a Polkadot account to a Statemint account using the teleport functionality. For instructions on\nteleporting DOT, check this ",(0,i.kt)("a",{parentName:"p",href:"/ru-RU/docs/learn-teleport"},"tutorial on Teleports"),". The balance transfers of DOT\non Statemint are similar to the balance transfers DOT on Polkadot and can be done on the accounts\npage on Polkadot-JS Apps UI."),(0,i.kt)("p",null,"In this tutorial, transfer of JOEs (Asset ID: 8, Symbol: JOE) is demonstrated."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Access Statemint through Polkdot-JS Apps UI."),(0,i.kt)("li",{parentName:"ul"},"Navigate to Network > Assets and click on the Balances tab"),(0,i.kt)("li",{parentName:"ul"},"Select the asset to transfer from the drop-down (The assets are sorted based on their IDs). If you\nhave accounts with the selected asset, they will be displayed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Finding the asset",src:n(41958).Z,width:"1844",height:"408"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the send button"),(0,i.kt)("li",{parentName:"ul"},"Enter the receiver address and the amount to transfer.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Asset transfer transaction",src:n(39802).Z,width:"1516",height:"674"})),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Sign and submit the transaction")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Sign asset creating transaction",src:n(40993).Z,width:"1516",height:"592"})),(0,i.kt)("p",null,"If the transaction is successful, the assets are transferred to the receiver account."))}h.isMDXComponent=!0},91182:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-0-c5f6c1142338248879ebbf478c15da9f.png"},28523:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-1-6f406281abdca9f5c2941ebd4d9479fd.png"},98600:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-2-2fd6118841d0c4e037d5f51c6b1010e1.png"},59416:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-3-3952e84a1b7c80239e8fb1f907af2583.png"},41958:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-transfer-1-7c5f1a4aca8065abd4f1a4d236ac6608.png"},39802:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-transfer-2-53544e89f9bdda9d05ec85d7f7d2a684.png"},40993:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/Statemint-asset-transfer-3-47efc6342359c1954b56dab347df9738.png"}}]);