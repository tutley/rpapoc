webpackJsonp([1],{"/626":function(e,t){},"3TcT":function(e,t){},"6nfk":function(e,t){},"90VL":function(e,t){},"9DHQ":function(e,t){},BCfr:function(e,t){},EDkq:function(e,t){},FbEL:function(e,t){},"HNa/":function(e,t){},JLzs:function(e,t){},"N+IJ":function(e,t){},NHnr:function(e,t,n){"use strict";function r(e){n("rCrY")}function s(e){n("EDkq")}function o(e){n("ZgVU")}Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i=n("M+UZ"),c=n.n(i),u=n("IcMm"),l=n.n(u),v=n("rPQa"),d=n.n(v),f=n("fYhH"),m=n.n(f),g=n("7Q1V"),p=n.n(g),h=n("7M7f"),_=n.n(h),w=n("t9Tm"),b=n.n(w),k=n("f/u0"),I=n.n(k),y=n("z8aH"),V=n.n(y),C=n("+9ps"),x=n.n(C),L=n("TWha"),S=n.n(L),R=n("XRgG"),B=n.n(R),F=n("DDBM"),H=n.n(F),T=n("oD3a"),$=n.n(T),E=n("QLUw"),P=n.n(E),U=n("pqui"),A=n.n(U),D=n("+1ch"),N=n.n(D),q=n("7gKz"),z=n.n(q),M=n("/yi5"),O=n.n(M),Q=n("BOXn"),Y=n.n(Q),J=n("JUsQ"),X=n.n(J),Z=n("MPXs"),j=n.n(Z),W=n("6VHA"),G=n.n(W),K={name:"app",computed:{userIsAuthenticated:function(){return this.$store.getters.isLoggedIn}},methods:{jump:function(e){this.$router.push(e)},onLogout:function(){this.$store.dispatch("logout"),this.$router.push("/")}},beforeMount:function(){var e=document.getElementById("pwaloader");e&&e.remove()}},ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"rpapoc"}},[n("v-toolbar",{attrs:{app:"",dark:"",color:"primary"}},[n("v-toolbar-title",[e._v("\n        rpapoc\n      ")]),e._v(" "),n("v-spacer")],1),e._v(" "),n("v-content",{ref:"content"},[n("div",[e._v(" ")]),e._v(" "),n("router-view"),e._v(" "),n("v-footer",{staticClass:"pa-3"},[n("div",[e._v("Tom Utley")]),e._v(" "),n("v-spacer")],1)],1)],1)},te=[],ne={render:ee,staticRenderFns:te},re=ne,se=n("VU/8"),oe=r,ae=se(K,re,!1,oe,null,null),ie=ae.exports,ce=n("/ocq"),ue=n("Dd8w"),le=n.n(ue),ve=n("mtWM"),de=n.n(ve),fe=null!=localStorage.getItem("token"),me="";fe&&(me="Bearer "+localStorage.getItem("token"));var ge={baseURL:"http://localhost:8000/",headers:le()({},fe?{Authorization:me}:{})},pe=de.a.create(ge),he={name:"hello",data:function(){return{result:{},error:"",msg:"This is where you would put view data normally"}},computed:{isLoggedIn:function(){return this.$store.getters.isLoggedIn}},methods:{logout:function(){this.$store.dispatch("logout")},hitService:function(e){var t=this,n="";switch(e){case 1:n="one";break;case 2:n="two";break;case 3:n="three";break;default:n="404"}pe.get(n).then(function(e){console.log(e),t.result=e.data,t.error=""}).catch(function(e){t.result={},t.error=e})}}},_e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs10:"","offset-xs1":""}},[n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":""}},[n("v-flex",[n("h3",{staticClass:"display-1"},[e._v("Welcome to RPAPOC")]),e._v(" "),n("span",{staticClass:"subheading"}),e._v(" "),n("v-divider",{staticClass:"my-3"}),e._v(" "),n("div",{staticClass:"title mb-3"},[e._v("Sign in, Sign out, Test API calls, whatever!")]),e._v(" "),e.isLoggedIn?e._e():n("v-btn",{staticClass:"mx-0",attrs:{large:"",color:"primary",to:"/signin"}},[e._v("Sign In")]),e._v(" "),e.isLoggedIn?n("v-btn",{staticClass:"mx-0",attrs:{large:"",color:"primary"},on:{click:e.logout}},[e._v("Sign Out")]):e._e(),e._v(" "),n("v-divider",{staticClass:"my-3"}),e._v(" "),n("v-btn",{staticClass:"mx-0",attrs:{color:"warning"},on:{click:function(t){e.hitService(1)}}},[e._v("Hit Service 1")]),e._v(" "),n("v-btn",{staticClass:"mx-0",attrs:{color:"warning"},on:{click:function(t){e.hitService(2)}}},[e._v("Hit Service 2")]),e._v(" "),n("v-btn",{staticClass:"mx-0",attrs:{color:"warning"},on:{click:function(t){e.hitService(3)}}},[e._v("Hit Service 3")]),e._v(" "),n("BR"),e._v(" "),e.result.user?n("span",{staticClass:"body-2"},[e._v("\n                Hello "+e._s(e.result.user.Name)+"! You sucessfully reached "+e._s(e.result.serviceName)+" by passing your username ("+e._s(e.result.username)+")\n                to this microservice, which checked in the database to find that your email is "+e._s(e.result.user.Email)+"!\n              ")]):e._e(),e._v(" "),""!==e.error?n("span",{staticClass:"body-2"},[e._v("\n                You can't do that!"),n("BR"),e._v("\n                The server says: "),n("BR"),e._v("\n                "+e._s(e.error)+"\n              ")],1):e._e(),e._v(" "),n("BR"),e._v(" "),n("BR"),e._v(" "),n("BR")],1)],1)],1)],1)],1)],1)},we=[],be={render:_e,staticRenderFns:we},ke=be,Ie=n("VU/8"),ye=s,Ve=Ie(he,ke,!1,ye,null,null),Ce=Ve.exports,xe={data:function(){return{sending:!1,username:"",usernameRules:[function(e){return!!e||"Username is required"}],password:"",passwordRules:[function(e){return!!e||"Password is required"}],errors:[],valid:!0}},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.sending=!0,pe.post("auth",{username:this.username,password:this.password}).then(function(t){e.sending=!1,console.log(t);var n=t.data.token;localStorage.setItem("token",n),document.cookie="jwt_token="+n+"; path=/; max-age=31536000; domain=localhost;",pe.defaults.headers.Authorization="Bearer "+n,e.$store.dispatch("setIsLoggedIn",!0),e.$router.push({name:"Hello"})}).catch(function(t){e.sending=!1,e.errors.push(t)}))}}},Le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:"",sm8:"","offset-sm2":""}},[n("p",{staticClass:"headline"},[e._v("Sign In")]),e._v(" "),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"Username",autofocus:"",rules:e.usernameRules,required:""},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),e._v(" "),n("v-text-field",{attrs:{label:"Password",rules:e.passwordRules,required:"",type:"password"},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.submit(t):null}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),n("v-btn",{attrs:{disabled:!e.valid},on:{click:e.submit}},[e._v("\n          Submit\n        ")])],1),e._v(" "),n("v-progress-linear",{directives:[{name:"show",rawName:"v-show",value:e.sending,expression:"sending"}],attrs:{indeterminate:!0}}),e._v(" "),n("v-alert",{directives:[{name:"show",rawName:"v-show",value:e.errors.length>0,expression:"errors.length > 0"}],attrs:{color:"error",icon:"warning",value:"true"}},e._l(e.errors,function(t,r){return n("p",{key:r},[e._v("\n          "+e._s(t.message)+"\n        ")])}))],1)],1)],1)},Se=[],Re={render:Le,staticRenderFns:Se},Be=Re,Fe=n("VU/8"),He=o,Te=Fe(xe,Be,!1,He,null,null),$e=Te.exports,Ee={},Pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{row:""}},[n("v-flex",[n("span",{staticClass:"display-4 primary--text"},[e._v("404'd!")]),e._v(" "),n("p",[e._v("Sorry, we can't find that page.")]),e._v(" "),n("v-btn",{attrs:{large:"",color:"primary",to:"/"}},[n("v-icon",{attrs:{left:""}},[e._v("home")]),e._v("\n      Return Home")],1)],1)],1)],1)},Ue=[],Ae={render:Pe,staticRenderFns:Ue},De=Ae,Ne=n("VU/8"),qe=Ne(Ee,De,!1,null,null,null),ze=qe.exports,Me=n("NYxO"),Oe={isLoggedIn:!1},Qe={logout:function(e){var t=e.commit;localStorage.removeItem("token"),document.cookie="jwt_token=",t("setIsLoggedIn",!1)},setIsLoggedIn:function(e,t){(0,e.commit)("setIsLoggedIn",t)}},Ye={setIsLoggedIn:function(e,t){e.isLoggedIn=t}},Je={isLoggedIn:function(e){return e.isLoggedIn}};a.a.use(Me.a);var Xe=new Me.a.Store({state:Oe,actions:Qe,mutations:Ye,getters:Je});a.a.use(ce.a);var Ze=new ce.a({mode:"hash",routes:[{path:"/",name:"Hello",component:Ce},{path:"/signin",name:"Signin",component:$e},{path:"/404",component:ze},{path:"*",redirect:"/404"}]});Ze.beforeEach(function(e,t,n){e.matched.some(function(e){return e.meta.Auth})?Xe.state.isLoggedIn?n():n({path:"/signin"}):n()});var je=Ze;a.a.config.productionTip=!1,a.a.use(c.a,{components:{VApp:l.a,VNavigationDrawer:d.a,VList:m.a,VBtn:p.a,VChip:b.a,VIcon:_.a,VCard:I.a,VCheckbox:V.a,VToolbar:x.a,VJumbotron:$.a,VFooter:S.a,VDivider:B.a,VForm:H.a,VProgressCircular:P.a,VProgressLinear:A.a,VSelect:N.a,VSubheader:z.a,VTextField:O.a,VAlert:Y.a,VGrid:X.a,VDialog:j.a,transitions:G.a},directives:{Touch:Touch},theme:{primary:"#8BC34A",secondary:"#689F38",accent:"#FFEB3B",error:"#FF5252",info:"#73ea7b",success:"#DCEDC8",warning:"#FFC107"}}),new a.a({el:"#app",router:je,store:Xe,template:"<App/>",components:{App:ie},created:function(){localStorage.getItem("token")&&this.$store.dispatch("setIsLoggedIn",!0)}})},NOHZ:function(e,t){},P0ba:function(e,t){},V5lI:function(e,t){},"X05+":function(e,t){},XC5Q:function(e,t){},ZgVU:function(e,t){},ZlFP:function(e,t){},acBN:function(e,t){},kP4z:function(e,t){},kVeV:function(e,t){},lThp:function(e,t){},pu2v:function(e,t){},"q/9b":function(e,t){},qRVk:function(e,t){},rCrY:function(e,t){},rzhv:function(e,t){},sBiC:function(e,t){}},["NHnr"]);