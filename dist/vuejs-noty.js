!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vuejs-noty"]=e():t["vuejs-noty"]=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=12)}([function(t,e,n){t.exports=!n(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,e,n){var o=n(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},function(t,e,n){var o=n(6),i=n(5);t.exports=function(t){return o(i(t))}},function(t,e,n){t.exports={default:n(13),__esModule:!0}},function(t,e){},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){return function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=6)}([function(t,e,n){"use strict";function o(t,e,n){var o=void 0;if(!n){for(o in e)if(e.hasOwnProperty(o)&&e[o]===t)return!0}else for(o in e)if(e.hasOwnProperty(o)&&e[o]===t)return!0;return!1}function i(t){t=t||window.event,void 0!==t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="noty_"+t+"_";return e+="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}function s(t){var e=t.offsetHeight,n=window.getComputedStyle(t);return e+=parseInt(n.marginTop)+parseInt(n.marginBottom)}function u(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e=e.split(" ");for(var i=0;i<e.length;i++)document.addEventListener?t.addEventListener(e[i],n,o):document.attachEvent&&t.attachEvent("on"+e[i],n)}function a(t,e){return("string"==typeof t?t:d(t)).indexOf(" "+e+" ")>=0}function c(t,e){var n=d(t),o=n+e;a(n,e)||(t.className=o.substring(1))}function l(t,e){var n=d(t),o=void 0;a(t,e)&&(o=n.replace(" "+e+" "," "),t.className=o.substring(1,o.length-1))}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function d(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}function h(){function t(){b.PageHidden=document[s],o()}function e(){b.PageHidden=!0,o()}function n(){b.PageHidden=!1,o()}function o(){b.PageHidden?i():r()}function i(){setTimeout(function(){Object.keys(b.Store).forEach(function(t){b.Store.hasOwnProperty(t)&&b.Store[t].options.visibilityControl&&b.Store[t].stop()})},100)}function r(){setTimeout(function(){Object.keys(b.Store).forEach(function(t){b.Store.hasOwnProperty(t)&&b.Store[t].options.visibilityControl&&b.Store[t].resume()}),b.queueRenderAll()},100)}var s=void 0,a=void 0;void 0!==document.hidden?(s="hidden",a="visibilitychange"):void 0!==document.msHidden?(s="msHidden",a="msvisibilitychange"):void 0!==document.webkitHidden&&(s="webkitHidden",a="webkitvisibilitychange"),u(document,a,t),u(window,"blur",e),u(window,"focus",n)}function p(t){if(t.hasSound){var e=document.createElement("audio");t.options.sounds.sources.forEach(function(t){var n=document.createElement("source");n.src=t,n.type="audio/"+v(t),e.appendChild(n)}),t.barDom?t.barDom.appendChild(e):document.querySelector("body").appendChild(e),e.volume=t.options.sounds.volume,t.soundPlayed||(e.play(),t.soundPlayed=!0),e.onended=function(){f(e)}}}function v(t){return t.match(/\.([^.]+)$/)[1]}Object.defineProperty(e,"__esModule",{value:!0}),e.css=e.deepExtend=e.animationEndEvents=void 0;var m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.inArray=o,e.stopPropagation=i,e.generateID=r,e.outerHeight=s,e.addListener=u,e.hasClass=a,e.addClass=c,e.removeClass=l,e.remove=f,e.classList=d,e.visibilityChangeFlow=h,e.createAudioElements=p;var y=n(1),b=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(y);e.animationEndEvents="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",e.deepExtend=function t(e){e=e||{};for(var n=1;n<arguments.length;n++){var o=arguments[n];if(o)for(var i in o)o.hasOwnProperty(i)&&(Array.isArray(o[i])?e[i]=o[i]:"object"===m(o[i])&&null!==o[i]?e[i]=t(e[i],o[i]):e[i]=o[i])}return e},e.css=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var n=i.length,o=t.charAt(0).toUpperCase()+t.slice(1),r=void 0;n--;)if((r=i[n]+o)in e)return r;return t}function n(n){return n=t(n),r[n]||(r[n]=e(n))}function o(t,e,o){e=n(e),t.style[e]=o}var i=["Webkit","O","Moz","ms"],r={};return function(t,e){var n=arguments,i=void 0,r=void 0;if(2===n.length)for(i in e)e.hasOwnProperty(i)&&void 0!==(r=e[i])&&e.hasOwnProperty(i)&&o(t,i,r);else o(t,n[1],n[2])}}()},function(t,e,n){"use strict";function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",e=0,n=E;return P.hasOwnProperty(t)&&(n=P[t].maxVisible,Object.keys(D).forEach(function(n){D[n].options.queue!==t||D[n].closed||e++})),{current:e,maxVisible:n}}function i(t){P.hasOwnProperty(t.options.queue)||(P[t.options.queue]={maxVisible:E,queue:[]}),P[t.options.queue].queue.push(t)}function r(t){if(P.hasOwnProperty(t.options.queue)){var e=[];Object.keys(P[t.options.queue].queue).forEach(function(n){P[t.options.queue].queue[n].id!==t.id&&e.push(P[t.options.queue].queue[n])}),P[t.options.queue].queue=e}}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";if(P.hasOwnProperty(t)){var e=P[t].queue.shift();e&&e.show()}}function u(){Object.keys(P).forEach(function(t){s(t)})}function a(t){var e=x.generateID("ghost"),n=document.createElement("div");n.setAttribute("id",e),x.css(n,{height:x.outerHeight(t.barDom)+"px"}),t.barDom.insertAdjacentHTML("afterend",n.outerHTML),x.remove(t.barDom),n=document.getElementById(e),x.addClass(n,"noty_fix_effects_height"),x.addListener(n,x.animationEndEvents,function(){x.remove(n)})}function c(t){v(t);var e='<div class="noty_body" role="alert">'+t.options.text+"</div>"+f(t)+'<div class="noty_progressbar"></div>';t.barDom=document.createElement("div"),t.barDom.setAttribute("id",t.id),x.addClass(t.barDom,"noty_bar noty_type__"+t.options.type+" noty_theme__"+t.options.theme),t.barDom.innerHTML=e,b(t,"onTemplate")}function l(t){return!(!t.options.buttons||!Object.keys(t.options.buttons).length)}function f(t){if(l(t)){var e=document.createElement("div");return x.addClass(e,"noty_buttons"),Object.keys(t.options.buttons).forEach(function(n){e.appendChild(t.options.buttons[n].dom)}),t.options.buttons.forEach(function(t){e.appendChild(t.dom)}),e.outerHTML}return""}function d(t){t.options.modal&&(0===S&&p(),e.DocModalCount=S+=1)}function h(t){if(t.options.modal&&S>0&&(e.DocModalCount=S-=1,S<=0)){var n=document.querySelector(".noty_modal");n&&(x.removeClass(n,"noty_modal_open"),x.addClass(n,"noty_modal_close"),x.addListener(n,x.animationEndEvents,function(){x.remove(n)}))}}function p(){var t=document.querySelector("body"),e=document.createElement("div");x.addClass(e,"noty_modal"),t.insertBefore(e,t.firstChild),x.addClass(e,"noty_modal_open"),x.addListener(e,x.animationEndEvents,function(){x.removeClass(e,"noty_modal_open")})}function v(t){if(t.options.container)return void(t.layoutDom=document.querySelector(t.options.container));var e="noty_layout__"+t.options.layout;t.layoutDom=document.querySelector("div#"+e),t.layoutDom||(t.layoutDom=document.createElement("div"),t.layoutDom.setAttribute("id",e),x.addClass(t.layoutDom,"noty_layout"),document.querySelector("body").appendChild(t.layoutDom))}function m(t){t.options.timeout&&(t.options.progressBar&&t.progressDom&&x.css(t.progressDom,{transition:"width "+t.options.timeout+"ms linear",width:"0%"}),clearTimeout(t.closeTimer),t.closeTimer=setTimeout(function(){t.close()},t.options.timeout))}function y(t){t.options.timeout&&t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=-1,t.options.progressBar&&t.progressDom&&x.css(t.progressDom,{transition:"width 0ms linear",width:"100%"}))}function b(t,e){t.listeners.hasOwnProperty(e)&&t.listeners[e].forEach(function(e){"function"==typeof e&&e.apply(t)})}function w(t){b(t,"afterShow"),m(t),x.addListener(t.barDom,"mouseenter",function(){y(t)}),x.addListener(t.barDom,"mouseleave",function(){m(t)})}function g(t){delete D[t.id],t.closing=!1,b(t,"afterClose"),x.remove(t.barDom),0!==t.layoutDom.querySelectorAll(".noty_bar").length||t.options.container||x.remove(t.layoutDom),(x.inArray("docVisible",t.options.titleCount.conditions)||x.inArray("docHidden",t.options.titleCount.conditions))&&C.decrement(),s(t.options.queue)}Object.defineProperty(e,"__esModule",{value:!0}),e.Defaults=e.Store=e.Queues=e.DefaultMaxVisible=e.docTitle=e.DocModalCount=e.PageHidden=void 0,e.getQueueCounts=o,e.addToQueue=i,e.removeFromQueue=r,e.queueRender=s,e.queueRenderAll=u,e.ghostFix=a,e.build=c,e.hasButtons=l,e.handleModal=d,e.handleModalClose=h,e.queueClose=m,e.dequeueClose=y,e.fire=b,e.openFlow=w,e.closeFlow=g;var _=n(0),x=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(_),S=(e.PageHidden=!1,e.DocModalCount=0),k={originalTitle:null,count:0,changed:!1,timer:-1},C=e.docTitle={increment:function(){k.count++,C._update()},decrement:function(){if(--k.count<=0)return void C._clear();C._update()},_update:function(){var t=document.title;k.changed?document.title="("+k.count+") "+k.originalTitle:(k.originalTitle=t,document.title="("+k.count+") "+t,k.changed=!0)},_clear:function(){k.changed&&(k.count=0,document.title=k.originalTitle,k.changed=!1)}},E=e.DefaultMaxVisible=5,P=e.Queues={global:{maxVisible:E,queue:[]}},D=e.Store={};e.Defaults={type:"alert",layout:"topRight",theme:"mint",text:"",timeout:!1,progressBar:!0,closeWith:["click"],animation:{open:"noty_effects_open",close:"noty_effects_close"},id:!1,force:!1,killer:!1,queue:"global",container:!1,buttons:[],callbacks:{beforeShow:null,onShow:null,afterShow:null,onClose:null,afterClose:null,onHover:null,onTemplate:null},sounds:{sources:[],volume:1,conditions:[]},titleCount:{conditions:[]},modal:!1,visibilityControl:!0}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.NotyButton=void 0;var i=n(0),r=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(i);e.NotyButton=function t(e,n,i){var s=this,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return o(this,t),this.dom=document.createElement("button"),this.dom.innerHTML=e,this.id=u.id=u.id||r.generateID("button"),this.cb=i,Object.keys(u).forEach(function(t){s.dom.setAttribute(t,u[t])}),r.addClass(this.dom,n||"noty_btn"),this}},function(t,e,n){"use strict";function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();e.Push=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/service-worker.js";return o(this,t),this.subData={},this.workerPath=e,this.listeners={onPermissionGranted:[],onPermissionDenied:[],onSubscriptionSuccess:[],onSubscriptionCancel:[],onWorkerError:[],onWorkerSuccess:[],onWorkerNotSupported:[]},this}return i(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"fire",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.listeners.hasOwnProperty(t)&&this.listeners[t].forEach(function(t){"function"==typeof t&&t.apply(e,n)})}},{key:"create",value:function(){console.log("NOT IMPLEMENTED YET")}},{key:"isSupported",value:function(){var t=!1;try{t=window.Notification||window.webkitNotifications||navigator.mozNotification||window.external&&void 0!==window.external.msIsSiteMode()}catch(t){}return t}},{key:"getPermissionStatus",value:function(){var t="default";if(window.Notification&&window.Notification.permissionLevel)t=window.Notification.permissionLevel;else if(window.webkitNotifications&&window.webkitNotifications.checkPermission)switch(window.webkitNotifications.checkPermission()){case 1:t="default";break;case 0:t="granted";break;default:t="denied"}else window.Notification&&window.Notification.permission?t=window.Notification.permission:navigator.mozNotification?t="granted":window.external&&void 0!==window.external.msIsSiteMode()&&(t=window.external.msIsSiteMode()?"granted":"default");return t.toString().toLowerCase()}},{key:"getEndpoint",value:function(t){var e=t.endpoint,n=t.subscriptionId;return n&&-1===e.indexOf(n)&&(e+="/"+n),e}},{key:"isSWRegistered",value:function(){try{return"activated"===navigator.serviceWorker.controller.state}catch(t){return!1}}},{key:"unregisterWorker",value:function(){var t=this;"serviceWorker"in navigator&&navigator.serviceWorker.getRegistrations().then(function(e){var n=!0,o=!1,i=void 0;try{for(var r,s=e[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){r.value.unregister(),t.fire("onSubscriptionCancel")}}catch(t){o=!0,i=t}finally{try{!n&&s.return&&s.return()}finally{if(o)throw i}}})}},{key:"requestSubscription",value:function(){var t=this,e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],n=this,o=this.getPermissionStatus(),i=function(o){"granted"===o?(t.fire("onPermissionGranted"),"serviceWorker"in navigator?navigator.serviceWorker.register(t.workerPath).then(function(){navigator.serviceWorker.ready.then(function(t){n.fire("onWorkerSuccess"),t.pushManager.subscribe({userVisibleOnly:e}).then(function(t){var e=t.getKey("p256dh"),o=t.getKey("auth");n.subData={endpoint:n.getEndpoint(t),p256dh:e?window.btoa(String.fromCharCode.apply(null,new Uint8Array(e))):null,auth:o?window.btoa(String.fromCharCode.apply(null,new Uint8Array(o))):null},n.fire("onSubscriptionSuccess",[n.subData])}).catch(function(t){n.fire("onWorkerError",[t])})})}):n.fire("onWorkerNotSupported")):"denied"===o&&(t.fire("onPermissionDenied"),t.unregisterWorker())};"default"===o?window.Notification&&window.Notification.requestPermission?window.Notification.requestPermission(i):window.webkitNotifications&&window.webkitNotifications.checkPermission&&window.webkitNotifications.requestPermission(i):i(o)}}]),t}()},function(t,e,n){(function(e,o){/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   4.1.0
 */
!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){return"function"==typeof t||"object"==typeof t&&null!==t}function i(t){return"function"==typeof t}function r(t){z=t}function s(t){U=t}function u(){return void 0!==R?function(){R(c)}:a()}function a(){var t=setTimeout;return function(){return t(c,1)}}function c(){for(var t=0;t<Q;t+=2){(0,X[t])(X[t+1]),X[t]=void 0,X[t+1]=void 0}Q=0}function l(t,e){var n=arguments,o=this,i=new this.constructor(d);void 0===i[tt]&&j(i);var r=o._state;return r?function(){var t=n[r-1];U(function(){return D(r,i,t,o._result)})}():k(o,i,t,e),i}function f(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(d);return g(n,t),n}function d(){}function h(){return new TypeError("You cannot resolve a promise with itself")}function p(){return new TypeError("A promises callback cannot return that same promise.")}function v(t){try{return t.then}catch(t){return it.error=t,it}}function m(t,e,n,o){try{t.call(e,n,o)}catch(t){return t}}function y(t,e,n){U(function(t){var o=!1,i=m(n,e,function(n){o||(o=!0,e!==n?g(t,n):x(t,n))},function(e){o||(o=!0,S(t,e))},"Settle: "+(t._label||" unknown promise"));!o&&i&&(o=!0,S(t,i))},t)}function b(t,e){e._state===nt?x(t,e._result):e._state===ot?S(t,e._result):k(e,void 0,function(e){return g(t,e)},function(e){return S(t,e)})}function w(t,e,n){e.constructor===t.constructor&&n===l&&e.constructor.resolve===f?b(t,e):n===it?(S(t,it.error),it.error=null):void 0===n?x(t,e):i(n)?y(t,e,n):x(t,e)}function g(e,n){e===n?S(e,h()):t(n)?w(e,n,v(n)):x(e,n)}function _(t){t._onerror&&t._onerror(t._result),C(t)}function x(t,e){t._state===et&&(t._result=e,t._state=nt,0!==t._subscribers.length&&U(C,t))}function S(t,e){t._state===et&&(t._state=ot,t._result=e,U(_,t))}function k(t,e,n,o){var i=t._subscribers,r=i.length;t._onerror=null,i[r]=e,i[r+nt]=n,i[r+ot]=o,0===r&&t._state&&U(C,t)}function C(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var o=void 0,i=void 0,r=t._result,s=0;s<e.length;s+=3)o=e[s],i=e[s+n],o?D(n,o,i,r):i(r);t._subscribers.length=0}}function E(){this.error=null}function P(t,e){try{return t(e)}catch(t){return rt.error=t,rt}}function D(t,e,n,o){var r=i(n),s=void 0,u=void 0,a=void 0,c=void 0;if(r){if(s=P(n,o),s===rt?(c=!0,u=s.error,s.error=null):a=!0,e===s)return void S(e,p())}else s=o,a=!0;e._state!==et||(r&&a?g(e,s):c?S(e,u):t===nt?x(e,s):t===ot&&S(e,s))}function O(t,e){try{e(function(e){g(t,e)},function(e){S(t,e)})}catch(e){S(t,e)}}function T(){return st++}function j(t){t[tt]=st++,t._state=void 0,t._result=void 0,t._subscribers=[]}function M(t,e){this._instanceConstructor=t,this.promise=new t(d),this.promise[tt]||j(this.promise),V(e)?(this._input=e,this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?x(this.promise,this._result):(this.length=this.length||0,this._enumerate(),0===this._remaining&&x(this.promise,this._result))):S(this.promise,A())}function A(){return new Error("Array Methods must be provided an Array")}function q(t){return new M(this,t).promise}function N(t){var e=this;return new e(V(t)?function(n,o){for(var i=t.length,r=0;r<i;r++)e.resolve(t[r]).then(n,o)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function H(t){var e=this,n=new e(d);return S(n,t),n}function L(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function W(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function F(t){this[tt]=T(),this._result=this._state=void 0,this._subscribers=[],d!==t&&("function"!=typeof t&&L(),this instanceof F?O(this,t):W())}function B(){var t=void 0;if(void 0!==o)t=o;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(t){throw new Error("polyfill failed because global object is unavailable in this environment")}var e=t.Promise;if(e){var n=null;try{n=Object.prototype.toString.call(e.resolve())}catch(t){}if("[object Promise]"===n&&!e.cast)return}t.Promise=F}var I=void 0;I=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var V=I,Q=0,R=void 0,z=void 0,U=function(t,e){X[Q]=t,X[Q+1]=e,2===(Q+=2)&&(z?z(c):Z())},G="undefined"!=typeof window?window:void 0,Y=G||{},K=Y.MutationObserver||Y.WebKitMutationObserver,$="undefined"==typeof self&&void 0!==e&&"[object process]"==={}.toString.call(e),J="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,X=new Array(1e3),Z=void 0;Z=$?function(){return function(){return e.nextTick(c)}}():K?function(){var t=0,e=new K(c),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}():J?function(){var t=new MessageChannel;return t.port1.onmessage=c,function(){return t.port2.postMessage(0)}}():void 0===G?function(){try{var t=n(9);return R=t.runOnLoop||t.runOnContext,u()}catch(t){return a()}}():a();var tt=Math.random().toString(36).substring(16),et=void 0,nt=1,ot=2,it=new E,rt=new E,st=0;return M.prototype._enumerate=function(){for(var t=this.length,e=this._input,n=0;this._state===et&&n<t;n++)this._eachEntry(e[n],n)},M.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,o=n.resolve;if(o===f){var i=v(t);if(i===l&&t._state!==et)this._settledAt(t._state,e,t._result);else if("function"!=typeof i)this._remaining--,this._result[e]=t;else if(n===F){var r=new n(d);w(r,t,i),this._willSettleAt(r,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(o(t),e)},M.prototype._settledAt=function(t,e,n){var o=this.promise;o._state===et&&(this._remaining--,t===ot?S(o,n):this._result[e]=n),0===this._remaining&&x(o,this._result)},M.prototype._willSettleAt=function(t,e){var n=this;k(t,void 0,function(t){return n._settledAt(nt,e,t)},function(t){return n._settledAt(ot,e,t)})},F.all=q,F.race=N,F.resolve=f,F.reject=H,F._setScheduler=r,F._setAsap=s,F._asap=U,F.prototype={constructor:F,then:l,catch:function(t){return this.then(null,t)}},F.polyfill=B,F.Promise=F,F})}).call(e,n(7),n(8))},function(t,e){},function(t,e,n){"use strict";function o(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}();n(5);var s=n(4),u=function(t){return t&&t.__esModule?t:{default:t}}(s),a=n(0),c=o(a),l=n(1),f=o(l),d=n(2),h=n(3),p=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,t),this.options=c.deepExtend({},f.Defaults,e),this.id=this.options.id||c.generateID("bar"),this.closeTimer=-1,this.barDom=null,this.layoutDom=null,this.progressDom=null,this.showing=!1,this.shown=!1,this.closed=!1,this.closing=!1,this.killable=this.options.timeout||this.options.closeWith.length>0,this.hasSound=this.options.sounds.sources.length>0,this.soundPlayed=!1,this.listeners={beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onHover:[],onTemplate:[]},this.promises={show:null,close:null},this.on("beforeShow",this.options.callbacks.beforeShow),this.on("onShow",this.options.callbacks.onShow),this.on("afterShow",this.options.callbacks.afterShow),this.on("onClose",this.options.callbacks.onClose),this.on("afterClose",this.options.callbacks.afterClose),this.on("onHover",this.options.callbacks.onHover),this.on("onTemplate",this.options.callbacks.onTemplate),this}return r(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"show",value:function(){var e=this;if(!0!==this.options.killer||f.PageHidden)if("string"!=typeof this.options.killer||f.PageHidden){var n=f.getQueueCounts(this.options.queue);if(n.current>=n.maxVisible||f.PageHidden)return f.addToQueue(this),f.PageHidden&&this.hasSound&&c.inArray("docHidden",this.options.sounds.conditions)&&c.createAudioElements(this),f.PageHidden&&c.inArray("docHidden",this.options.titleCount.conditions)&&f.docTitle.increment(),this}else t.closeAll(this.options.killer);else t.closeAll();if(f.Store[this.id]=this,f.fire(this,"beforeShow"),this.showing=!0,this.closing)return this.showing=!1,this;if(f.build(this),f.handleModal(this),this.options.force?this.layoutDom.insertBefore(this.barDom,this.layoutDom.firstChild):this.layoutDom.appendChild(this.barDom),this.hasSound&&!this.soundPlayed&&c.inArray("docVisible",this.options.sounds.conditions)&&c.createAudioElements(this),c.inArray("docVisible",this.options.titleCount.conditions)&&f.docTitle.increment(),this.shown=!0,this.closed=!1,f.hasButtons(this)&&Object.keys(this.options.buttons).forEach(function(t){var n=e.barDom.querySelector("#"+e.options.buttons[t].id);c.addListener(n,"click",function(n){c.stopPropagation(n),e.options.buttons[t].cb()})}),this.progressDom=this.barDom.querySelector(".noty_progressbar"),c.inArray("click",this.options.closeWith)&&(c.addClass(this.barDom,"noty_close_with_click"),c.addListener(this.barDom,"click",function(t){c.stopPropagation(t),e.close()},!1)),c.addListener(this.barDom,"mouseenter",function(){f.fire(e,"onHover")},!1),this.options.timeout&&c.addClass(this.barDom,"noty_has_timeout"),c.inArray("button",this.options.closeWith)){c.addClass(this.barDom,"noty_close_with_button");var o=document.createElement("div");c.addClass(o,"noty_close_button"),o.innerHTML="×",this.barDom.appendChild(o),c.addListener(o,"click",function(t){c.stopPropagation(t),e.close()},!1)}return f.fire(this,"onShow"),null===this.options.animation.open?this.promises.show=new u.default(function(t){t()}):"function"==typeof this.options.animation.open?this.promises.show=new u.default(this.options.animation.open.bind(this)):(c.addClass(this.barDom,this.options.animation.open),this.promises.show=new u.default(function(t){c.addListener(e.barDom,c.animationEndEvents,function(){c.removeClass(e.barDom,e.options.animation.open),t()})})),this.promises.show.then(function(){var t=e;setTimeout(function(){f.openFlow(t)},100)}),this}},{key:"stop",value:function(){return f.dequeueClose(this),this}},{key:"resume",value:function(){return f.queueClose(this),this}},{key:"setTimeout",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){if(this.stop(),this.options.timeout=t,this.barDom){this.options.timeout?c.addClass(this.barDom,"noty_has_timeout"):c.removeClass(this.barDom,"noty_has_timeout");var e=this;setTimeout(function(){e.resume()},100)}return this})},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom&&(this.barDom.querySelector(".noty_body").innerHTML=t),e&&(this.options.text=t),this}},{key:"setType",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.barDom){c.classList(this.barDom).split(" ").forEach(function(t){"noty_type__"===t.substring(0,11)&&c.removeClass(e.barDom,t)}),c.addClass(this.barDom,"noty_type__"+t)}return n&&(this.options.type=t),this}},{key:"setTheme",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.barDom){c.classList(this.barDom).split(" ").forEach(function(t){"noty_theme__"===t.substring(0,12)&&c.removeClass(e.barDom,t)}),c.addClass(this.barDom,"noty_theme__"+t)}return n&&(this.options.theme=t),this}},{key:"close",value:function(){var t=this;return this.closed?this:this.shown?(f.fire(this,"onClose"),this.closing=!0,null===this.options.animation.close?this.promises.close=new u.default(function(t){t()}):"function"==typeof this.options.animation.close?this.promises.close=new u.default(this.options.animation.close.bind(this)):(c.addClass(this.barDom,this.options.animation.close),this.promises.close=new u.default(function(e){c.addListener(t.barDom,c.animationEndEvents,function(){t.options.force?c.remove(t.barDom):f.ghostFix(t),e()})})),this.promises.close.then(function(){f.closeFlow(t),f.handleModalClose(t)}),this.closed=!0,this):(f.removeFromQueue(this),this)}}],[{key:"closeAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object.keys(f.Store).forEach(function(e){t?f.Store[e].options.queue===t&&f.Store[e].killable&&f.Store[e].close():f.Store[e].killable&&f.Store[e].close()}),this}},{key:"overrideDefaults",value:function(t){return f.Defaults=c.deepExtend({},f.Defaults,t),this}},{key:"setMaxVisible",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.DefaultMaxVisible,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return f.Queues.hasOwnProperty(e)||(f.Queues[e]={maxVisible:t,queue:[]}),f.Queues[e].maxVisible=t,this}},{key:"button",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments[2],o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new d.NotyButton(t,e,n,o)}},{key:"version",value:function(){return"3.1.0"}},{key:"Push",value:function(t){return new h.Push(t)}}]),t}();e.default=p,c.visibilityChangeFlow(),t.exports=e.default},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(l===setTimeout)return setTimeout(t,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function r(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){v&&h&&(v=!1,h.length?p=h.concat(p):m=-1,p.length&&u())}function u(){if(!v){var t=i(s);v=!0;for(var e=p.length;e;){for(h=p,p=[];++m<e;)h&&h[m].run();m=-1,e=p.length}h=null,v=!1,r(t)}}function a(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(t){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var h,p=[],v=!1,m=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];p.push(new a(t,e)),1!==p.length||v||i(u)},a.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e){}])})},function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(9),r=o(i),s=n(11),u=o(s);n(10);var a={layout:"topRight",theme:"mint",timeout:5e3,progressBar:!0,closeWith:["click"]},c={options:{},setOptions:function(t){return this.options=(0,r.default)({},a,t),this},show:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"alert",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=(0,r.default)({},this.options,n,{type:e,text:t});return new u.default(o).show()},success:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"success",e)},error:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"error",e)},warning:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"warning",e)},info:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.show(t,"info",e)}};e.default={install:function(t,e){var n=c.setOptions(e);t.prototype.$noty=n,t.noty=n}}},function(t,e,n){n(39),t.exports=n(4).Object.assign},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var o=n(3);t.exports=function(t){if(!o(t))throw TypeError(t+" is not an object!");return t}},function(t,e,n){var o=n(8),i=n(35),r=n(34);t.exports=function(t){return function(e,n,s){var u,a=o(e),c=i(a.length),l=r(s,c);if(t&&n!=n){for(;c>l;)if((u=a[l++])!=u)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===n)return t||l||0;return!t&&-1}}},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e,n){var o=n(14);t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,i){return t.call(e,n,o,i)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var o=n(3),i=n(2).document,r=o(i)&&o(i.createElement);t.exports=function(t){return r?i.createElement(t):{}}},function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,e,n){var o=n(2),i=n(4),r=n(18),s=n(23),u=function(t,e,n){var a,c,l,f=t&u.F,d=t&u.G,h=t&u.S,p=t&u.P,v=t&u.B,m=t&u.W,y=d?i:i[e]||(i[e]={}),b=y.prototype,w=d?o:h?o[e]:(o[e]||{}).prototype;d&&(n=e);for(a in n)(c=!f&&w&&void 0!==w[a])&&a in y||(l=c?w[a]:n[a],y[a]=d&&"function"!=typeof w[a]?n[a]:v&&c?r(l,o):m&&w[a]==l?function(t){var e=function(e,n,o){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,o)}return t.apply(this,arguments)};return e.prototype=t.prototype,e}(l):p&&"function"==typeof l?r(Function.call,l):l,p&&((y.virtual||(y.virtual={}))[a]=l,t&u.R&&b&&!b[a]&&s(b,a,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var o=n(26),i=n(31);t.exports=n(0)?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){t.exports=!n(0)&&!n(1)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){"use strict";var o=n(29),i=n(27),r=n(30),s=n(36),u=n(6),a=Object.assign;t.exports=!a||n(1)(function(){var t={},e={},n=Symbol(),o="abcdefghijklmnopqrst";return t[n]=7,o.split("").forEach(function(t){e[t]=t}),7!=a({},t)[n]||Object.keys(a({},e)).join("")!=o})?function(t,e){for(var n=s(t),a=arguments.length,c=1,l=i.f,f=r.f;a>c;)for(var d,h=u(arguments[c++]),p=l?o(h).concat(l(h)):o(h),v=p.length,m=0;v>m;)f.call(h,d=p[m++])&&(n[d]=h[d]);return n}:a},function(t,e,n){var o=n(15),i=n(24),r=n(37),s=Object.defineProperty;e.f=n(0)?Object.defineProperty:function(t,e,n){if(o(t),e=r(e,!0),o(n),i)try{return s(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var o=n(22),i=n(8),r=n(16)(!1),s=n(32)("IE_PROTO");t.exports=function(t,e){var n,u=i(t),a=0,c=[];for(n in u)n!=s&&o(u,n)&&c.push(n);for(;e.length>a;)o(u,n=e[a++])&&(~r(c,n)||c.push(n));return c}},function(t,e,n){var o=n(28),i=n(20);t.exports=Object.keys||function(t){return o(t,i)}},function(t,e){e.f={}.propertyIsEnumerable},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var o=n(33)("keys"),i=n(38);t.exports=function(t){return o[t]||(o[t]=i(t))}},function(t,e,n){var o=n(2),i=o["__core-js_shared__"]||(o["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,e,n){var o=n(7),i=Math.max,r=Math.min;t.exports=function(t,e){return t=o(t),t<0?i(t+e,0):r(t,e)}},function(t,e,n){var o=n(7),i=Math.min;t.exports=function(t){return t>0?i(o(t),9007199254740991):0}},function(t,e,n){var o=n(5);t.exports=function(t){return Object(o(t))}},function(t,e,n){var o=n(3);t.exports=function(t,e){if(!o(t))return t;var n,i;if(e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;if("function"==typeof(n=t.valueOf)&&!o(i=n.call(t)))return i;if(!e&&"function"==typeof(n=t.toString)&&!o(i=n.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},function(t,e,n){var o=n(21);o(o.S+o.F,"Object",{assign:n(25)})}])});
