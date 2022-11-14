"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[8709],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6999:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={id:"faster-fiber",title:"\u26a1 Make Fiber Faster",sidebar_position:7},i=void 0,c={unversionedId:"guide/faster-fiber",id:"guide/faster-fiber",title:"\u26a1 Make Fiber Faster",description:"Custom JSON Encoder/Decoder",source:"@site/docs/guide/faster-fiber.md",sourceDirName:"guide",slug:"/guide/faster-fiber",permalink:"/docs/guide/faster-fiber",draft:!1,editUrl:"https://github.com/gofiber/docs/docs/guide/faster-fiber.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668440041,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:7,frontMatter:{id:"faster-fiber",title:"\u26a1 Make Fiber Faster",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"\ud83e\ude9d Hooks",permalink:"/docs/guide/hooks"},next:{title:"Extra",permalink:"/docs/category/extra"}},s={},l=[{value:"Custom JSON Encoder/Decoder",id:"custom-json-encoderdecoder",level:2},{value:"References",id:"references",level:3}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"custom-json-encoderdecoder"},"Custom JSON Encoder/Decoder"),(0,o.kt)("p",null,"Since Fiber v2.32.0, we use ",(0,o.kt)("strong",{parentName:"p"},"encoding/json")," as default json library due to stability and producibility. However, the standard library is a bit slow compared to 3rd party libraries. If you're not happy with the performance of ",(0,o.kt)("strong",{parentName:"p"},"encoding/json"),", we recommend you to use these libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/goccy/go-json"},"goccy/go-json")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/bytedance/sonic"},"bytedance/sonic")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/segmentio/encoding"},"segmentio/encoding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/mailru/easyjson"},"mailru/easyjson")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/minio/simdjson-go"},"minio/simdjson-go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/wI2L/jettison"},"wI2L/jettison"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="Example"',title:'"Example"'},'package main\n\nimport "github.com/gofiber/fiber/v2"\nimport "github.com/goccy/go-json"\n\nfunc main() {\n    app := fiber.New(fiber.Config{\n        JSONEncoder: json.Marshal,\n        JSONDecoder: json.Unmarshal,\n    })\n\n    # ...\n}\n')),(0,o.kt)("h3",{id:"references"},"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/client#jsonencoder"},"Set custom JSON encoder for client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/client#jsondecoder"},"Set custom JSON decoder for client")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/fiber#config"},"Set custom JSON encoder for application")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/api/fiber#config"},"Set custom JSON decoder for application"))))}u.isMDXComponent=!0}}]);