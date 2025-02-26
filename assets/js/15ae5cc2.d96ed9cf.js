"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5872],{3905:(e,r,n)=>{n.d(r,{Zo:()=>l,kt:()=>g});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),s=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},l=function(e){var r=s(e.components);return t.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?t.createElement(g,i(i({ref:r},l),{},{components:n})):t.createElement(g,i({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7850:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var t=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1},i="\u63a5\u5165\u6d41\u7a0b",p={unversionedId:"user_docs/getting_started/server/hippo4j-server-start",id:"version-1.5.0/user_docs/getting_started/server/hippo4j-server-start",title:"\u63a5\u5165\u6d41\u7a0b",description:"\u90e8\u7f72\u670d\u52a1\u7aef\uff0c\u53c2\u8003 \u90e8\u7f72\u624b\u518c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.5.0/user_docs/getting_started/server/hippo4j-server-start.md",sourceDirName:"user_docs/getting_started/server",slug:"/user_docs/getting_started/server/hippo4j-server-start",permalink:"/docs/user_docs/getting_started/server/hippo4j-server-start",draft:!1,tags:[],version:"1.5.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"user_docs",previous:{title:"\u9002\u914dSpringBoot1x",permalink:"/docs/user_docs/getting_started/config/hippo4j-config-springboot1x-adapter"},next:{title:"\u7ebf\u7a0b\u6c60\u76d1\u63a7",permalink:"/docs/user_docs/getting_started/server/hippo4j-server-monitor"}},c={},s=[{value:"Hippo4j \u914d\u7f6e",id:"hippo4j-\u914d\u7f6e",level:2},{value:"ThreadPoolExecutor \u9002\u914d",id:"threadpoolexecutor-\u9002\u914d",level:2}],l={toc:s},d="wrapper";function u(e){let{components:r,...n}=e;return(0,o.kt)(d,(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63a5\u5165\u6d41\u7a0b"},"\u63a5\u5165\u6d41\u7a0b"),(0,o.kt)("p",null,"\u90e8\u7f72\u670d\u52a1\u7aef\uff0c\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"/docs/user_docs/ops/hippo4j-server-deploy"},"\u90e8\u7f72\u624b\u518c"),"\u3002"),(0,o.kt)("p",null,"\u670d\u52a1\u7aef\u521b\u5efa ",(0,o.kt)("a",{parentName:"p",href:"/community/faq#%E7%A7%9F%E6%88%B7%E5%92%8C%E9%A1%B9%E7%9B%AE%E5%9C%A8-hippo4j-%E4%B8%AD%E6%98%AF%E4%BB%80%E4%B9%88%E6%84%8F%E6%80%9D"},"\u79df\u6237\u3001\u9879\u76ee")," \u548c\u7ebf\u7a0b\u6c60\u8bb0\u5f55\u3002"),(0,o.kt)("p",null,"\u9700\u8981\u6ce8\u610f\uff0c\u9879\u76ee ID \u9700\u8981\u4e0e\u914d\u7f6e\u6587\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"{application.name}")," \u4fdd\u6301\u4e00\u81f4\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u79df\u6237\u3001\u9879\u76ee\u3001\u7ebf\u7a0b\u6c60 ID \u5982\u679c\u7531\u591a\u4e2a\u8bcd\u7ec4\u6210\uff0c\u5efa\u8bae\u4ee5 - \u8fdb\u884c\u5206\u5272\u3002\u6bd4\u5982\uff1amessage-center\u3002")),(0,o.kt)("h2",{id:"hippo4j-\u914d\u7f6e"},"Hippo4j \u914d\u7f6e"),(0,o.kt)("p",null,"SpringBoot Pom \u5f15\u5165 Hippo4j Starter Jar\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cn.hippo4j</groupId>\n    <artifactId>hippo4j-spring-boot-starter</artifactId>\n    <version>1.5.0</version>\n</dependency>\n")),(0,o.kt)("p",null,"\u542f\u52a8\u7c7b\u4e0a\u6dfb\u52a0\u6ce8\u89e3 ",(0,o.kt)("inlineCode",{parentName:"p"},"@EnableDynamicThreadPool"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@SpringBootApplication\n@EnableDynamicThreadPool\npublic class ExampleApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(ExampleApplication.class, args);\n    }\n}\n")),(0,o.kt)("p",null,"SpringBoot \u5e94\u7528\u914d\u7f6e\u6587\u4ef6\u6dfb\u52a0\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  profiles:\n    active: dev\n  application:\n    # \u670d\u52a1\u7aef\u521b\u5efa\u7684\u9879\u76ee id \u9700\u8981\u4e0e application.name \u4fdd\u6301\u4e00\u81f4\n    name: dynamic-threadpool-example\n  dynamic:\n    thread-pool:\n      # \u670d\u52a1\u7aef\u5730\u5740\n      server-addr: http://localhost:6691\n      # \u7528\u6237\u540d\n      username: admin\n      # \u5bc6\u7801\n      password: 123456\n      # \u79df\u6237 id, \u5bf9\u5e94 tenant \u8868\n      namespace: prescription\n      # \u9879\u76ee id, \u5bf9\u5e94 item \u8868\n      item-id: ${spring.application.name}\n")),(0,o.kt)("h2",{id:"threadpoolexecutor-\u9002\u914d"},"ThreadPoolExecutor \u9002\u914d"),(0,o.kt)("p",null,"\u6dfb\u52a0\u7ebf\u7a0b\u6c60\u914d\u7f6e\u7c7b\uff0c\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@DynamicThreadPool")," \u6ce8\u89e3\u4fee\u9970\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"threadPoolId")," \u4e3a\u670d\u52a1\u7aef\u521b\u5efa\u7684\u7ebf\u7a0b\u6c60 ID\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'package cn.hippo4j.example;\n\nimport cn.hippo4j.core.executor.DynamicThreadPool;\nimport cn.hippo4j.core.executor.support.ThreadPoolBuilder;\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.context.annotation.Configuration;\n\nimport java.util.concurrent.ThreadPoolExecutor;\n\n@Configuration\npublic class ThreadPoolConfig {\n\n    @Bean\n    @DynamicThreadPool\n    public ThreadPoolExecutor messageConsumeDynamicExecutor() {\n        String threadPoolId = "message-consume";\n        ThreadPoolExecutor messageConsumeDynamicExecutor = ThreadPoolBuilder.builder()\n                .threadFactory(threadPoolId)\n                .threadPoolId(threadPoolId)\n                .dynamicPool()\n                .build();\n        return messageConsumeDynamicExecutor;\n    }\n\n    @Bean\n    @DynamicThreadPool\n    public ThreadPoolExecutor messageProduceDynamicExecutor() {\n        String threadPoolId = "message-produce";\n        ThreadPoolExecutor messageProduceDynamicExecutor = ThreadPoolBuilder.builder()\n                .threadFactory(threadPoolId)\n                .threadPoolId(threadPoolId)\n                .dynamicPool()\n                .build();\n        return messageProduceDynamicExecutor;\n    }\n\n}\n')),(0,o.kt)("p",null,"\u901a\u8fc7 ThreadPoolBuilder \u6784\u5efa\u52a8\u6001\u7ebf\u7a0b\u6c60\uff0c\u53ea\u6709 threadFactory\u3001threadPoolId \u4e3a\u5fc5\u586b\u9879\uff0c\u5176\u5b83\u53c2\u6570\u4f1a\u4ece hippo4j-server \u670d\u52a1\u62c9\u53d6\u3002"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u521b\u5efa\u7ebf\u7a0b\u6c60\u65f6\u5efa\u8bae\u586b\u5145\u5b9e\u9645\u7684\u53c2\u6570\u3002\u5982\u679c\u5728\u8fde\u63a5 Hippo4j Server \u7aef\u5931\u8d25\u65f6\uff0c\u4f1a\u4f7f\u7528\u586b\u5145\u914d\u7f6e\u521b\u5efa\u7ebf\u7a0b\u6c60\u3002")),(0,o.kt)("p",null,"\u9879\u76ee\u4e2d\u4f7f\u7528\u4e0a\u8ff0\u5b9a\u4e49\u7684\u52a8\u6001\u7ebf\u7a0b\u6c60\uff0c\u5982\u4e0b\u6240\u793a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Resource\nprivate ThreadPoolExecutor messageConsumeDynamicExecutor;\n\nmessageConsumeDynamicExecutor.execute(() -> xxx);\n\n@Resource\nprivate ThreadPoolExecutor messageProduceDynamicExecutor;\n\nmessageProduceDynamicExecutor.execute(() -> xxx);\n")))}u.isMDXComponent=!0}}]);