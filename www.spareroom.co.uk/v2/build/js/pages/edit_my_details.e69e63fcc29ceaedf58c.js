/*! For license information please see edit_my_details.e69e63fcc29ceaedf58c.js.LICENSE.txt */
!function(){var e={Dxhm:function(e,t,n){"use strict";n("VRzm"),n("Btvt");var r=n("q1tI"),o=n("i8i4"),i=n("vDqi"),a=n.n(i)().create({baseURL:"/api",headers:{"Content-Type":"application/json"}}),u=function(e){return!!SR.log&&SR.log(e)};function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n("rE2o"),n("ioFf"),n("a1Th"),n("I5cv");var d,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(d,e);var t,n,o,i,c=(o=d,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=p(o);if(i){var n=p(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return f(this,e)});function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=c.call(this,e)).state={checked:e.checked},t}return t=d,(n=[{key:"handleCheckBoxChange",value:function(e){var t,n,r=this;(t="users/".concat(this.props.uuid,"/settings"),n={hide_age:!e.target.checked},a.patch(t,n).then((function(e){return e.data.data})).catch((function(e){return u(e),Promise.reject(e)}))).then((function(e){var t=e.settings;r.setState({checked:!t.hide_age})})).catch((function(e){return console.log("Something's up:",e)}))}},{key:"render",value:function(){var e=this;return r.createElement("label",{className:"form_checkbox"},r.createElement("input",{type:"checkbox",checked:this.state.checked,onChange:function(t){return e.handleCheckBoxChange(t)},"data-testid":"update-show-age"}),"Show my age ",r.createElement("em",null," (recommended)"))}}])&&l(t.prototype,n),d}(r.Component),h=function(e){return r.createElement(b,{checked:e.showAge,uuid:e.uuid})},v=document.getElementById("profilePreferences"),y=_sr.customer.uuid;y&&(d="users/".concat(y,"/profiles"),a.get(d).then((function(e){return e.data.data})).catch((function(e){return u(e),Promise.reject(e)}))).then((function(e){return!e.settings.hide_age})).catch((function(e){return Promise.reject(e)})).then((function(e){v&&m(e,y)})).catch((function(e){return console.log(e)}));var m=function(e,t){o.render(r.createElement(h,{showAge:e,uuid:t}),v)};function w(e){var t=e.category,n=e.action,r=e.label,o=e.value,i=e.non_interaction,a=void 0!==i&&i;if(window.dataLayer&&window.dataLayer.push){var u={event:"ga.event",ga_event_category:t,ga_event_action:n,ga_event_label:r,ga_event_value:o,ga_event_non_interaction:a};return window.dataLayer.push(u)}return!1}n("eYiQ");var g=document.querySelector(".button--verified"),_=document.querySelector(".button--verified-continue");g&&g.addEventListener("click",(function(){w({category:"call to action",action:"get_verified",label:window.location.href})})),_&&_.addEventListener("click",(function(){w({category:"call to action",action:"get_verified_continue",label:window.location.href})}))},eYiQ:function(){},MgzW:function(e){"use strict";var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,u,c=o(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))n.call(a,s)&&(c[s]=a[s]);if(t){u=t(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(c[u[f]]=a[u[f]])}}return c}},"+wdc":function(e,t){"use strict";var n,r,o,i,a;if("undefined"==typeof window||"function"!=typeof MessageChannel){var u=null,c=null,l=function(){if(null!==u)try{var e=t.unstable_now();u(!0,e),u=null}catch(e){throw setTimeout(l,0),e}},s=Date.now();t.unstable_now=function(){return Date.now()-s},n=function(e){null!==u?setTimeout(n,0,e):(u=e,setTimeout(l,0))},r=function(e,t){c=setTimeout(e,t)},o=function(){clearTimeout(c)},i=function(){return!1},a=t.unstable_forceFrameRate=function(){}}else{var f=window.performance,p=window.Date,d=window.setTimeout,b=window.clearTimeout;if("undefined"!=typeof console){var h=window.cancelAnimationFrame;"function"!=typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),"function"!=typeof h&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"==typeof f&&"function"==typeof f.now)t.unstable_now=function(){return f.now()};else{var v=p.now();t.unstable_now=function(){return p.now()-v}}var y=!1,m=null,w=-1,g=5,_=0;i=function(){return t.unstable_now()>=_},a=function(){},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):g=0<e?Math.floor(1e3/e):5};var k=new MessageChannel,x=k.port2;k.port1.onmessage=function(){if(null!==m){var e=t.unstable_now();_=e+g;try{m(!0,e)?x.postMessage(null):(y=!1,m=null)}catch(e){throw x.postMessage(null),e}}else y=!1},n=function(e){m=e,y||(y=!0,x.postMessage(null))},r=function(e,n){w=d((function(){e(t.unstable_now())}),n)},o=function(){b(w),w=-1}}function j(e,t){var n=e.length;e.push(t);e:for(;;){var r=n-1>>>1,o=e[r];if(!(void 0!==o&&0<T(o,t)))break e;e[r]=t,e[n]=o,n=r}}function O(e){return void 0===(e=e[0])?null:e}function P(e){var t=e[0];if(void 0!==t){var n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length;r<o;){var i=2*(r+1)-1,a=e[i],u=i+1,c=e[u];if(void 0!==a&&0>T(a,n))void 0!==c&&0>T(c,a)?(e[r]=c,e[u]=n,r=u):(e[r]=a,e[i]=n,r=i);else{if(!(void 0!==c&&0>T(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}return null}function T(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}var C=[],E=[],S=1,R=null,I=3,L=!1,M=!1,q=!1;function F(e){for(var t=O(E);null!==t;){if(null===t.callback)P(E);else{if(!(t.startTime<=e))break;P(E),t.sortIndex=t.expirationTime,j(C,t)}t=O(E)}}function D(e){if(q=!1,F(e),!M)if(null!==O(C))M=!0,n(A);else{var t=O(E);null!==t&&r(D,t.startTime-e)}}function A(e,n){M=!1,q&&(q=!1,o()),L=!0;var a=I;try{for(F(n),R=O(C);null!==R&&(!(R.expirationTime>n)||e&&!i());){var u=R.callback;if(null!==u){R.callback=null,I=R.priorityLevel;var c=u(R.expirationTime<=n);n=t.unstable_now(),"function"==typeof c?R.callback=c:R===O(C)&&P(C),F(n)}else P(C);R=O(C)}if(null!==R)var l=!0;else{var s=O(E);null!==s&&r(D,s.startTime-n),l=!1}return l}finally{R=null,I=a,L=!1}}function B(e){switch(e){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var N=a;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){M||L||(M=!0,n(A))},t.unstable_getCurrentPriorityLevel=function(){return I},t.unstable_getFirstCallbackNode=function(){return O(C)},t.unstable_next=function(e){switch(I){case 1:case 2:case 3:var t=3;break;default:t=I}var n=I;I=t;try{return e()}finally{I=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=N,t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=I;I=e;try{return t()}finally{I=n}},t.unstable_scheduleCallback=function(e,i,a){var u=t.unstable_now();if("object"==typeof a&&null!==a){var c=a.delay;c="number"==typeof c&&0<c?u+c:u,a="number"==typeof a.timeout?a.timeout:B(e)}else a=B(e),c=u;return e={id:S++,callback:i,priorityLevel:e,startTime:c,expirationTime:a=c+a,sortIndex:-1},c>u?(e.sortIndex=c,j(E,e),null===O(C)&&e===O(E)&&(q?o():q=!0,r(D,c-u))):(e.sortIndex=a,j(C,e),M||L||(M=!0,n(A))),e},t.unstable_shouldYield=function(){var e=t.unstable_now();F(e);var n=O(C);return n!==R&&null!==R&&null!==n&&null!==n.callback&&n.startTime<=e&&n.expirationTime<R.expirationTime||i()},t.unstable_wrapCallback=function(e){var t=I;return function(){var n=I;I=t;try{return e.apply(this,arguments)}finally{I=n}}}},QCnb:function(e,t,n){"use strict";e.exports=n("+wdc")}},t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.x=function(){},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e={4915:0},t=[["Dxhm",4736]],r=function(){},o=function(o,i){for(var a,u,c=i[0],l=i[1],s=i[2],f=i[3],p=0,d=[];p<c.length;p++)u=c[p],n.o(e,u)&&e[u]&&d.push(e[u][0]),e[u]=0;for(a in l)n.o(l,a)&&(n.m[a]=l[a]);for(s&&s(n),o&&o(i);d.length;)d.shift()();return f&&t.push.apply(t,f),r()},i=self.webpackChunkspareroom3=self.webpackChunkspareroom3||[];function a(){for(var r,o=0;o<t.length;o++){for(var i=t[o],a=!0,u=1;u<i.length;u++){var c=i[u];0!==e[c]&&(a=!1)}a&&(t.splice(o--,1),r=n(n.s=i[0]))}return 0===t.length&&(n.x(),n.x=function(){}),r}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var u=n.x;n.x=function(){return n.x=u||function(){},(r=a)()}}(),n.x()}();
//# sourceMappingURL=edit_my_details.e69e63fcc29ceaedf58c.js.map