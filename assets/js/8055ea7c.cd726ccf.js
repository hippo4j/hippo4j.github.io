"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7949],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(i,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(d,p(p({ref:t},c),{},{components:n})):r.createElement(d,p({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:a,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1253:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},p="\u7ebf\u7a0b\u6c60\u76d1\u63a7",l={unversionedId:"user_docs/getting_started/config/hippo4j-config-monitor",id:"version-1.5.0/user_docs/getting_started/config/hippo4j-config-monitor",title:"\u7ebf\u7a0b\u6c60\u76d1\u63a7",description:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-1.5.0/user_docs/getting_started/config/hippo4j-config-monitor.md",sourceDirName:"user_docs/getting_started/config",slug:"/user_docs/getting_started/config/hippo4j-config-monitor",permalink:"/docs/user_docs/getting_started/config/hippo4j-config-monitor",draft:!1,tags:[],version:"1.5.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"user_docs",previous:{title:"\u63a5\u5165\u6d41\u7a0b",permalink:"/docs/user_docs/getting_started/config/hippo4j-config-start"},next:{title:"\u4e2a\u6027\u5316\u914d\u7f6e",permalink:"/docs/user_docs/getting_started/config/hippo4j-config-more"}},i={},s=[{value:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e",id:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e",level:2},{value:"\u914d\u7f6e Prometheus",id:"\u914d\u7f6e-prometheus",level:2},{value:"\u914d\u7f6e Grafana",id:"\u914d\u7f6e-grafana",level:2}],c={toc:s},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7ebf\u7a0b\u6c60\u76d1\u63a7"},"\u7ebf\u7a0b\u6c60\u76d1\u63a7"),(0,a.kt)("h2",{id:"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e"},"\u7ebf\u7a0b\u6c60\u76d1\u63a7\u914d\u7f6e"),(0,a.kt)("p",null,"\u76d1\u63a7\u524d\u7f6e\u6761\u4ef6\uff1a\u9700\u8981\u5148\u5b8c\u6210 hippo4j-config \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/user_docs/getting_started/config/hippo4j-config-start"},"\u63a5\u5165\u5de5\u4f5c"),"\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5f15\u5165 SpringBoot Actuator\u3002Spring 2.x \u4e00\u822c\u90fd\u6709\u7248\u672c\u6307\u5b9a\uff0c\u6240\u4ee5\u8fd9\u91cc\u4e0d\u7528\u5199\u7248\u672c\u53f7\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>io.micrometer</groupId>\n    <artifactId>micrometer-registry-prometheus</artifactId>\n</dependency>\n\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u52a8\u6001\u7ebf\u7a0b\u6c60\u76d1\u63a7\u76f8\u5173\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"management:\n  metrics:\n    export:\n      prometheus:\n        enabled: true\n  server:\n    port: 29999 # \u53ef\u9009\u914d\u7f6e\uff0c\u5982\u679c\u4e0d\u914d\u7f6e\u8be5 port\uff0c\u76f4\u63a5\u4f7f\u7528 ${server.port}\n  endpoints:\n    web:\n      exposure:\n        include: '*' # \u6d4b\u8bd5\u4f7f\u7528\uff0c\u5f00\u542f\u4e86\u6240\u6709\u7aef\u70b9\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u5efa\u8bae *\nspring:\n  dynamic:\n    thread-pool:\n      monitor:\n        enable: true # \u662f\u5426\u5f00\u542f\u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u65f6\u6570\u636e\n        collect-interval: 5000 # \u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u9891\u7387\n        collect-types: micrometer # \u91c7\u96c6\u7ebf\u7a0b\u6c60\u8fd0\u884c\u6570\u636e\u7684\u7c7b\u578b\u3002eg\uff1alog\u3001micrometer\u3002\u591a\u4e2a\u53ef\u4ee5\u540c\u65f6\u4f7f\u7528\uff0c\u9ed8\u8ba4 micrometer\n        initial-delay: 10000 # \u9879\u76ee\u542f\u52a8\u540e\u5ef6\u8fdf\u591a\u4e45\u8fdb\u884c\u91c7\u96c6\n        thread-pool-types: dynamic # \u91c7\u96c6\u7ebf\u7a0b\u6c60\u7684\u7c7b\u578b\u3002eg\uff1adynamic\u3001web\u3001adapter\u3002\u53ef\u4efb\u610f\u914d\u7f6e\uff0c\u9ed8\u8ba4 dynamic\n")),(0,a.kt)("p",null,"\u9879\u76ee\u542f\u52a8\uff0c\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:29999/actuator/prometheus")," \u51fa\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"dynamic_thread_pool_")," \u524d\u7f00\u7684\u6307\u6807\uff0c\u5373\u4e3a\u6210\u529f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912220401016.png",alt:null})),(0,a.kt)("h2",{id:"\u914d\u7f6e-prometheus"},"\u914d\u7f6e Prometheus"),(0,a.kt)("p",null,"\u901a\u8fc7 Docker \u542f\u52a8 Prometheus \u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 9090:9090 --name prometheus prom/prometheus\n")),(0,a.kt)("p",null,"\u6dfb\u52a0 Prometheus \u62bd\u53d6\u6570\u636e\u4efb\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# \u8fdb\u5165 prometheus \u5bb9\u5668\u5185\u90e8\ndocker exec -it prometheus /bin/sh\n# \u7f16\u8f91 prometheus \u914d\u7f6e\u6587\u4ef6\nvi /etc/prometheus/prometheus.yml\n")),(0,a.kt)("p",null,"scrape_configs \u8282\u70b9\u4e0b\u65b0\u6dfb\u52a0\u4e00\u4e2a job\uff0c\u5982\u679c Prometheus \u662f Docker \u65b9\u5f0f\u90e8\u7f72\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"{scrape_configs.static_configs.targets}")," \u9700\u8981\u5199\u672c\u673a\u7684 IP\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"scrape_configs:\n  - job_name: 'dynamic-thread-pool-job'\n    scrape_interval: 5s\n    metrics_path: '/actuator/prometheus'\n    static_configs:\n      - targets: [ '127.0.0.1:29999' ]\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u6210\u529f\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"exit")," \u9000\u51fa\u5bb9\u5668\uff0c\u5e76\u8fdb\u884c Prometheus \u5bb9\u5668\u91cd\u542f ",(0,a.kt)("inlineCode",{parentName:"p"},"docker restart prometheus"),"\u3002"),(0,a.kt)("p",null,"\u8bbf\u95ee Prometheus \u63a7\u5236\u53f0 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/graph")," \u8def\u5f84\uff0c\u80fd\u591f\u5c55\u793a\u76f8\u5173\u6307\u6807\u5373\u4e3a\u914d\u7f6e\u6210\u529f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912221237597.png",alt:null})),(0,a.kt)("h2",{id:"\u914d\u7f6e-grafana"},"\u914d\u7f6e Grafana"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d -p 3000:3000 --name=grafana grafana/grafana\n")),(0,a.kt)("p",null,"\u8bbf\u95ee Grafana \u5730\u5740\uff0c",(0,a.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," \u7528\u6237\u540d\u5bc6\u7801\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"admin")),(0,a.kt)("p",null,"Grafana \u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/datasources")," \u5bfc\u5165 Prometheus \u6570\u636e\u6e90\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912221646866.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u679c Prometheus \u4e3a Docker \u65b9\u5f0f\u90e8\u7f72\uff0cHTTP URL \u9700\u8981\u4e3a\u672c\u5730 IP\uff0c\u6bd4\u5982\uff1a",(0,a.kt)("a",{parentName:"p",href:"http://192.168.1.5:9090"},"http://192.168.1.5:9090"))),(0,a.kt)("p",null,"\u5173\u6ce8\u516c\u4f17\u53f7 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u9f99\u53f0\u7684\u6280\u672f\u7b14\u8bb0"),"\uff0c\u56de\u590d\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"\u76d1\u63a7"),"\uff0c\u83b7\u53d6 Hippo4j Grafana DashBoard JSON \u914d\u7f6e\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u516c\u4f17\u53f7"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u56de\u590d\u5173\u952e\u8bcd"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{parentName:"td",src:"https://oss.open8gu.com/43_65f6020ed111b6bb3808ec338576bd6b.png?x-oss-process=image/resize,h_300,w_400",alt:null})),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("img",{parentName:"td",src:"https://oss.open8gu.com/image-20220327171957444.png?x-oss-process=image/resize,h_300,w_400",alt:null}))))),(0,a.kt)("p",null,"\u83b7\u53d6\u5230 JSON \u6587\u4ef6\u540e\uff0c\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/dashboard/import")," \u5c06 JSON \u6587\u4ef6\u5bfc\u5165\u81f3 Grafana DashBoard\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912225627272.png",alt:null})),(0,a.kt)("p",null,"\u4e0b\u62c9\u6846\u5185\u52a8\u6001\u9009\u62e9\u521b\u5efa\u597d\u7684 Prometheus \u6570\u636e\u6e90\uff0c\u5e76\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Import"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912225700200.png",alt:null})),(0,a.kt)("p",null,"\u5373\u53ef\u4f7f\u7528\u70ab\u9177\u7684 Hippo4j \u52a8\u6001\u7ebf\u7a0b\u6c60\u76d1\u63a7 DashBoard\u3002\u5927\u5bb6\u4f19\u513f\u4e5f\u53ef\u4ee5\u6839\u636e\u4e2a\u4eba\u559c\u597d\u8fdb\u884c\u5b9a\u5236 DashBoard\uff0c\u5982\u679c\u89c9\u5f97\u6709\u4f18\u5316\u70b9\uff0c\u6b22\u8fce\u548c\u6211\u8054\u7cfb\u8d21\u732e\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/image-20220912225813972.png",alt:null})),(0,a.kt)("p",null,"\u5982\u679c\u9879\u76ee\u5ba2\u6237\u7aef\u542f\u52a8\u591a\u4e2a\u793a\u4f8b\uff0c\u52a8\u6001\u7ebf\u7a0b\u6c60\u76d1\u63a7\u6548\u679c\u56fe\u5982\u4e0b\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://oss.open8gu.com/20220814_hippo4j_monitor.jpg",alt:null})))}u.isMDXComponent=!0}}]);