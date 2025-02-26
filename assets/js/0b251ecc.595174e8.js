"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7482],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},p="\u6e90\u7801\u5305\u90e8\u7f72",l={unversionedId:"user_docs/ops/hippo4j-server-deploy",id:"version-1.4.2/user_docs/ops/hippo4j-server-deploy",title:"\u6e90\u7801\u5305\u90e8\u7f72",description:"RELEASE \u9875\u9762\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u5e76\u8fdb\u884c\u89e3\u538b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.4.2/user_docs/ops/hippo4j-server-deploy.md",sourceDirName:"user_docs/ops",slug:"/user_docs/ops/hippo4j-server-deploy",permalink:"/docs/1.4.2/user_docs/ops/hippo4j-server-deploy",draft:!1,tags:[],version:"1.4.2",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u8fd0\u7ef4\u6307\u5357",permalink:"/docs/1.4.2/category/\u8fd0\u7ef4\u6307\u5357-1"},next:{title:"Docker\u90e8\u7f72",permalink:"/docs/1.4.2/user_docs/ops/server-docker"}},s={},i=[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"\u76f4\u63a5\u8fd0\u884c",id:"\u76f4\u63a5\u8fd0\u884c",level:2},{value:"\u8bbf\u95ee\u63a7\u5236\u53f0",id:"\u8bbf\u95ee\u63a7\u5236\u53f0",level:2}],c={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6e90\u7801\u5305\u90e8\u7f72"},"\u6e90\u7801\u5305\u90e8\u7f72"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/opengoofy/hippo4j/releases"},"RELEASE")," \u9875\u9762\u4e0b\u8f7d\u5bf9\u5e94\u7248\u672c\u5e76\u8fdb\u884c\u89e3\u538b\u3002"),(0,o.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u4fee\u6539\u6570\u636e\u5e93\u76f8\u5173\u4fe1\u606f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"/conf/application.properties\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f\u65b0\u8fd0\u884c Hippo4j\uff0c\u6570\u636e\u5e93\u6267\u884c\u4e0b\u8ff0 SQL \u811a\u672c\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"/conf/hippo4j_manager.sql\n")),(0,o.kt)("p",null,"\u5982\u679c\u662f\u5bf9\u5df2\u8fd0\u884c Hippo4j \u5347\u7ea7\uff0c\u8bf7\u67e5\u770b ",(0,o.kt)("inlineCode",{parentName:"p"},"/conf/sql-upgrade")," \u76ee\u5f55\u4e0b\uff0c\u662f\u5426\u6709\u76ee\u6807\u7248\u672c\u5bf9\u5e94\u7684\u5347\u7ea7\u811a\u672c\u3002"),(0,o.kt)("h2",{id:"\u76f4\u63a5\u8fd0\u884c"},"\u76f4\u63a5\u8fd0\u884c"),(0,o.kt)("p",null,"Mac Linux \u542f\u52a8\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"sh ./bin/startup.sh\n")),(0,o.kt)("p",null,"Windows \u542f\u52a8\u6267\u884c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"bin/startup.cmd\n")),(0,o.kt)("h2",{id:"\u8bbf\u95ee\u63a7\u5236\u53f0"},"\u8bbf\u95ee\u63a7\u5236\u53f0"),(0,o.kt)("p",null,"\u542f\u52a8\u6210\u529f\u540e\uff0c\u8bbf\u95ee\u94fe\u63a5\u3002\u7528\u6237\u540d\u5bc6\u7801\uff1aadmin 123456"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-txt"},"localhost:6691/index.html\n")))}d.isMDXComponent=!0}}]);