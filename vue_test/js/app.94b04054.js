(function(t){function e(e){for(var a,o,i=e[0],l=e[1],u=e[2],c=0,v=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(v.length)v.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==r[l]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},s=[];function o(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"70783b85"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=r[t]=[e,a]}));e.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=o(t);var u=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+a+": "+s+")",u.name="ChunkLoadError",u.type=a,u.request=s,n[1](u)}r[t]=void 0}};var c=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var p=u;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"0a9d":function(t,e,n){},"0cbc":function(t,e,n){},"2ce1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")]),t._v(" | "),n("router-link",{attrs:{to:"/blog"}},[t._v("Blog")]),t._v(" | "),n("router-link",{attrs:{to:"/camp"}},[t._v("Camp")]),t._v(" | "),n("router-link",{attrs:{to:"/login"}},[t._v("Login")]),t._v(" | "),n("router-link",{attrs:{to:"/admin"}},[t._v("Admin")])],1),n("router-view")],1)},s=[],o=(n("034f"),n("2877")),i={},l=Object(o["a"])(i,r,s,!1,null,null,null),u=l.exports,c=(n("d3b7"),n("5530")),p=n("8c4f"),v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},m=[],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("h1",[t._v(t._s(t.msg))]),t._m(0),n("h3",[t._v("Installed CLI Plugins")]),t._m(1),n("h3",[t._v("Essential Links")]),t._m(2),n("h3",[t._v("Ecosystem")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),n("br"),t._v(" check out the "),n("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[t._v("eslint")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),n("li",[n("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),n("li",[n("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),n("li",[n("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),n("li",[n("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",[n("li",[n("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),n("li",[n("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),n("li",[n("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),n("li",[n("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],f={name:"HelloWorld",props:{msg:String}},_=f,g=(n("b2a1"),Object(o["a"])(_,d,h,!1,null,"a87ea5ee",null)),b=g.exports,C={name:"Home",components:{HelloWorld:b}},j=C,k=Object(o["a"])(j,v,m,!1,null,null,null),y=k.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainContent",{attrs:{title:"管理画面"}},[n("AdminTopNav"),n("router-view")],1)},O=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("div",{staticClass:"py-4"},[n("div",{staticClass:"container"},[n("h1",[t._v(t._s(t.title))]),t._t("default")],2)])])},E=[],S={name:"MainContent",props:{title:String}},U=S,$=Object(o["a"])(U,x,E,!1,null,null,null),I=$.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("ul",{staticClass:"nav nav-pills"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/","active-class":"active"}},[t._v("Top")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/users","active-class":"active"}},[t._v("Users")])],1)])])},A=[],P={name:"AdminTopNav"},T=P,D=Object(o["a"])(T,M,A,!1,null,null,null),N=D.exports,B={name:"Admin",components:{MainContent:I,AdminTopNav:N}},L=B,G=Object(o["a"])(L,w,O,!1,null,null,null),z=G.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h1",[t._v(t._s(t.title))]),n("p",[t._v(t._s(t.message))])])},V=[],W=n("59ca"),R=n.n(W),K=(n("ea7b"),{name:"SocialLogin",data:function(){return{title:"Auth",message:"this is message."}},created:function(){var t={apiKey:"AIzaSyBKOQiS8OxgNeZafMN3htzBPyQu80VG9k4",authDomain:"github-io-283610.firebaseapp.com",databaseURL:"https://github-io-283610.firebaseio.com",projectId:"github-io-283610",storageBucket:"github-io-283610.appspot.com",messagingSenderId:"1019518338004",appId:"1:1019518338004:web:f162987b2aff4ef5d6cc41",measurementId:"G-GSDM2R08LZ"};R.a.initializeApp(t);var e=new R.a.auth.GoogleAuthProvider,n=this;R.a.auth().signInWithPopup(e).then((function(t){n.message=t.user.displayName+", "+t.user.email}))}}),Q=K,F=Object(o["a"])(Q,H,V,!1,null,null,null),J=F.exports,Z={path:"/login",component:J},q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainContent",{attrs:{title:"User"}},[n("router-view")],1)},Y=[],X={name:"UserIndex",components:{MainContent:I}},tt=X,et=Object(o["a"])(tt,q,Y,!1,null,null,null),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BlockContent",{attrs:{title:"UserList"}},[t.loading?n("div",{staticClass:"loading"},[t._v("Now loading...")]):t._e(),t.error?n("div",{staticClass:"error"},[t._v(" "+t._s(t.error)+" ")]):t._e(),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-hover"},[n("caption",[t._v("UserList")]),n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("ID")]),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Button")])]),t._l(t.users,(function(e){return n("tr",{key:e.id},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[n("router-link",{staticClass:"btn btn-secondary",attrs:{to:{path:"/users/"+e.id}}},[t._v("Detail")])],1)])}))],2)])])])},rt=[],st=(n("25f0"),n("4de4"),[{id:1,name:"Test San",description:"Clevar User for Test. "},{id:2,name:"Test Tan",description:"Crazy User for Test."}]);function ot(t){setTimeout((function(){t(null,st)}),1e3)}function it(t,e){setTimeout((function(){var n=st.filter((function(e){return e.id===parseInt(t,10)}));e(null,n&&n[0])}),1e3)}var lt={UserData:st,getUsers:ot,getUser:it},ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"block"},[n("h2",{staticClass:"block-title"},[t._v(t._s(t.title))]),n("div",{staticClass:"block-body"},[t._t("default")],2)])},ct=[],pt={name:"BlockContent",props:{title:String}},vt=pt,mt=(n("d655"),Object(o["a"])(vt,ut,ct,!1,null,"346285bc",null)),dt=mt.exports,ht={name:"UserList",components:{BlockContent:dt},data:function(){return{loading:!1,users:function(){return[]},error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){this.loading=!0,lt.getUsers(function(t,e){this.loading=!1,t?this.error=t.toString():this.users=e}.bind(this))}}},ft=ht,_t=Object(o["a"])(ft,at,rt,!1,null,null,null),gt=_t.exports,bt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v("UserCreate")])},Ct=[],jt={name:"UserCreate"},kt=jt,yt=Object(o["a"])(kt,bt,Ct,!1,null,null,null),wt=yt.exports,Ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BlockContent",{attrs:{title:t.name}},[t.loading?n("div",{staticClass:"loading"},[t._v("Now loading...")]):t._e(),t.error?n("div",{staticClass:"error"},[t._v(t._s(t.error))]):t._e(),t.user?n("div",[n("h2",[t._v(t._s(t.user.name))]),n("p",[t._v(t._s(t.user.description))])]):t._e()])},xt=[],Et=(n("b0c0"),{name:"UserDetail",components:{BlockContent:dt},data:function(){return{loading:!1,name:"loading",user:null,error:null}},created:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){this.loading=!0,lt.getUser(this.$route.params.userid,function(t,e){this.loading=!1,t?this.error=t.toString():(this.user=e,this.name=e.name)}.bind(this))}}}),St=Et,Ut=Object(o["a"])(St,Ot,xt,!1,null,null,null),$t=Ut.exports,It={path:"/users",component:nt,children:[{path:"",component:gt},{path:"new",component:wt},{path:":userid",component:$t}]},Mt={path:"/admin",component:z,children:[Object(c["a"])({},It),Object(c["a"])({},Z)]},At=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",{staticClass:"login",on:{click:t.doLogin}},[t._v("[login:"+t._s(t.user_name)+"]")]),n("h1",[t._v(t._s(t.title))]),n("p",{staticClass:"message"},[t._v(t._s(t.message))]),t.logined?n("div",[n("table",[n("tr",[n("th",[t._v("Message")]),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.msg,expression:"msg"}],attrs:{size:"50"},domProps:{value:t.msg},on:{input:function(e){e.target.composing||(t.msg=e.target.value)}}})]),n("td",[n("button",{on:{click:t.add}},[t._v("投稿")])])])]),n("hr"),t._l(t.json_data,(function(e){return n("ul",{key:e.key},[n("li",[n("div",{staticClass:"list1"},[t._v(t._s(e.msg))]),n("div",{staticClass:"list2"},[t._v(t._s(e.user)+" ("+t._s(e.posted)+")")])])])}))],2):t._e()])},Pt=[],Tt=n("8aa5"),Dt=n.n(Tt),Nt={apiKey:"AIzaSyBKOQiS8OxgNeZafMN3htzBPyQu80VG9k4",authDomain:"github-io-283610.firebaseapp.com",databaseURL:"https://github-io-283610.firebaseio.com",projectId:"github-io-283610",storageBucket:"github-io-283610.appspot.com",messagingSenderId:"1019518338004",appId:"1:1019518338004:web:f162987b2aff4ef5d6cc41",measurementId:"G-GSDM2R08LZ"};Dt.a.initializeApp(Nt);var Bt={data:function(){return{title:"Board",message:"ミニ伝言板。最新の投稿を表示します。",user_name:"",logined:!0,msg:"",page:0,num_per_page:10,json_data:{}}},methods:{login:function(){var t=new Dt.a.auth.GoogleAuthProvider,e=this;Dt.a.auth().signInWithPopup(t).then((function(t){console.log(t.user),e.user=t.user,e.user_name=t.user.displayName,e.message="ログインしました。";var n=Dt.a.database(),a=n.ref("board");a.orderByKey().limitToLast(e.num_per_page).on("value",(function(t){if(null!=Dt.a.auth().currentUser){var n=[],a=t.val();for(var r in a)n.unshift(a[r]);console.log(n),e.json_data=n}else e.json_data={}}))}))},logout:function(){Dt.a.auth().signOut(),this.user_name="",this.json_data={},this.message="ログアウトしました。"},doLogin:function(){null==Dt.a.auth().currentUser?this.login():this.logout()},add:function(){if(null!=Dt.a.auth().currentUser){var t=Dt.a.auth().currentUser;console.log(t);var e=new Date,n=e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+e.getHours()+":"+e.getMinutes()+":"+e.getSeconds(),a=e.getTime(),r={msg:this.msg,user:t.displayName,posted:n};Dt.a.database().ref("board/"+a).set(r),this.msg="",this.message="投稿しました。"}else alert("ログインしないと投稿できません。")}},created:function(){null==Dt.a.auth().currentUser&&this.login(),console.log(Dt.a.auth().currentUser)}},Lt=Bt,Gt=(n("cf26"),Object(o["a"])(Lt,At,Pt,!1,null,"22550314",null)),zt=Gt.exports,Ht={path:"/board",component:zt},Vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainContent",{attrs:{title:"ブログ"}})},Wt=[],Rt={name:"Blog",components:{MainContent:I}},Kt=Rt,Qt=Object(o["a"])(Kt,Vt,Wt,!1,null,null,null),Ft=Qt.exports,Jt={path:"/blog",component:Ft},Zt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("MainContent",{attrs:{title:"Camp"}},[n("div",[n("h2",[t._v("2020/09 Plans")]),n("div",{staticClass:"row"},t._l(t.items,(function(t){return n("Card",{key:t.id,attrs:{item:t}})})),1)])])},qt=[],Yt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-4"},[n("div",{staticClass:"card"},[n("img",{staticClass:"card-img-top",attrs:{src:t.item.src,alt:t.item.art}}),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-title"},[t._v(t._s(t.item.title))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.item.text))]),n("a",{staticClass:"btn btn-primary",attrs:{href:t.item.href}},[t._v("詳細を見る")])])])])},Xt=[],te={name:"Card",props:{item:Object}},ee=te,ne=Object(o["a"])(ee,Yt,Xt,!1,null,null,null),ae=ne.exports,re={name:"Camp",data:function(){return{items:[{id:1,title:"美笛キャンプ場",text:"透き通る水を讃えたカルデラ湖。人里離れた山間の湖畔から望む星空は格別です。ただ、準備は多分一番めんどい。",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOX4xBvblYtN6Z43vjCfDu70PilJ7KiafNdw&usqp=CAU",alt:"Shikotsuko view",href:"camp/item/1"},{id:2,title:"洞爺水辺の里財田キャンプ場",text:"近辺には、言わずとしれた老舗温泉街。田舎町を超えてたどり着く、整頓されたサイトで、ゆったりとしたひと時を。予約が取れれば多分かなり楽。ただ、テントからは湖は見えないかなぁ。",src:"https://lh3.googleusercontent.com/proxy/_0FYPwv_M40mv_4VJCX_-Ha7-fHeg9ejELjjRzRmp4EWNfnmtD7cElSV28IXkJwVSysSxGnUvRocWcq9IwMylPAMpICIyl4QVI4H-yGsQIoF326p",alt:"Takarada camp",href:"camp/item/2"},{id:3,title:"オートリゾート苫小牧アルテン",text:"行き届いた整備がもたらす安心感に、のどかな休日という言葉がしっくりと来る。美しく広大な公園を多数抱える苫小牧が誇る休息地。ここも予約取れれば多分楽。湖はないが、近辺にある錦大沼もなかなかきれい。隣接した温泉が無料になるのもちょっと嬉しい。",src:"https://www.asahi-net.or.jp/~wc8m-ootn/outimages/tomakomaiss.jpg",alt:"Auto resort Alten",href:"camp/item/3"}]}},components:{MainContent:I,Card:ae}},se=re,oe=Object(o["a"])(se,Zt,qt,!1,null,null,null),ie=oe.exports,le={path:"/camp",component:ie};a["a"].use(p["a"]);var ue=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},Object(c["a"])({},Mt),Object(c["a"])({},Jt),Object(c["a"])({},Ht),Object(c["a"])({},le)],ce=new p["a"]({mode:"history",routes:ue}),pe=ce,ve=n("2f62");a["a"].use(ve["a"]);var me=new ve["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("f9e3");a["a"].config.productionTip=!1,new a["a"]({router:pe,store:me,render:function(t){return t(u)}}).$mount("#app")},"85ec":function(t,e,n){},b2a1:function(t,e,n){"use strict";var a=n("2ce1"),r=n.n(a);r.a},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},cf26:function(t,e,n){"use strict";var a=n("0a9d"),r=n.n(a);r.a},d655:function(t,e,n){"use strict";var a=n("0cbc"),r=n.n(a);r.a}});
//# sourceMappingURL=app.94b04054.js.map