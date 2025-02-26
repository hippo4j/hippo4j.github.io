"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8235:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:3},i="\u5feb\u901f\u5f00\u59cb",p={unversionedId:"user_docs/user_guide/quick-start",id:"version-1.4.2/user_docs/user_guide/quick-start",title:"\u5feb\u901f\u5f00\u59cb",description:"\u670d\u52a1\u542f\u52a8",source:"@site/versioned_docs/version-1.4.2/user_docs/user_guide/quick-start.md",sourceDirName:"user_docs/user_guide",slug:"/user_docs/user_guide/quick-start",permalink:"/en/docs/1.4.2/user_docs/user_guide/quick-start",draft:!1,tags:[],version:"1.4.2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"\u67b6\u6784\u8bbe\u8ba1",permalink:"/en/docs/1.4.2/user_docs/user_guide/framework"},next:{title:"\u901a\u77e5\u62a5\u8b66",permalink:"/en/docs/1.4.2/user_docs/user_guide/notify"}},c={},l=[{value:"\u670d\u52a1\u542f\u52a8",id:"\u670d\u52a1\u542f\u52a8",level:2},{value:"\u914d\u7f6e\u53d8\u66f4",id:"\u914d\u7f6e\u53d8\u66f4",level:2}],s={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5feb\u901f\u5f00\u59cb"},"\u5feb\u901f\u5f00\u59cb"),(0,o.kt)("h2",{id:"\u670d\u52a1\u542f\u52a8"},"\u670d\u52a1\u542f\u52a8"),(0,o.kt)("p",null,"\u4f7f\u7528 Docker \u8fd0\u884c\u670d\u52a1\u7aef\uff0c\u9ed8\u8ba4\u4f7f\u7528\u5185\u7f6e H2 \u6570\u636e\u5e93\uff0c\u6570\u636e\u6301\u4e45\u5316\u5230 Docker \u5bb9\u5668\u5b58\u50a8\u5377\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 6691:6691 --name hippo4j-server hippo4j/hippo4j-server\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u6ca1\u6709 Docker\uff0c\u53ef\u4ee5\u4f7f\u7528\u6e90\u7801\u7f16\u8bd1\u7684\u65b9\u5f0f\uff0c\u542f\u52a8 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/longtai-cn/hippo4j/tree/develop/hippo4j-server/hippo4j-bootstrap"},"Hippo4j-Server/Hippo4j-Bootstrap")," \u6a21\u5757\u4e0b ServerApplication \u5e94\u7528\u7c7b\u3002")),(0,o.kt)("p",null,"\u542f\u52a8\u793a\u4f8b\u9879\u76ee\uff0c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/opengoofy/hippo4j/tree/develop/hippo4j-example/hippo4j-spring-boot-starter-example"},"hippo4j-spring-boot-starter-example")," \u6a21\u5757\u4e0b ServerExampleApplication \u5e94\u7528\u7c7b\u3002"),(0,o.kt)("p",null,"\u8bbf\u95ee Server \u63a7\u5236\u53f0\uff0c\u8def\u5f84 ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:6691/index.html"),"\uff0c\u9ed8\u8ba4\u7528\u6237\u540d\u5bc6\u7801\uff1aadmin / 123456"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u53d8\u66f4"},"\u914d\u7f6e\u53d8\u66f4"),(0,o.kt)("p",null,"\u8bbf\u95ee\u63a7\u5236\u53f0\u52a8\u6001\u7ebf\u7a0b\u6c60\u83dc\u5355\u4e0b\u7ebf\u7a0b\u6c60\u5b9e\u4f8b\uff0c\u4fee\u6539\u52a8\u6001\u7ebf\u7a0b\u6c60\u76f8\u5173\u53c2\u6570\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220813173811668.png",alt:null})),(0,o.kt)("p",null,"\u89c2\u5bdf Hippo4j-Example \u63a7\u5236\u53f0\u65e5\u5fd7\u8f93\u51fa\uff0c\u65e5\u5fd7\u8f93\u51fa\u5305\u62ec\u4e0d\u9650\u4e8e\u6b64\u4fe1\u606f\u5373\u4e3a\u6210\u529f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tex"},"2022-09-10 00:23:29.783  INFO 50322 --- [change.config_0] c.h.s.s.c.ServerThreadPoolDynamicRefresh : [message-consume] Dynamic thread pool change parameter.\n    corePoolSize: 2 => 4\n    maximumPoolSize: 6 => 12\n    capacity: 1024 => 2048\n    keepAliveTime: 9999 => 9999\n    executeTimeOut: 800 => 3000\n    rejectedType: SyncPutQueuePolicy => RunsOldestTaskPolicy\n    allowCoreThreadTimeOut: true => true\n")),(0,o.kt)("p",null,"\u53e6\u5916\uff0c\u5f53 Client \u96c6\u7fa4\u90e8\u7f72\u65f6\uff0c\u53ef\u4ee5\u4fee\u6539\u67d0\u4e00\u4e2a\u5b9e\u4f8b\uff0c\u6216\u9009\u62e9 ",(0,o.kt)("inlineCode",{parentName:"p"},"\u5168\u90e8\u4fee\u6539")," \u6309\u94ae\uff0c\u4fee\u6539\u6240\u6709\u5b9e\u4f8b\u7ebf\u7a0b\u6c60\u4fe1\u606f\u3002"))}d.isMDXComponent=!0}}]);