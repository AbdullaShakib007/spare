!function(){"use strict";var e={sxCW:function(e,n,t){t("ls82"),t("VRzm"),t("Btvt"),t("rE2o"),t("ioFf"),t("rGqo"),t("yt8O"),t("hhXQ"),t("KKXr");function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.timeout,r=void 0===t?4e3:t;return new Promise((function(n,t){var o=(new Date).getTime(),i=setInterval((function(){if((new Date).getTime()-o>r)return clearInterval(i),t(new Error("google_optimize was not found on the window"));try{if(void 0!==window.google_optimize){var a=window.google_optimize.get(e);return clearInterval(i),void 0===a?t(new Error("The experiment with id ".concat(e," is not active"))):n(a)}return!1}catch(e){return clearInterval(i),t(e)}}),200)}))};function i(e,n,t,r,o,i,a){try{var u=e[i](a),c=u.value}catch(e){return void t(e)}u.done?n(c):Promise.resolve(c).then(r,o)}function a(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var a=e.apply(n,t);function u(e){i(a,r,o,u,c,"next",e)}function c(e){i(a,r,o,u,c,"throw",e)}u(void 0)}))}}function u(e){var n=document.getElementById("navBar");if(n&&(n.style.display="none",document.getElementById("header").style.borderBottom="1px solid #005480"),"post_ad_hidden_nav_desktop"==e){var t=document.querySelector(".sub-nav");t&&(t.style.display="none")}}function c(e,n){return s.apply(this,arguments)}function s(){return(s=a(regeneratorRuntime.mark((function e(n,t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.dataLayer){e.next=12;break}return window.dataLayer.push({event:"optimize.activate.".concat(t)}),e.prev=2,e.next=5,o(n);case 5:0!=e.sent&&u(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}var l,f=document.getElementById("confirmationInfo"),d=document.getElementById("experimentHideNav");f||d||("experiments",function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return new Promise((function(t,o){return!n&&void 0!==e||n&&Object.values(e).every((function(e){return"object"==r(e)}))?t(e):o(new Error("The requested data is not available"))}))}((l="experiments",function(e,n){return n.split(".").reduce((function(e,n){return e&&e[n]}),e)}(window._sr,l)))).then((function(e){window._sr.site.mobile?c(e.post_ad_hidden_nav_mobile,"post_ad_hidden_nav_mobile"):c(e.post_ad_hidden_nav_desktop,"post_ad_hidden_nav_desktop")}))}},n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.x=function(){},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={7080:0},n=[["sxCW",4736]],r=function(){},o=function(o,i){for(var a,u,c=i[0],s=i[1],l=i[2],f=i[3],d=0,p=[];d<c.length;d++)u=c[d],t.o(e,u)&&e[u]&&p.push(e[u][0]),e[u]=0;for(a in s)t.o(s,a)&&(t.m[a]=s[a]);for(l&&l(t),o&&o(i);p.length;)p.shift()();return f&&n.push.apply(n,f),r()},i=self.webpackChunkspareroom3=self.webpackChunkspareroom3||[];function a(){for(var r,o=0;o<n.length;o++){for(var i=n[o],a=!0,u=1;u<i.length;u++){var c=i[u];0!==e[c]&&(a=!1)}a&&(n.splice(o--,1),r=t(t.s=i[0]))}return 0===n.length&&(t.x(),t.x=function(){}),r}i.forEach(o.bind(null,0)),i.push=o.bind(null,i.push.bind(i));var u=t.x;t.x=function(){return t.x=u||function(){},(r=a)()}}(),t.x()}();
//# sourceMappingURL=scp_options.eebe29dedd7fa44c60c2.js.map