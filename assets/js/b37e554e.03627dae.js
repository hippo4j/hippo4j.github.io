"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6546],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,g=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,a[1]=p;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7975:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:3},a="\u4e2a\u6027\u5316\u914d\u7f6e",p={unversionedId:"user_docs/getting_started/config/hippo4j-config-more",id:"version-1.4.2/user_docs/getting_started/config/hippo4j-config-more",title:"\u4e2a\u6027\u5316\u914d\u7f6e",description:"\u4ee5\u4e0b\u6240\u8ff0\u7279\u6027\u81ea hippo4j-config v1.4.2 \u53ca\u4ee5\u4e0a\u7248\u672c\u63d0\u4f9b\uff0c\u7531 hippo4j \u6838\u5fc3\u5f00\u53d1\u8005 @pizihao \u5b8c\u6210\u76f8\u5e94\u529f\u80fd\u5f00\u53d1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.4.2/user_docs/getting_started/config/hippo4j-config-more.md",sourceDirName:"user_docs/getting_started/config",slug:"/user_docs/getting_started/config/hippo4j-config-more",permalink:"/docs/1.4.2/user_docs/getting_started/config/hippo4j-config-more",draft:!1,tags:[],version:"1.4.2",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"\u7ebf\u7a0b\u6c60\u76d1\u63a7",permalink:"/docs/1.4.2/user_docs/getting_started/config/hippo4j-config-monitor"},next:{title:"\u53c2\u6570\u9ed8\u8ba4\u914d\u7f6e",permalink:"/docs/1.4.2/user_docs/getting_started/config/hippo4j-config-default"}},l={},s=[{value:"\u9700\u6c42\u80cc\u666f",id:"\u9700\u6c42\u80cc\u666f",level:2},{value:"\u5bb9\u5668\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u81ea\u5b9a\u4e49\u542f\u7528",id:"\u5bb9\u5668\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u81ea\u5b9a\u4e49\u542f\u7528",level:2},{value:"\u5ba2\u6237\u7aef\u96c6\u7fa4\u4e2a\u6027\u5316\u914d\u7f6e",id:"\u5ba2\u6237\u7aef\u96c6\u7fa4\u4e2a\u6027\u5316\u914d\u7f6e",level:2}],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u4e2a\u6027\u5316\u914d\u7f6e"},"\u4e2a\u6027\u5316\u914d\u7f6e"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u6240\u8ff0\u7279\u6027\u81ea hippo4j-config v1.4.2 \u53ca\u4ee5\u4e0a\u7248\u672c\u63d0\u4f9b\uff0c\u7531 hippo4j \u6838\u5fc3\u5f00\u53d1\u8005 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pizihao"},"@pizihao")," \u5b8c\u6210\u76f8\u5e94\u529f\u80fd\u5f00\u53d1\u3002"),(0,o.kt)("h2",{id:"\u9700\u6c42\u80cc\u666f"},"\u9700\u6c42\u80cc\u666f"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1\uff09\u5bb9\u5668\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u81ea\u5b9a\u4e49\u542f\u7528")),(0,o.kt)("p",null,"\u6700\u521d\u8bbe\u8ba1\u5bb9\u5668\u7ebf\u7a0b\u6c60\u548c\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u7684\u52a8\u6001\u53d8\u66f4\u662f\u548c\u542f\u52a8\u65e0\u5173\u7684\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u542f\u52a8\u65f6\u4e0d\u4f1a\u6839\u636e\u914d\u7f6e\u6587\u4ef6\u4e2d\u76f8\u5173\u53c2\u6570\u53bb\u4fee\u6539\u4e24\u8005\u5bf9\u5e94\u7684\u7ebf\u7a0b\u6c60\u914d\u7f6e\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e48\u8bbe\u8ba1\u7684\u521d\u8877\u662f\u56e0\u4e3a\uff0c\u4e0d\u60f3\u8ba9 hippo4j \u8fc7\u591a\u7684\u53bb\u4ecb\u5165\u6846\u67b6\u539f\u6709\u7684\u529f\u80fd\u3002\u56e0\u4e3a\u5bb9\u5668\u548c\u4e09\u65b9\u6846\u67b6\u90fd\u652f\u6301\u7ebf\u7a0b\u6c60\u53c2\u6570\u7684\u81ea\u5b9a\u4e49\u3002"),(0,o.kt)("p",null,"\u4e5f\u5c31\u9020\u6210\uff0c\u53ef\u80fd\u4f60\u5728\u914d\u7f6e\u4e2d\u5fc3\u914d\u7f6e\u4e86\u5bf9\u5e94\u7684\u5bb9\u5668\u548c\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u53c2\u6570\uff0c\u542f\u52a8\u65f6\u662f\u65e0\u6548\u7684\u3002\u4f46\u5f53\u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u4efb\u4e00\u914d\u7f6e\uff0c\u5bb9\u5668\u548c\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u914d\u7f6e\u5c06\u751f\u6548\u3002"),(0,o.kt)("p",null,"\u4e3a\u4e86\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\uff0c\u51b3\u5b9a\u52a0\u5165\u542f\u7528\u6807\u8bc6\u6765\u63a7\u5236\uff1a\u662f\u5426\u5728\u9879\u76ee\u521d\u59cb\u5316\u542f\u52a8\u65f6\uff0c\u5bf9\u5bb9\u5668\u548c\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u53c2\u6570\u8fdb\u884c\u4fee\u6539\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2\uff09\u5ba2\u6237\u7aef\u96c6\u7fa4\u4e2a\u6027\u5316\u914d\u7f6e")),(0,o.kt)("p",null,"\u5927\u5bb6\u90fd\u77e5\u9053\uff0chippo4j-config \u662f\u4f9d\u8d56\u914d\u7f6e\u4e2d\u5fc3\u505a\u7ebf\u7a0b\u6c60\u914d\u7f6e\u52a8\u6001\u53d8\u66f4\u3002\u8fd9\u79cd\u6a21\u5f0f\u6709\u4e00\u79cd\u7f3a\u70b9\uff1a\u6539\u52a8\u914d\u7f6e\u6587\u4ef6\u540e\uff0c\u6240\u6709\u5ba2\u6237\u7aef\u90fd\u4f1a\u53d8\u66f4\u3002"),(0,o.kt)("p",null,"\u6709\u4e9b\u5c0f\u4f19\u4f34\u5e0c\u671b hippo4j-config \u80fd\u591f\u50cf hippo4j-server \u4e00\u6837\uff0c\u80fd\u591f\u9488\u5bf9\u5355\u72ec\u7684\u5ba2\u6237\u7aef\u8fdb\u884c\u914d\u7f6e\u53d8\u66f4\u3002"),(0,o.kt)("h2",{id:"\u5bb9\u5668\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u81ea\u5b9a\u4e49\u542f\u7528"},"\u5bb9\u5668\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u81ea\u5b9a\u4e49\u542f\u7528"),(0,o.kt)("p",null,"\u5bb9\u5668\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u6dfb\u52a0\u542f\u7528\u914d\u7f6e\uff0c\u4e3a\u4e86\u4fdd\u6301\u7edf\u4e00\uff0c\u52a8\u6001\u7ebf\u7a0b\u6c60\u914d\u7f6e\u4e2d\u4e5f\u6709\u8be5\u53c2\u6570\u914d\u7f6e\u3002\u914d\u7f6e\u9879\u9ed8\u8ba4\u5f00\u542f\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  dynamic:\n    thread-pool:\n      tomcat:\n        enable: true\n      executors:\n        - thread-pool-id: message-consume\n          enable: false\n      adapter-executors:\n        - threadPoolKey: 'input'\n          enable: true\n")),(0,o.kt)("h2",{id:"\u5ba2\u6237\u7aef\u96c6\u7fa4\u4e2a\u6027\u5316\u914d\u7f6e"},"\u5ba2\u6237\u7aef\u96c6\u7fa4\u4e2a\u6027\u5316\u914d\u7f6e"),(0,o.kt)("p",null,"\u5206\u522b\u5728\u52a8\u6001\u7ebf\u7a0b\u6c60\u3001\u5bb9\u5668\u7ebf\u7a0b\u6c60\u4ee5\u53ca\u4e09\u65b9\u6846\u67b6\u7ebf\u7a0b\u6c60\u914d\u7f6e\u4e0b\u589e\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," \u914d\u7f6e\u8282\u70b9\uff0c\u901a\u8fc7\u8be5\u914d\u7f6e\u53ef\u5339\u914d\u9700\u8981\u53d8\u66f4\u7684\u8282\u70b9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  dynamic:\n    thread-pool:\n      tomcat:\n        nodes: 192.168.1.5:*,192.168.1.6:8080\n      executors:\n      - thread-pool-id: message-consume\n        nodes: 192.168.1.5:*\n      adapter-executors:\n        - threadPoolKey: 'input'\n          nodes: 192.168.1.5:*\n")),(0,o.kt)("p",null,"\u6765\u4e00\u6bb5\u4ee3\u7801\u65b9\u6cd5\u4e2d\u7684\u6ce8\u91ca\uff0c\u5927\u5bb6\u5c31\u57fa\u672c\u660e\u767d\u5982\u4f55\u4f7f\u7528\u4e86\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * Matching nodes<br>\n * nodes is ip + port.Get 'nodes' in the new Properties,Compare this with the ip + port of Application.<br>\n * support prefix pattern matching. e.g: <br>\n * <ul>\n *     <li>192.168.1.5:* -- Matches all ports of 192.168.1.5</li>\n *     <li>192.168.1.*:2009 -- Matches 2009 port of 192.168.1.*</li>\n *     <li>* -- all</li>\n *     <li>empty -- all</li>\n * </ul>\n * The format of ip + port is ip : port.\n */\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"nodes")," \u53ef\u4e0e ",(0,o.kt)("inlineCode",{parentName:"p"},"enable")," \u540c\u65f6\u4f7f\u7528\u3002\u5982\u6b64\uff0c\u57fa\u4e8e\u914d\u7f6e\u4e2d\u5fc3\u7684\u52a8\u6001\u7ebf\u7a0b\u6c60\u5b9e\u73b0\u65b9\u5f0f\uff0c\u5c06\u80fd\u591f\u66f4\u65b9\u4fbf\u7684\u652f\u6301\u4e2a\u6027\u5316\u9700\u6c42\u3002"))}d.isMDXComponent=!0}}]);