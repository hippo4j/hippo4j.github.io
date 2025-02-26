"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[294],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=i(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,p(p({ref:t},c),{},{components:r})):n.createElement(g,p({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,p[1]=s;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},p="\u7ebf\u7a0b\u6c60\u76d1\u63a7",s={unversionedId:"user_docs/getting_started/server/hippo4j-server-monitor",id:"version-1.4.3/user_docs/getting_started/server/hippo4j-server-monitor",title:"\u7ebf\u7a0b\u6c60\u76d1\u63a7",description:"Server \u6a21\u5f0f\u9ed8\u8ba4\u5185\u7f6e\u7ebf\u7a0b\u6c60\u8fd0\u884c\u65f6\u91c7\u96c6\u548c\u76d1\u63a7\u529f\u80fd\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528 Prometheus + Grafana \u7684\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u5185\u5bb9\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.4.3/user_docs/getting_started/server/hippo4j-server-monitor.md",sourceDirName:"user_docs/getting_started/server",slug:"/user_docs/getting_started/server/hippo4j-server-monitor",permalink:"/docs/1.4.3/user_docs/getting_started/server/hippo4j-server-monitor",draft:!1,tags:[],version:"1.4.3",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"user_docs",previous:{title:"\u63a5\u5165\u6d41\u7a0b",permalink:"/docs/1.4.3/user_docs/getting_started/server/hippo4j-server-start"},next:{title:"\u670d\u52a1\u7aef\u914d\u7f6e",permalink:"/docs/1.4.3/user_docs/getting_started/server/hippo4j-server-config"}},l={},i=[{value:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e",id:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e",level:2},{value:"\u914d\u7f6e Prometheus",id:"\u914d\u7f6e-prometheus",level:2},{value:"\u914d\u7f6e Grafana",id:"\u914d\u7f6e-grafana",level:2}],c={toc:i},m="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ebf\u7a0b\u6c60\u76d1\u63a7"},"\u7ebf\u7a0b\u6c60\u76d1\u63a7"),(0,a.kt)("p",null,"Server \u6a21\u5f0f\u9ed8\u8ba4\u5185\u7f6e\u7ebf\u7a0b\u6c60\u8fd0\u884c\u65f6\u91c7\u96c6\u548c\u76d1\u63a7\u529f\u80fd\uff0c\u5982\u679c\u60f3\u8981\u4f7f\u7528 Prometheus + Grafana \u7684\u65b9\u5f0f\u53ef\u4ee5\u67e5\u770b\u4ee5\u4e0b\u5185\u5bb9\u3002"),(0,a.kt)("h2",{id:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e"},"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5f15\u5165 SpringBoot Actuator\u3002Spring 2.x \u4e00\u822c\u90fd\u6709\u7248\u672c\u6307\u5b9a\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u7528\u5199\u7248\u672c\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.micrometer</groupId>\n    <artifactId>micrometer-registry-prometheus</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u52a8\u6001\u7ebf\u7a0b\u6c60\u76d1\u63a7\u76f8\u5173\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"management:\n  metrics:\n    export:\n      prometheus:\n        enabled: true\n  server:\n    port: 29999 # \u53ef\u9009\u914d\u7f6e\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\u8be5 port\uff0c\u76f4\u63a5\u4f7f\u7528 ${server.port}\n  endpoints:\n    web:\n      exposure:\n        include: '*' # \u6d4b\u8bd5\u4f7f\u7528\uff0c\u5f00\u542f\u4e86\u6240\u6709\u7aef\u70b9\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u5efa\u8bae *\nspring:\n  dynamic:\n    thread-pool:\n      monitor:\n        enable: true # \u662f\u5426\u5f00\u542f\u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u65f6\u6570\u636e\n        collect-interval: 5000 # \u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u9891\u7387\n        collect-types: server,micrometer # \u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u7684\u7c7b\u578b\u3002eg\uff1aserver\u3001micrometer\u3002\u591a\u4e2a\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\uff0c\u9ed8\u8ba4 server\n        initial-delay: 10000 # \u9879\u76ee\u542f\u52a8\u540e\u5ef6\u8fdf\u591a\u4e45\u8fdb\u884c\u91c7\u96c6\n        thread-pool-types: dynamic # \u91c7\u96c6\u7ebf\u7a0b\u6c60\u7684\u7c7b\u578b\u3002eg\uff1adynamic\u3001web\u3001adapter\u3002\u53ef\u4efb\u610f\u914d\u7f6e\uff0c\u9ed8\u8ba4 dynamic\n")),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"micrometer")," \u7c7b\u578b\u7684\u76d1\u63a7\u6307\u6807\uff0c\u9700\u8981\u6dfb\u52a0\u4ee5\u4e0b\u4f9d\u8d56\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>cn.hippo4j</groupId>\n    <artifactId>hippo4j-spring-boot-starter-monitor-micrometer</artifactId>\n    <version>1.4.3-upgrade</version>\n</dependency>\n")),(0,a.kt)("p",null,"\u9879\u76ee\u542f\u52a8\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:29999/actuator/prometheus")," \u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic_thread_pool_")," \u524d\u7f00\u7684\u6307\u6807\uff0c\u5373\u4e3a\u6210\u529f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912220401016.png",alt:null})),(0,a.kt)("h2",{id:"\u914d\u7f6e-prometheus"},"\u914d\u7f6e Prometheus"),(0,a.kt)("p",null,"\u901a\u8fc7 Docker \u542f\u52a8 Prometheus \u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9090:9090 --name prometheus prom/prometheus\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 Prometheus \u62bd\u53d6\u6570\u636e\u4efb\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165 prometheus \u5bb9\u5668\u5185\u90e8\ndocker exec -it prometheus /bin/sh\n# \u7f16\u8f91 prometheus \u914d\u7f6e\u6587\u4ef6\nvi /etc/prometheus/prometheus.yml\n")),(0,a.kt)("p",null,"scrape_configs \u8282\u70b9\u4e0b\u65b0\u6dfb\u52a0\u4e00\u4e2a job\uff0c\u5982\u679c Prometheus \u662f Docker \u65b9\u5f0f\u90e8\u7f72\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"{scrape_configs.static_configs.targets}")," \u9700\u8981\u5199\u672c\u673a\u7684 IP\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'dynamic-thread-pool-job'\n    scrape_interval: 5s\n    metrics_path: '/actuator/prometheus'\n    static_configs:\n      - targets: [ '127.0.0.1:29999' ]\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u6210\u529f\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," \u9000\u51fa\u5bb9\u5668\uff0c\u5e76\u8fdb\u884c Prometheus \u5bb9\u5668\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"docker restart prometheus"),"\u3002"),(0,a.kt)("p",null,"\u8bbf\u95ee Prometheus \u63a7\u5236\u53f0 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," \u8def\u5f84\uff0c\u80fd\u591f\u5c55\u793a\u76f8\u5173\u6307\u6807\u5373\u4e3a\u914d\u7f6e\u6210\u529f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912221237597.png",alt:null})),(0,a.kt)("h2",{id:"\u914d\u7f6e-grafana"},"\u914d\u7f6e Grafana"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 3000:3000 --name=grafana grafana/grafana\n")),(0,a.kt)("p",null,"\u8bbf\u95ee Grafana \u5730\u5740\uff0c",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," \u7528\u6237\u540d\u5bc6\u7801\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"admin")),(0,a.kt)("p",null,"Grafana \u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/datasources")," \u5bfc\u5165 Prometheus \u6570\u636e\u6e90\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912221646866.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c Prometheus \u4e3a Docker \u65b9\u5f0f\u90e8\u7f72\uff0cHTTP URL \u9700\u8981\u4e3a\u672c\u5730 IP\uff0c\u6bd4\u5982\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://192.168.1.5:9090"},"http://192.168.1.5:9090"))),(0,a.kt)("p",null,"\u5173\u6ce8\u516c\u4f17\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u9f99\u53f0\u7684\u6280\u672f\u7b14\u8bb0"),"\uff0c\u56de\u590d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u76d1\u63a7"),"\uff0c\u83b7\u53d6 Hippo4j Grafana DashBoard JSON \u914d\u7f6e\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u516c\u4f17\u53f7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u56de\u590d\u5173\u952e\u8bcd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{parentName:"td",src:"https://oss.open8gu.com/43_65f6020ed111b6bb3808ec338576bd6b.png?x-oss-process=image/resize,h_300,w_400",alt:null})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{parentName:"td",src:"https://oss.open8gu.com/image-20220327171957444.png?x-oss-process=image/resize,h_300,w_400",alt:null}))))),(0,a.kt)("p",null,"\u83b7\u53d6\u5230 JSON \u6587\u4ef6\u540e\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/dashboard/import")," \u5c06 JSON \u6587\u4ef6\u5bfc\u5165\u81f3 Grafana DashBoard\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912225627272.png",alt:null})),(0,a.kt)("p",null,"\u4e0b\u62c9\u6846\u5185\u52a8\u6001\u9009\u62e9\u521b\u5efa\u597d\u7684 Prometheus \u6570\u636e\u6e90\uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Import"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912225700200.png",alt:null})),(0,a.kt)("p",null,"\u5373\u53ef\u4f7f\u7528\u70ab\u9177\u7684 Hippo4j \u52a8\u6001\u7ebf\u7a0b\u6c60\u76d1\u63a7 DashBoard\u3002\u5927\u5bb6\u4f19\u513f\u4e5f\u53ef\u4ee5\u6839\u636e\u4e2a\u4eba\u559c\u597d\u8fdb\u884c\u5b9a\u5236 DashBoard\uff0c\u5982\u679c\u89c9\u5f97\u6709\u4f18\u5316\u70b9\uff0c\u6b22\u8fce\u548c\u6211\u8054\u7cfb\u8d21\u732e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912225813972.png",alt:null})),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5ba2\u6237\u7aef\u542f\u52a8\u591a\u4e2a\u793a\u4f8b\uff0c\u52a8\u6001\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6548\u679c\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/20220814_hippo4j_monitor.jpg",alt:null})))}u.isMDXComponent=!0}}]);