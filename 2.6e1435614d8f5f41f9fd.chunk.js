(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"5b89190d88da153b18c8":function(e,t,n){"use strict";n.r(t);var r=n("8af190b70a6bc55c6f1b"),o=n.n(r),c=(n("8a2d1b95e05b6a321e74"),n("0d7f0986bcd2f33d8a2a")),a=(n("ab039aecd4a1d4fedc0e"),n("d7dd51e1bf6bfc2c9c3d")),i=n("ab4cb61bcb2dc161defb"),u=n("a28fc3c963a1d4d1a2e5"),f=n("dee75a6ca444a1f5dcfe"),s=n("d95b0cf107403b178365"),l=n("adc20f99e57c573c589c"),p=n("6542cd13fd5dd1bcffd4"),d=n("38d017cdb7425d346cba"),b=n("f6438d7757811d10023a"),v=n("a72b40110d9c31c9b5c5"),y="view",h=n("6753b87258df061c275a"),m="test/Services/LOAD_CATEGORIES",g="test/Services/LOAD_CATEGORIES_SUCCESS",O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w={categories:[]};var j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments[1];switch(t.type){case g:var n=t.payload.data||[];return O({},e,{categories:n});default:return e}},_=n("6c68d13fe9e3e77d8fc4"),S=(n("8b703812aa8ae3c41814"),n("4633b5891e83a9df58b7"),regeneratorRuntime.mark(k)),P=regeneratorRuntime.mark(x),E=regeneratorRuntime.mark(R);function k(){var e;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(_.c)(v.i());case 3:return t.next=5,Object(f.a)().then(function(e){return e.data});case 5:return e=t.sent,t.next=8,Object(_.c)({type:g,payload:e});case 8:return t.next=10,Object(_.c)(v.b());case 10:t.next=16;break;case 12:return t.prev=12,t.t0=t.catch(0),t.next=16,Object(_.c)(v.f(t.t0));case 16:case"end":return t.stop()}},S,this,[[0,12]])}function x(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.d)(m,k);case 2:case"end":return e.stop()}},P,this)}function R(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(_.a)([x()]);case 2:case"end":return e.stop()}},E,this)}var C=n("f37e622005550ebf4c79");function D(){return{type:m}}var T=function(e){return e.services||w},A=function(){return Object(u.a)(T,function(e){return e.categories})},N=(n("742435d9b9249d0353dc"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var c=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),I=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var $=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),I(t,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this.props,t=(e.loading,e.categories);return console.log("<<<<<<<<<<<<<<<<<  RENDER LIST >>>>>>>>>>>>>>>>>",this.props),console.log(t),N("div",{},void 0,t.map(function(e,t){return N(C.a,{color:"silver-two"},"cat_"+(t+1),e.title)}))}}]),t}(),F=Object(u.c)({loading:Object(p.e)(),categories:A()}),L=Object(a.connect)(F,function(e){return{onSubmitForm:function(t){return e(v.d(t))},logout:function(){return e(v.e())},getData:function(){e(D())}}}),U=Object(i.compose)(h.a,L)(Object(d.a)($)),q=(n("742435d9b9249d0353dc"),function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var c=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}()),G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var H=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),G(t,[{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){var e=this,t=this.props,n=(t.loading,t.categories);return console.log("<<<<<<<<<<<<<<<<<  RENDER VIEW >>>>>>>>>>>>>>>>>",this.props),console.log(n),q("article",{},void 0,q(c.Helmet,{},void 0,q("title",{},void 0,"Home Page"),q("meta",{name:"description",content:"Denteez"})),q("div",{},void 0,q(C.a,{color:"success",onClick:function(){var t=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,n){return function r(o,c){try{var a=t[o](c),i=a.value}catch(e){return void n(e)}if(!a.done)return Promise.resolve(i).then(function(e){r("next",e)},function(e){r("throw",e)});e(i)}("next")})}}(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(f.fetchFriends)({per_page:10}).then(function(e){return e.data}).catch(function(e){return e.response.data});case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}},t,e)}));return function(){return t.apply(this,arguments)}}()},void 0,"Add New Service"),q(C.a,{color:"success",onClick:this.props.logout},void 0,"logout"),q("div",{className:"p-3 mb-3 swatch-indigo"},void 0,"Indigo"),q("div",{className:"col-2 text-truncate"},void 0,"Praeterea iter est quasdam res quas ex communi.")))}}]),t}(),J=Object(u.c)({loading:Object(p.e)(),categories:A()}),V=Object(a.connect)(J,function(e){return{onSubmitForm:function(t){return e(v.d(t))},logout:function(){return e(v.e())},getData:function(){e(D())}}}),z=Object(i.compose)(h.a,V)(Object(d.a)(H));n.d(t,"mapDispatchToProps",function(){return M});n("742435d9b9249d0353dc");var W=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,n,r,o){var c=t&&t.defaultProps,a=arguments.length-3;if(n||0===a||(n={}),n&&c)for(var i in c)void 0===n[i]&&(n[i]=c[i]);else n||(n=c||{});if(1===a)n.children=o;else if(a>1){for(var u=Array(a),f=0;f<a;f++)u[f]=arguments[f+3];n.children=u}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:n,_owner:null}}}(),B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var K=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.a.PureComponent),B(t,[{key:"render",value:function(){var e=this.props,t=e.loading,n=e.action;return console.log("RENDER SERVICES >>>>>>>>>>>>>>>>>",this.props),W("div",{className:"outline-danger"},void 0,!n&&W(U,{}),n===y&&W(z,{}),t&&W(b.a,{}))}}]),t}(),M=function(e){return{onSubmitForm:function(t){return e(v.d(t))},logout:function(){return e(v.e())},getData:function(){e(v.c())}}},Q=Object(u.c)({loading:Object(p.e)(),action:Object(p.a)()}),X=Object(a.connect)(Q,M),Y=Object(s.a)({key:"services",reducer:j}),Z=Object(l.a)({key:"services",saga:R});t.default=Object(i.compose)(Y,Z,h.a,X)(Object(d.a)(K))}}]);