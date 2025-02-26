"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3329],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(r),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[d]="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6505:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u9002\u914d",p={unversionedId:"user_docs/getting_started/hippo4j-adapter",id:"version-1.4.3/user_docs/getting_started/hippo4j-adapter",title:"\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u9002\u914d",description:"Hippo4j \u76ee\u524d\u5df2\u652f\u6301\u7684\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u5217\u8868\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.4.3/user_docs/getting_started/hippo4j-adapter.md",sourceDirName:"user_docs/getting_started",slug:"/user_docs/getting_started/hippo4j-adapter",permalink:"/docs/1.4.3/user_docs/getting_started/hippo4j-adapter",draft:!1,tags:[],version:"1.4.3",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"user_docs",previous:{title:"\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/docs/1.4.3/user_docs/getting_started/server/hippo4j-server-config"},next:{title:"\u8fd0\u7ef4\u6307\u5357",permalink:"/docs/1.4.3/category/\u8fd0\u7ef4\u6307\u5357-1"}},c={},l=[{value:"Hippo4j Server",id:"hippo4j-server",level:2},{value:"Hippo4j Config",id:"hippo4j-config",level:2}],s={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u9002\u914d"},"\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u9002\u914d"),(0,a.kt)("p",null,"Hippo4j \u76ee\u524d\u5df2\u652f\u6301\u7684\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u5217\u8868\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Dubbo"),(0,a.kt)("li",{parentName:"ul"},"Hystrix"),(0,a.kt)("li",{parentName:"ul"},"RabbitMQ"),(0,a.kt)("li",{parentName:"ul"},"RocketMQ"),(0,a.kt)("li",{parentName:"ul"},"AlibabaDubbo"),(0,a.kt)("li",{parentName:"ul"},"RocketMQSpringCloudStream"),(0,a.kt)("li",{parentName:"ul"},"RabbitMQSpringCloudStream")),(0,a.kt)("p",null,"\u5f15\u5165 Hippo4j Server \u6216 Core \u7684 Maven Jar \u5750\u6807\u540e\uff0c\u8fd8\u9700\u8981\u5f15\u5165\u5bf9\u5e94\u7684\u6846\u67b6\u9002\u914d Jar\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cn.hippo4j</groupId>\n    \x3c!-- Dubbo --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-dubbo</artifactId>\n    \x3c!-- Alibaba Dubbo --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-alibaba-dubbo</artifactId>\n    \x3c!-- Hystrix --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-hystrix</artifactId>\n    \x3c!-- RabbitMQ --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-rabbitmq</artifactId>\n    \x3c!-- RocketMQ --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-rocketmq</artifactId>\n    \x3c!-- SpringCloud Stream RocketMQ --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-spring-cloud-stream-rocketmq</artifactId>\n    \x3c!-- SpringCloud Stream RabbitMQ --\x3e\n    <artifactId>hippo4j-spring-boot-starter-adapter-spring-cloud-stream-rabbitmq</artifactId>\n    <version>1.4.3-upgrade</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u5982\u679c\u60f3\u7701\u4e8b\uff0c\u4ec5\u9700\u5f15\u5165\u4e00\u4e2a\u5168\u91cf\u5305\uff0c\u6846\u67b6\u5e95\u5c42\u4f1a\u6839\u636e\u6761\u4ef6\u5224\u65ad\u52a0\u8f7d\u5177\u4f53\u7ebf\u7a0b\u6c60\u9002\u914d\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cn.hippo4j</groupId>\n    <artifactId>hippo4j-spring-boot-starter-adapter-all</artifactId>\n    <version>1.4.3-upgrade</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"hippo4j-server"},"Hippo4j Server"),(0,a.kt)("p",null,"Hippo4j Server \u4ec5\u9700\u8981\u5f15\u5165\u4e0a\u8ff0 Jar \u5305\uff0c\u5373\u53ef\u5728 Hippo4j Server \u7684\u63a7\u5236\u53f0\u8fdb\u884c\u67e5\u770b\u53ca\u4fee\u6539\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220531194810047.png",alt:null})),(0,a.kt)("h2",{id:"hippo4j-config"},"Hippo4j Config"),(0,a.kt)("p",null,"Hippo4j Config \u9664\u4e86\u4f9d\u8d56\u4e0a\u8ff0\u9002\u914d Jar \u5305\u5916\uff0c\u8fd8\u9700\u8981\u5728\u914d\u7f6e\u4e2d\u5fc3\u6dfb\u52a0\u4ee5\u4e0b\u914d\u7f6e\u9879\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  dynamic:\n    thread-pool:\n      # \u7701\u7565\u5176\u5b83\u914d\u7f6e\n      adapter-executors:\n        # threadPoolKey \u4ee3\u8868\u7ebf\u7a0b\u6c60\u6807\u8bc6\n        - threadPoolKey: 'input'\n          # mark \u4e3a\u4e09\u65b9\u7ebf\u7a0b\u6c60\u6846\u67b6\u7c7b\u578b\uff0c\u53c2\u89c1\u6587\u521d\u5df2\u652f\u6301\u6846\u67b6\u96c6\u5408\n          mark: 'RocketMQSpringCloudStream'\n          corePoolSize: 10\n          maximumPoolSize: 10\n")))}u.isMDXComponent=!0}}]);