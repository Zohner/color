define("modules/app/timer.es",function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function o(){var t=this;t.tid=setTimeout(function(){o.call(t);var e=Date.now();t.time+=e-t.now,t.now=e,t.emit("tick",{time:t.get()})},t.duration)}Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=function(t,e,n){for(var r=!0;r;){var o=t,i=e,u=n;r=!1,null===o&&(o=Function.prototype);var a=Object.getOwnPropertyDescriptor(o,i);if(void 0!==a){if("value"in a)return a.value;var s=a.get;return void 0===s?void 0:s.call(u)}var c=Object.getPrototypeOf(o);if(null===c)return void 0;t=c,e=i,n=u,r=!0,a=c=void 0}},a=t("modules/util/event/event.es"),s=function(t){function e(){var t=arguments.length<=0||void 0===arguments[0]?1e3:arguments[0];n(this,e),u(Object.getPrototypeOf(e.prototype),"constructor",this).call(this),this.duration=t,this.reset()}return r(e,t),i(e,[{key:"start",value:function(){this.stop(),this.now=Date.now(),o.call(this)}},{key:"stop",value:function(){clearTimeout(this.tid)}},{key:"restart",value:function(){this.reset(),this.start()}},{key:"reset",value:function(){this.stop(),this.time=0,this.tid=null,this.now=0}},{key:"get",value:function(){return this.time}}]),e}(a.EventEmitter);e.Timer=s});