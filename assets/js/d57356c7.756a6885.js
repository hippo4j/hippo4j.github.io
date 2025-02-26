"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7109],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>m});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function c(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?c(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)r=c[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),l=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},s=function(e){var n=l(e.components);return t.createElement(i.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},f=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||c;return r?t.createElement(m,a(a({ref:n},s),{},{components:r})):t.createElement(m,a({ref:n},s))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=f;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u[p]="string"==typeof e?e:o,a[1]=u;for(var l=2;l<c;l++)a[l]=r[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9504:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var t=r(7462),o=(r(7294),r(3905));const c={sidebar_position:0},a="\u5185\u7f6e\u62d2\u7edd\u7b56\u7565",u={unversionedId:"user_docs/dev_manual/rejected-policy-info",id:"version-1.4.3/user_docs/dev_manual/rejected-policy-info",title:"\u5185\u7f6e\u62d2\u7edd\u7b56\u7565",description:"\u5185\u7f6e\u4e24\u79cd\u62d2\u7edd\u7b56\u7565\u8bf4\u660e\uff1a",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.4.3/user_docs/dev_manual/rejected-policy-info.md",sourceDirName:"user_docs/dev_manual",slug:"/user_docs/dev_manual/rejected-policy-info",permalink:"/docs/1.4.3/user_docs/dev_manual/rejected-policy-info",draft:!1,tags:[],version:"1.4.3",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"user_docs",previous:{title:"\u5f00\u53d1\u8005\u624b\u518c",permalink:"/docs/1.4.3/category/\u5f00\u53d1\u8005\u624b\u518c-1"},next:{title:"\u62d2\u7edd\u7b56\u7565\u81ea\u5b9a\u4e49",permalink:"/docs/1.4.3/user_docs/dev_manual/rejected-policy-custom"}},i={},l=[],s={toc:l},p="wrapper";function d(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5185\u7f6e\u62d2\u7edd\u7b56\u7565"},"\u5185\u7f6e\u62d2\u7edd\u7b56\u7565"),(0,o.kt)("p",null,"\u5185\u7f6e\u4e24\u79cd\u62d2\u7edd\u7b56\u7565\u8bf4\u660e\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"RunsOldestTaskPolicy"),"\uff1a\u6dfb\u52a0\u65b0\u4efb\u52a1\u5e76\u7531\u4e3b\u7ebf\u7a0b\u8fd0\u884c\u6700\u65e9\u7684\u4efb\u52a1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class RunsOldestTaskPolicy implements RejectedExecutionHandler {\n\n    @Override\n    public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {\n        if (executor.isShutdown()) {\n            return;\n        }\n        BlockingQueue<Runnable> workQueue = executor.getQueue();\n        Runnable firstWork = workQueue.poll();\n        boolean newTaskAdd = workQueue.offer(r);\n        if (firstWork != null) {\n            firstWork.run();\n        }\n        if (!newTaskAdd) {\n            executor.execute(r);\n        }\n    }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SyncPutQueuePolicy"),"\uff1a\u4e3b\u7ebf\u7a0b\u628a\u62d2\u7edd\u4efb\u52a1\u4ee5\u963b\u585e\u7684\u65b9\u5f0f\u6dfb\u52a0\u5230\u961f\u5217\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\npublic class SyncPutQueuePolicy implements RejectedExecutionHandler {\n\n    @Override\n    public void rejectedExecution(Runnable r, ThreadPoolExecutor executor) {\n        if (executor.isShutdown()) {\n            return;\n        }\n        try {\n            executor.getQueue().put(r);\n        } catch (InterruptedException e) {\n            log.error("Adding Queue task to thread pool failed.", e);\n        }\n    }\n}\n')))}d.isMDXComponent=!0}}]);