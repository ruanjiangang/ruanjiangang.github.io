(function(e){function t(t){for(var a,o,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,l=1;l<r.length;l++){var s=r[l];0!==n[s]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=r[0]))}return e}var a={},n={app:0},i=[];function o(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=a,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(r,a,function(t){return e[t]}.bind(null,a));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=s;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("85ec"),n=r.n(a);n.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("h2",[e._v("vue + Echarts 的Demo实现")]),a("p",[e._v("__by 阮健刚")]),a("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),a("p",[a("router-link",{attrs:{to:"/first"}},[e._v("表一")]),a("router-link",{attrs:{to:"/second"}},[e._v("表二")]),a("router-link",{attrs:{to:"/third"}},[e._v("表三")])],1),a("router-view",{staticClass:"showDiv"})],1)},i=[],o=r("313e"),l=r.n(o);a["a"].prototype.$echarts=l.a;var s={name:"App",components:{}},c=s,d=(r("034f"),r("2877")),u=Object(d["a"])(c,n,i,!1,null,null,null),p=u.exports,m=r("8c4f"),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("div",{style:{width:"700px",height:"500px"},attrs:{id:"echartdiv"}})])},f=[],v={name:"First",props:{},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(document.getElementById("echartdiv"));e.setOption({title:{text:"浏览器广告大数据统计",x:"center"},tooltip:{trigger:"item",formatter:"{a} <br/>{b}: {c} ({d}%)"},legend:{orient:"vertical",left:10,data:["直达","营销广告","搜索引擎","邮件营销","联盟广告","视频广告","百度","谷歌","必应","其他"]},series:[{name:"访问来源",type:"pie",selectedMode:"single",radius:[0,"30%"],label:{position:"inner"},labelLine:{show:!1},data:[{value:335,name:"直达",selected:!0},{value:679,name:"营销广告"},{value:1548,name:"搜索引擎"}]},{name:"访问来源",type:"pie",radius:["40%","55%"],label:{formatter:"{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",backgroundColor:"#eee",borderColor:"#aaa",borderWidth:1,borderRadius:4,rich:{a:{color:"#999",lineHeight:22,align:"center"},hr:{borderColor:"#aaa",width:"100%",borderWidth:.5,height:0},b:{fontSize:16,lineHeight:33},per:{color:"#eee",backgroundColor:"#334455",padding:[2,4],borderRadius:2}}},data:[{value:335,name:"直达"},{value:310,name:"邮件营销"},{value:234,name:"联盟广告"},{value:135,name:"视频广告"},{value:1048,name:"百度"},{value:251,name:"谷歌"},{value:147,name:"必应"},{value:102,name:"其他"}]}]})}},created:function(){console.log("created")}},b=v,y=Object(d["a"])(b,h,f,!1,null,"05d553c7",null),g=y.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{style:{width:"400px",height:"400px"},attrs:{id:"echartdiv"}})])},w=[],_=(r("b0c0"),{name:"Second",props:{},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(document.getElementById("echartdiv"));e.setOption({title:{text:"深圳月最低生活费组成（单位:元）",x:"center"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"},formatter:function(e){var t=e[1];return t.name+"<br/>"+t.seriesName+" : "+t.value}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:{type:"category",splitLine:{show:!1},data:["总费用","房租","水电费","交通费","伙食费","日用品数"]},yAxis:{type:"value"},series:[{name:"辅助",type:"bar",stack:"总量",itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"},emphasis:{itemStyle:{barBorderColor:"rgba(0,0,0,0)",color:"rgba(0,0,0,0)"}},data:[0,1700,1400,1200,300,0]},{name:"生活费",type:"bar",stack:"总量",label:{show:!0,position:"inside"},data:[2900,1200,300,200,900,300]}]})}},created:function(){console.log("second created")}}),k=_,O=Object(d["a"])(k,x,w,!1,null,"03204d68",null),A=O.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{style:{width:"800px",height:"500px"},attrs:{id:"echartdiv"}})])},S=[],j={name:"Third",props:{},mounted:function(){this.drawLine()},methods:{drawLine:function(){var e=this.$echarts.init(document.getElementById("echartdiv"));e.setOption({title:{text:"男性女性身高体重分布",subtext:"demo来自echsrt官网"},grid:{left:"3%",right:"7%",bottom:"3%",containLabel:!0},tooltip:{showDelay:0,formatter:function(e){return e.value.length>1?e.seriesName+" :<br/>"+e.value[0]+"cm "+e.value[1]+"kg ":e.seriesName+" :<br/>"+e.name+" : "+e.value+"kg "},axisPointer:{show:!0,type:"cross",lineStyle:{type:"dashed",width:1}}},toolbox:{feature:{dataZoom:{},brush:{type:["rect","polygon","clear"]}}},brush:{},legend:{data:["女性","男性"],left:"center"},xAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} cm"},splitLine:{show:!1}}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value} kg"},splitLine:{show:!1}}],series:[{name:"女性",type:"scatter",data:[[161.2,51.6],[167.5,59],[159.5,49.2],[157,63],[155.8,53.6],[170,59],[159.1,47.6],[166,69.8],[176.2,66.8],[160.2,75.2],[172.5,55.2],[170.9,54.2],[172.9,62.5],[153.4,42],[160,50],[147.2,49.8],[168.2,49.2],[175,73.2],[157,47.8],[167.6,68.8],[159.5,50.6],[175,82.5],[166.8,57.2],[176.5,87.8],[170.2,72.8],[174,54.5],[173,59.8],[179.9,67.3],[170.5,67.8],[160,47],[154.4,46.2],[162,55],[176.5,83],[160,54.4],[152,45.8],[162.1,53.6],[170,73.2],[160.2,52.1],[161.3,67.9],[166.4,56.6],[168.9,62.3],[163.8,58.5],[167.6,54.5],[160,50.2],[161.3,60.3],[167.6,58.3],[165.1,56.2],[160,50.2],[170,72.9],[157.5,59.8],[167.6,61],[160.7,69.1],[163.2,55.9],[152.4,46.5],[157.5,54.3],[168.3,54.8],[180.3,60.7],[165.5,60],[165,62],[164.5,60.3],[156,52.7],[160,74.3],[163,62],[165.7,73.1],[161,80],[162,54.7],[166,53.2],[174,75.7],[172.7,61.1],[167.6,55.7],[151.1,48.7],[164.5,52.3],[163.5,50],[152,59.3],[169,62.5],[164,55.7],[161.2,54.8],[155,45.9],[170,70.6],[176.2,67.2],[170,69.4],[162.5,58.2],[170.3,64.8],[164.1,71.6],[169.5,52.8],[163.2,59.8],[154.5,49],[159.8,50],[173.2,69.2],[170,55.9],[161.4,63.4],[169,58.2],[166.2,58.6],[159.4,45.7],[162.5,52.2],[159,48.6],[162.8,57.8],[159,55.6],[179.8,66.8],[162.9,59.4],[161,53.6],[151.1,73.2],[168.2,53.4],[168.9,69],[173.2,58.4],[171.8,56.2],[178,70.6],[164.3,59.8],[163,72],[168.5,65.2],[166.8,56.6],[172.7,105.2],[163.5,51.8],[169.4,63.4],[167.8,59],[159.5,47.6],[167.6,63],[161.2,55.2],[160,45],[163.2,54],[162.2,50.2],[161.3,60.2],[149.5,44.8],[157.5,58.8],[163.2,56.4],[172.7,62],[155,49.2],[156.5,67.2],[164,53.8],[160.9,54.4],[162.8,58],[167,59.8],[160,54.8],[160,43.2],[168.9,60.5],[158.2,46.4],[156,64.4],[160,48.8],[167.1,62.2],[158,55.5],[167.6,57.8],[156,54.6],[162.1,59.2],[173.4,52.7],[159.8,53.2],[170.5,64.5],[159.2,51.8],[157.5,56],[161.3,63.6],[162.6,63.2],[160,59.5],[168.9,56.8],[165.1,64.1],[162.6,50],[165.1,72.3],[166.4,55],[160,55.9],[152.4,60.4],[170.2,69.1],[162.6,84.5],[170.2,55.9],[158.8,55.5],[172.7,69.5],[167.6,76.4],[162.6,61.4],[167.6,65.9],[156.2,58.6],[175.2,66.8],[172.1,56.6],[162.6,58.6],[160,55.9],[165.1,59.1],[182.9,81.8],[166.4,70.7],[165.1,56.8],[177.8,60],[165.1,58.2],[175.3,72.7],[154.9,54.1],[158.8,49.1],[172.7,75.9],[168.9,55],[161.3,57.3],[167.6,55],[165.1,65.5],[175.3,65.5],[157.5,48.6],[163.8,58.6],[167.6,63.6],[165.1,55.2],[165.1,62.7],[168.9,56.6],[162.6,53.9],[164.5,63.2],[176.5,73.6],[168.9,62],[175.3,63.6],[159.4,53.2],[160,53.4],[170.2,55],[162.6,70.5],[167.6,54.5],[162.6,54.5],[160.7,55.9],[160,59],[157.5,63.6],[162.6,54.5],[152.4,47.3],[170.2,67.7],[165.1,80.9],[172.7,70.5],[165.1,60.9],[170.2,63.6],[170.2,54.5],[170.2,59.1],[161.3,70.5],[167.6,52.7],[167.6,62.7],[165.1,86.3],[162.6,66.4],[152.4,67.3],[168.9,63],[170.2,73.6],[175.2,62.3],[175.2,57.7],[160,55.4],[165.1,104.1],[174,55.5],[170.2,77.3],[160,80.5],[167.6,64.5],[167.6,72.3],[167.6,61.4],[154.9,58.2],[162.6,81.8],[175.3,63.6],[171.4,53.4],[157.5,54.5],[165.1,53.6],[160,60],[174,73.6],[162.6,61.4],[174,55.5],[162.6,63.6],[161.3,60.9],[156.2,60],[149.9,46.8],[169.5,57.3],[160,64.1],[175.3,63.6],[169.5,67.3],[160,75.5],[172.7,68.2],[162.6,61.4],[157.5,76.8],[176.5,71.8],[164.4,55.5],[160.7,48.6],[174,66.4],[163.8,67.3]],markArea:{silent:!0,itemStyle:{color:"transparent",borderWidth:1,borderType:"dashed"},data:[[{name:"女性分布区间",xAxis:"min",yAxis:"min"},{xAxis:"max",yAxis:"max"}]]},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{lineStyle:{type:"solid"},data:[{type:"average",name:"平均值"},{xAxis:160}]}},{name:"男性",type:"scatter",data:[[174,65.6],[175.3,71.8],[193.5,80.7],[186.5,72.6],[187.2,78.8],[181.5,74.8],[184,86.4],[184.5,78.4],[175,62],[184,81.6],[180,76.6],[177.8,83.6],[192,90],[176,74.6],[174,71],[184,79.6],[192.7,93.8],[171.5,70],[173,72.4],[176,85.9],[176,78.8],[180.5,77.8],[172.7,66.2],[176,86.4],[173.5,81.8],[178,89.6],[180.3,82.8],[180.3,76.4],[164.5,63.2],[173,60.9],[183.5,74.8],[175.5,70],[188,72.4],[189.2,84.1],[172.8,69.1],[170,59.5],[182,67.2],[170,61.3],[177.8,68.6],[184.2,80.1],[186.7,87.8],[171.4,84.7],[172.7,73.4],[175.3,72.1],[180.3,82.6],[182.9,88.7],[188,84.1],[177.2,94.1],[172.1,74.9],[167,59.1],[169.5,75.6],[174,86.2],[172.7,75.3],[182.2,87.1],[164.1,55.2],[163,57],[171.5,61.4],[184.2,76.8],[174,86.8],[174,72.2],[177,71.6],[186,84.8],[167,68.2],[171.8,66.1],[182,72],[167,64.6],[177.8,74.8],[164.5,70],[192,101.6],[175.5,63.2],[171.2,79.1],[181.6,78.9],[167.4,67.7],[181.1,66],[177,68.2],[174.5,63.9],[177.5,72],[170.5,56.8],[182.4,74.5],[197.1,90.9],[180.1,93],[175.5,80.9],[180.6,72.7],[184.4,68],[175.5,70.9],[180.6,72.5],[177,72.5],[177.1,83.4],[181.6,75.5],[176.5,73],[175,70.2],[174,73.4],[165.1,70.5],[177,68.9],[192,102.3],[176.5,68.4],[169.4,65.9],[182.1,75.7],[179.8,84.5],[175.3,87.7],[184.9,86.4],[177.3,73.2],[167.4,53.9],[178.1,72],[168.9,55.5],[157.2,58.4],[180.3,83.2],[170.2,72.7],[177.8,64.1],[172.7,72.3],[165.1,65],[186.7,86.4],[165.1,65],[174,88.6],[175.3,84.1],[185.4,66.8],[177.8,75.5],[180.3,93.2],[180.3,82.7],[177.8,58],[177.8,79.5],[177.8,78.6],[177.8,71.8],[177.8,116.4],[163.8,72.2],[188,83.6],[198.1,85.5],[175.3,90.9],[166.4,85.9],[190.5,89.1],[166.4,75],[177.8,77.7],[179.7,86.4],[172.7,90.9],[190.5,73.6],[185.4,76.4],[168.9,69.1],[167.6,84.5],[175.3,64.5],[170.2,69.1],[190.5,108.6],[177.8,86.4],[190.5,80.9],[177.8,87.7],[184.2,94.5],[176.5,80.2],[177.8,72],[180.3,71.4],[171.4,72.7],[172.7,84.1],[172.7,76.8],[177.8,63.6],[177.8,80.9],[182.9,80.9],[170.2,85.5],[167.6,68.6],[175.3,67.7],[165.1,66.4],[185.4,102.3],[181.6,70.5],[172.7,95.9],[190.5,84.1],[179.1,87.3],[175.3,71.8],[170.2,65.9],[193,95.9],[171.4,91.4],[177.8,81.8],[177.8,96.8],[167.6,69.1],[167.6,82.7],[180.3,75.5],[182.9,79.5],[176.5,73.6],[186.7,91.8],[188,84.1],[188,85.9],[177.8,81.8],[174,82.5],[177.8,80.5],[171.4,70],[185.4,81.8],[185.4,84.1],[188,90.5],[188,91.4],[182.9,89.1],[176.5,85],[175.3,69.1],[175.3,73.6],[188,80.5],[188,82.7],[175.3,86.4],[170.5,67.7],[179.1,92.7],[177.8,93.6],[175.3,70.9],[182.9,75],[170.8,93.2],[188,93.2],[180.3,77.7],[177.8,61.4],[185.4,94.1],[168.9,75],[185.4,83.6],[180.3,85.5],[174,73.9],[167.6,66.8],[182.9,87.3],[160,72.3],[180.3,88.6],[167.6,75.5],[186.7,101.4],[175.3,91.1],[175.3,67.3],[175.9,77.7],[175.3,81.8],[179.1,75.5],[181.6,84.5],[177.8,76.6],[182.9,85],[177.8,102.5],[184.2,77.3],[179.1,71.8],[176.5,87.9],[188,94.3],[174,70.9],[167.6,64.5],[170.2,77.3],[167.6,72.3],[188,87.3],[174,80],[176.5,82.3],[180.3,73.6],[167.6,74.1],[188,85.9],[180.3,73.2],[167.6,76.3],[183,65.9],[183,90.9],[179.1,89.1],[170.2,62.3],[177.8,82.7],[179.1,79.1],[190.5,98.2],[177.8,84.1],[180.3,83.2],[180.3,83.2]],markArea:{silent:!0,itemStyle:{color:"transparent",borderWidth:1,borderType:"dashed"},data:[[{name:"男性分布区间",xAxis:"min",yAxis:"min"},{xAxis:"max",yAxis:"max"}]]},markPoint:{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"}]},markLine:{lineStyle:{type:"solid"},data:[{type:"average",name:"平均值"},{xAxis:170}]}}]})}},created:function(){console.log("third created")}},P=j,$=Object(d["a"])(P,L,S,!1,null,"d461cf18",null),C=$.exports;a["a"].use(m["a"]);var E=new m["a"]({routes:[{path:"/",redirect:"/first"},{name:"first",path:"/first",component:g,meta:{auth:!1}},{name:"second",path:"/second",component:A,meta:{auth:!1}},{name:"third",path:"/third",component:C,meta:{auth:!1}}]}),T=E;a["a"].config.productionTip=!1,new a["a"]({router:T,render:function(e){return e(p)}}).$mount("#app")},"85ec":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.14f914f3.js.map