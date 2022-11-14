"use strict";(self.webpackChunkfiber_docs=self.webpackChunkfiber_docs||[]).push([[7876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var d=2;d<o;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(7462),i=(n(7294),n(3905));const o={id:"limiter",title:"Limiter",sidebar_position:11},a=void 0,l={unversionedId:"api/middleware/limiter",id:"api/middleware/limiter",title:"Limiter",description:"Limiter middleware for Fiber used to limit repeated requests to public APIs and/or endpoints such as password reset etc. Also useful for API clients, web crawling, or other tasks that need to be throttled.",source:"@site/docs/api/middleware/limiter.md",sourceDirName:"api/middleware",slug:"/api/middleware/limiter",permalink:"/docs/api/middleware/limiter",draft:!1,editUrl:"https://github.com/gofiber/docs/docs/api/middleware/limiter.md",tags:[],version:"current",lastUpdatedBy:"Muhammed Efe \xc7etin",lastUpdatedAt:1668440041,formattedLastUpdatedAt:"Nov 14, 2022",sidebarPosition:11,frontMatter:{id:"limiter",title:"Limiter",sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"FileSystem",permalink:"/docs/api/middleware/filesystem"},next:{title:"Logger",permalink:"/docs/api/middleware/logger"}},s={},d=[{value:"Signatures",id:"signatures",level:2},{value:"Examples",id:"examples",level:2},{value:"Sliding window",id:"sliding-window",level:2},{value:"Config",id:"config",level:2},{value:"Default Config",id:"default-config",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Limiter middleware for ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/gofiber/fiber"},"Fiber")," used to limit repeated requests to public APIs and/or endpoints such as password reset etc. Also useful for API clients, web crawling, or other tasks that need to be throttled."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This module does not share state with other processes/servers by default.")),(0,i.kt)("h2",{id:"signatures"},"Signatures"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"func New(config ...Config) fiber.Handler\n")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("p",null,"Import the middleware package that is part of the Fiber web framework"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  "github.com/gofiber/fiber/v2"\n  "github.com/gofiber/fiber/v2/middleware/limiter"\n)\n')),(0,i.kt)("p",null,"After you initiate your Fiber app, you can use the following possibilities:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// Default middleware config\napp.Use(limiter.New())\n\n// Or extend your config for customization\napp.Use(limiter.New(limiter.Config{\n    Next: func(c *fiber.Ctx) bool {\n        return c.IP() == "127.0.0.1"\n    },\n    Max:          20,\n    Expiration:     30 * time.Second,\n    KeyGenerator:          func(c *fiber.Ctx) string {\n        return c.Get("x-forwarded-for")\n    },\n    LimitReached: func(c *fiber.Ctx) error {\n        return c.SendFile("./toofast.html")\n    },\n    Storage: myCustomStorage{}\n}))\n')),(0,i.kt)("h2",{id:"sliding-window"},"Sliding window"),(0,i.kt)("p",null,"Instead of using the standard fixed window algorithm, you can enable the ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sliding_window_protocol"},"sliding window")," algorithm."),(0,i.kt)("p",null,"A example of such configuration is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"app.Use(limiter.New(limiter.Config{\n    Max:            20,\n    Expiration:     30 * time.Second,\n    LimiterMiddleware: limiter.SlidingWindow{}\n}))\n")),(0,i.kt)("p",null,"This means that every window will take into account the previous window(if there was any). The given formula for the rate is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"weightOfPreviousWindpw = previous window's amount request * (whenNewWindow / Expiration)\nrate = weightOfPreviousWindpw + current window's amount request.\n")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"// Config defines the config for middleware.\ntype Config struct {\n    // Next defines a function to skip this middleware when returned true.\n    //\n    // Optional. Default: nil\n    Next func(c *fiber.Ctx) bool\n\n    // Max number of recent connections during `Expiration` seconds before sending a 429 response\n    //\n    // Default: 5\n    Max int\n\n    // KeyGenerator allows you to generate custom keys, by default c.IP() is used\n    //\n    // Default: func(c *fiber.Ctx) string {\n    //   return c.IP()\n    // }\n    KeyGenerator func(*fiber.Ctx) string\n\n    // Expiration is the time on how long to keep records of requests in memory\n    //\n    // Default: 1 * time.Minute\n    Expiration time.Duration\n\n    // LimitReached is called when a request hits the limit\n    //\n    // Default: func(c *fiber.Ctx) error {\n    //   return c.SendStatus(fiber.StatusTooManyRequests)\n    // }\n    LimitReached fiber.Handler\n\n    // When set to true, requests with StatusCode >= 400 won't be counted.\n    //\n    // Default: false\n    SkipFailedRequests bool\n\n    // When set to true, requests with StatusCode < 400 won't be counted.\n    //\n    // Default: false\n    SkipSuccessfulRequests bool\n\n    // Store is used to store the state of the middleware\n    //\n    // Default: an in memory store for this process only\n    Storage fiber.Storage\n\n    // LimiterMiddleware is the struct that implements limiter middleware.\n    //\n    // Default: a new Fixed Window Rate Limiter\n    LimiterMiddleware LimiterHandler\n}\n")),(0,i.kt)("p",null,"A custom store can be used if it implements the ",(0,i.kt)("inlineCode",{parentName:"p"},"Storage")," interface - more details and an example can be found in ",(0,i.kt)("inlineCode",{parentName:"p"},"store.go"),"."),(0,i.kt)("h2",{id:"default-config"},"Default Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"var ConfigDefault = Config{\n    Max:        5,\n    Expiration: 1 * time.Minute,\n    KeyGenerator: func(c *fiber.Ctx) string {\n        return c.IP()\n    },\n    LimitReached: func(c *fiber.Ctx) error {\n        return c.SendStatus(fiber.StatusTooManyRequests)\n    },\n    SkipFailedRequests: false,\n    SkipSuccessfulRequests: false,\n    LimiterMiddleware: FixedWindow{},\n}\n")))}c.isMDXComponent=!0}}]);