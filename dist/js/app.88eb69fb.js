(function(e){function t(t){for(var n,o,s=t[0],l=t[1],u=t[2],v=0,d=[];v<s.length;v++)o=s[v],r[o]&&d.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(d.length)d.shift()();return i.push.apply(i,u||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},i=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("64a9"),r=a.n(n);r.a},1195:function(e,t){e.exports="data:image/png;base64,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"},"39d0":function(e,t,a){},"3ada":function(e,t,a){"use strict";var n=a("39d0"),r=a.n(n);r.a},"552b":function(e,t,a){"use strict";var n=a("5bf0"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-view")},i=[],o=(a("034f"),a("2877")),s={},l=Object(o["a"])(s,r,i,!1,null,null,null),u=l.exports,c=a("8c4f"),v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),e._m(0),a("section",{attrs:{id:"infoSection"}},[e._m(1),a("div",{staticClass:"action_button"},[a("button",{attrs:{type:"submit"},on:{click:e.getStarted}},[e._v("Get Started")])])]),a("Footer")],1)},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"heroSection"}},[a("div",{staticClass:"mainTalk"},[a("h3",[e._v("CENTRALIZED CENSUS BOARD")]),a("p",[e._v("\n                Project Proposal to Census Department of Ondo state, to enhance\n                data acquisition from the public.\n            ")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mainContent"},[a("h1",[e._v("Census made easy.")]),a("h4",[e._v("Join millions in getting registered today.")])])}],m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"header"}},[e._m(0),a("div",{staticClass:"action"},[a("h5",{on:{click:e.getStarted}},[e._v("Get Started")])])])},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"brandName"},[a("h3",[a("a",{attrs:{href:"#"}},[a("span",{attrs:{id:"color"}},[e._v("Census")]),e._v(" Management System")])])])}],f={methods:{getStarted:function(){this.$router.push("/register")}}},g=f,A=(a("a3c3"),Object(o["a"])(g,m,p,!1,null,"2a468a6a",null)),h=A.exports,b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"footer"}},[a("hr"),a("p",[e._v("© 2019 - Made with "),a("span",{attrs:{id:"coloredHeart"}},[e._v("❤")]),e._v(" by "),a("a",{attrs:{href:"https://github.com/koofng"}},[e._v("KoofNG")])])])}],y={},x=y,N=(a("3ada"),Object(o["a"])(x,b,_,!1,null,"d9daa2e0",null)),w=N.exports,O={components:{Header:h,Footer:w},methods:{getStarted:function(){this.$router.push("/register")}}},E=O,P=(a("cccb"),Object(o["a"])(E,v,d,!1,null,null,null)),L=P.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Forms"),a("Footer")],1)},S=[],G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{attrs:{id:"form"}},[e._m(0),a("div",{staticClass:"form"},[a("div",{staticClass:"tabs"},[a("div",{staticClass:"tab active"},[a("h3",[e._v("Personal Information")]),a("form",{attrs:{action:""}},[a("div",[e._m(1),a("input",{directives:[{name:"model",rawName:"v-model",value:e.fullName,expression:"fullName"}],attrs:{type:"text",name:"fn",id:"fullName",placeholder:"Full Name"},domProps:{value:e.fullName},on:{input:function(t){t.target.composing||(e.fullName=t.target.value)}}})]),a("div",[e._m(2),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dob,expression:"dob"}],attrs:{type:"date",name:"dob",id:"DOB"},domProps:{value:e.dob},on:{change:e.changeDOB,input:function(t){t.target.composing||(e.dob=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"age"}},[e._v("Age")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.age,expression:"age"}],attrs:{type:"number",disabled:"",name:"age",id:"age"},domProps:{value:e.age},on:{input:function(t){t.target.composing||(e.age=t.target.value)}}})]),a("div",[e._m(3),a("select",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{name:"gender",id:"gender"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.gender=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("Gender")]),a("option",{attrs:{value:"Female"}},[e._v("Female")]),a("option",{attrs:{value:"Male"}},[e._v("Male")])])]),a("div",[e._m(4),a("input",{directives:[{name:"model",rawName:"v-model",value:e.homeAddress,expression:"homeAddress"}],attrs:{type:"text",name:"",placeholder:"eg: !2 Rufus Giwa, Way"},domProps:{value:e.homeAddress},on:{input:function(t){t.target.composing||(e.homeAddress=t.target.value)}}})])]),a("div",{staticClass:"btn_group"},[a("button",{attrs:{id:"next",type:"submit"},on:{click:e.validatePerson}},[e._v("Next")])])]),a("div",{staticClass:"tab"},[a("h3",[e._v("Location Information")]),a("form",{attrs:{action:""}},[a("div",[e._m(5),a("select",{directives:[{name:"model",rawName:"v-model",value:e.stateOfOrigin,expression:"stateOfOrigin"}],attrs:{name:"",id:"state"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.stateOfOrigin=t.target.multiple?a:a[0]},e.getLGA]}},[a("option",{attrs:{value:"",disabled:""}}),e._l(e.AvailableStates,function(t,n){return a("option",{key:n,domProps:{value:t}},[e._v(e._s(t))])})],2)]),a("div",[e._m(6),a("select",{directives:[{name:"model",rawName:"v-model",value:e.lga,expression:"lga"}],attrs:{name:"lga",id:"lga"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.lga=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("LGA")])])]),a("div",[e._m(7),a("input",{directives:[{name:"model",rawName:"v-model",value:e.homeTown,expression:"homeTown"}],attrs:{type:"text",name:"",id:"",placeholder:"eg: owo"},domProps:{value:e.homeTown},on:{input:function(t){t.target.composing||(e.homeTown=t.target.value)}}})]),a("div",[a("label",{attrs:{for:""}},[e._v("State of Residence")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.stateOfResidence,expression:"stateOfResidence"}],attrs:{name:"sor",id:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.stateOfResidence=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("Residence")]),a("option",{attrs:{value:"ondo"}},[e._v("Ondo")])])]),a("div",[a("label",{attrs:{for:""}},[e._v("LGA of Residence")]),a("select",{directives:[{name:"model",rawName:"v-model",value:e.lgaOfResidence,expression:"lgaOfResidence"}],attrs:{name:"",id:""},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.lgaOfResidence=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("LGA")])])])]),a("div",{staticClass:"btn_group"},[a("button",{attrs:{id:"previous",type:"submit"}},[e._v("Previous")]),a("button",{attrs:{id:"next",type:"submit"},on:{click:e.validateLocation}},[e._v("Next")])])]),a("div",{staticClass:"tab"},[a("h3",[e._v("General Information")]),a("form",{attrs:{action:""}},[a("div",[e._m(8),a("input",{directives:[{name:"model",rawName:"v-model",value:e.ethnicGroup,expression:"ethnicGroup"}],attrs:{type:"text",name:"",id:"ethnicGroup",placeholder:"Ethnic group"},domProps:{value:e.ethnicGroup},on:{input:function(t){t.target.composing||(e.ethnicGroup=t.target.value)}}})]),a("div",[e._m(9),a("select",{directives:[{name:"model",rawName:"v-model",value:e.religion,expression:"religion"}],attrs:{name:"religion",required:"required",id:"religion"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.religion=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("Religion")]),a("option",{attrs:{value:"christian"}},[e._v("Christianity")]),a("option",{attrs:{value:"islam"}},[e._v("Islam")]),a("option",{attrs:{value:"others"}},[e._v("Others")])])]),a("div",[e._m(10),a("select",{directives:[{name:"model",rawName:"v-model",value:e.occupation,expression:"occupation"}],attrs:{name:"occupation",id:"occupation"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.occupation=t.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"",disabled:""}},[e._v("Occupation")]),a("option",{attrs:{value:"student"}},[e._v("Student")]),a("option",{attrs:{value:"business"}},[e._v("Business")]),a("option",{attrs:{value:"teacher"}},[e._v("Teacher")]),a("option",{attrs:{value:"military"}},[e._v("Militiary Personnel")])])]),a("div",[a("label",{attrs:{for:"phone-number"}},[e._v("Phone Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phoneNumber,expression:"phoneNumber"}],attrs:{type:"tel",name:"",id:"phone-number",placeholder:"08012345678"},domProps:{value:e.phoneNumber},on:{input:function(t){t.target.composing||(e.phoneNumber=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"email"}},[e._v("Email Address")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{type:"email",name:"",id:"email",placeholder:"someone@example.com"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})])]),a("div",{staticClass:"btn_group"},[a("button",{attrs:{id:"previous",type:"submit"}},[e._v("Previous")]),a("button",{attrs:{id:"next",type:"submit"},on:{click:e.validateGeneral}},[e._v("Next")])])]),a("div",{staticClass:"tab"},[a("h3",[e._v("National Information")]),a("form",{attrs:{action:""}},[a("div",[a("label",{attrs:{for:"bvn"}},[e._v("Bank Verification Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.bvn,expression:"bvn"}],attrs:{type:"text",name:"",placeholder:""},domProps:{value:e.bvn},on:{input:function(t){t.target.composing||(e.bvn=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"nin"}},[e._v("National Identification Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.nin,expression:"nin"}],attrs:{type:"text",name:"",placeholder:""},domProps:{value:e.nin},on:{input:function(t){t.target.composing||(e.nin=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"vin"}},[e._v("Voters Identification Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.vin,expression:"vin"}],attrs:{type:"text",name:"",placeholder:""},domProps:{value:e.vin},on:{input:function(t){t.target.composing||(e.vin=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"passNum"}},[e._v("International Passport Number")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.passportNum,expression:"passportNum"}],attrs:{type:"text",name:"",placeholder:""},domProps:{value:e.passportNum},on:{input:function(t){t.target.composing||(e.passportNum=t.target.value)}}})])]),a("div",{staticClass:"btn_group"},[a("button",{attrs:{id:"previous",type:"submit"}},[e._v("Previous")]),a("button",{attrs:{id:"next",type:"submit"},on:{click:e.validateNational}},[e._v("Preview")])])])])])])},D=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"image-section"}},[n("img",{attrs:{alt:"",src:a("1195")}}),n("input",{attrs:{type:"file",name:""}}),n("div",{staticClass:"alert",attrs:{id:"alert"}},[n("p",{attrs:{id:"msgAlert"}},[e._v("Fill in all * fields")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"fullName"}},[e._v("Full Name "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"DOB"}},[e._v("Date of birth "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"gender"}},[e._v("Gender "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"homeAddress"}},[e._v("Home Address "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"stateOfOrigin"}},[e._v("State of origin "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"lga"}},[e._v("Local Government Area "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:""}},[e._v("Hometown "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"ethnicGroup"}},[e._v("Ethnic Group "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"religion"}},[e._v("Religion "),a("span",{attrs:{id:"required"}},[e._v("*")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{attrs:{for:"occupation"}},[e._v("Occupation "),a("span",{attrs:{id:"required"}},[e._v("*")])])}],B=(a("7f7f"),a("ac6a"),{data:function(){return{fullName:"",dob:"",age:0,gender:"",homeAddress:"",stateOfOrigin:"",lga:"",homeTown:"",stateOfResidence:"",lgaOfResidence:"",ethnicGroup:"",religion:"",occupation:"",phoneNumber:"",email:"",bvn:"",nin:"",vin:"",passportNum:"",fetchState:[],stateLGAs:[],AvailableStates:["Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno","Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT","Gombe","Imo","Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa","Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"]}},methods:{moveNext:function(){var e=document.querySelectorAll(".tab"),t=[];e.forEach(function(e){t.push(e)});var a=document.querySelector("div.tab.active"),n=t.indexOf(a);return document.querySelector("div.tab.active").classList.remove("active"),e[n+1].classList.add("active")},showAlert:function(){var e=document.getElementById("alert");e&&(e.classList.add("active"),setTimeout(function(){e.classList.remove("active")},1500))},changeDOB:function(){var e=new Date(this.dob.valueOf());return this.age=(new Date).getFullYear().valueOf()-e.getFullYear()},getLGA:function(e){var t=this;if(0!=this.stateLGAs.length)return this.stateLGAs.length=0;var a=e.target.value,n=this.AvailableStates.indexOf(a),r=this.fetchState[n].data.lgas;r.forEach(function(e){var a=e.data.name;t.stateLGAs.push(a)})},validatePerson:function(){0!=this.fullName.length&&""!=this.dob&&0!=this.gender.length&&0!=this.homeAddress.length?this.moveNext():this.showAlert()},validateLocation:function(){this.moveNext()},validateGeneral:function(){this.moveNext()},validateNational:function(){this.moveNext()}},mounted:function(){var e=document.querySelectorAll(".tab"),t=document.querySelectorAll("button#previous"),a=[];e.forEach(function(e){a.push(e)}),t.forEach(function(t){t.addEventListener("click",function(){var t=document.querySelector("div.tab.active"),n=a.indexOf(t);document.querySelector("div.tab.active").classList.remove("active"),e[n-1].classList.add("active")})})}}),F=B,Q=(a("6c55"),Object(o["a"])(F,G,D,!1,null,"8dcd9192",null)),q=Q.exports,z={components:{Header:h,Forms:q,Footer:w}},I=z,T=(a("552b"),Object(o["a"])(I,C,S,!1,null,"6253eb7a",null)),k=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Footer")],1)},U=[],R={components:{Header:h,Footer:w}},j=R,H=Object(o["a"])(j,M,U,!1,null,"38d0f5f1",null),K=H.exports,X=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("Header"),a("Footer")],1)},Y=[],V={components:{Header:h,Footer:w}},W=V,J=Object(o["a"])(W,X,Y,!1,null,"c7544dd4",null),$=J.exports;n["a"].use(c["a"]);var Z=new c["a"]({routes:[{path:"/",name:"home",component:L},{path:"/register",name:"form",component:k},{path:"/preview",name:"preview",component:K},{path:"/success",name:"success",component:$}]});n["a"].config.productionTip=!1,new n["a"]({router:Z,render:function(e){return e(u)}}).$mount("#app")},"5bf0":function(e,t,a){},"64a9":function(e,t,a){},"6c55":function(e,t,a){"use strict";var n=a("e889"),r=a.n(n);r.a},"78b3":function(e,t,a){},a3c3:function(e,t,a){"use strict";var n=a("78b3"),r=a.n(n);r.a},cccb:function(e,t,a){"use strict";var n=a("d563"),r=a.n(n);r.a},d563:function(e,t,a){},e889:function(e,t,a){}});
//# sourceMappingURL=app.88eb69fb.js.map