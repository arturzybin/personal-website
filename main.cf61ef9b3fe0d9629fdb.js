!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(0);function o(t){t.classList.add("home__letter_animated"),setTimeout((function(){t.classList.remove("home__letter_animated")}),900)}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var i=!1;document.addEventListener("touchstart",(function(){return i=!0}),{once:!0}),document.addEventListener("mousemove",(function(t){a.x=t.pageX,a.y=t.pageY}));for(var u=[],a={x:0,y:0},c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.x=0,this.y=0,this.node=document.createElement("div");var e=Math.floor(3*Math.random());this.node.className="cursor-trail cursor-trail_color_".concat(e),document.body.appendChild(this.node)}var e,n,o;return e=t,(n=[{key:"draw",value:function(){this.node.style.left=this.x+"px",this.node.style.top=this.y+"px"}}])&&r(e.prototype,n),o&&r(e,o),t}(),l=0;l<30;l++)u.push(new c);!function t(){var e,n,o,r,c,l;i?document.querySelectorAll(".cursor-trail").forEach((function(t){t.remove()})):(e=a.x,n=a.y,o=u[0].node.clientWidth+1,r=document.documentElement.clientWidth,c=u[0].node.clientHeight+1,l=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight),u.forEach((function(t,i,u){var a=u[i+1]||u[0],f=Math.floor(2*Math.random())*(2*Math.round(Math.random())-1),s=Math.floor(2*Math.random())*(2*Math.round(Math.random())-1);t.x=e+f>r-o?r-o:e+f,t.y=n+s>l-c?l-c:n+s,t.draw(),e+=.3*(a.x-t.x),n+=.3*(a.y-t.y)})),requestAnimationFrame(t))}(),document.querySelectorAll(".home__letter").forEach((function(t,e){t.style.visibility="hidden",setTimeout((function(){o(t),t.style.visibility="visible"}),50*e)})),document.querySelectorAll(".home__letter").forEach((function(t){return t.onmouseenter=function(){return o(t)}})),function(){var t=document.querySelector(".text-gradient-container");if(t){var e=t.textContent.trim().split("");t.innerHTML="<span>"+e.join("</span><span>")+"</span>",function t(e,n){var o=Math.floor(14*Math.random());for(;o===n;)o=Math.floor(14*Math.random());var r=e[o],i=document.createElement("span");r.forEach((function(t){return i.textContent+=t.textContent})),i.classList.add("skill"),r[0].before(i),r.forEach((function(t){return t.hidden=!0})),setTimeout((function(){i.classList.add("skill_active")}),300),setTimeout((function(){i.classList.remove("skill_active")}),2400),setTimeout((function(){i.remove(),r.forEach((function(t){return t.removeAttribute("hidden")})),setTimeout((function(){return t(e,o)}),300)}),3e3)}(function(t){var e=t.querySelectorAll("span"),n=[[]],o=0,r=!0,i=!1,u=void 0;try{for(var a,c=e[Symbol.iterator]();!(r=(a=c.next()).done);r=!0){var l=a.value;" "===l.textContent&&n[o].length&&(o++,n[o]=[])," "!==l.textContent&&"|"!==l.textContent&&n[o].push(l)}}catch(t){i=!0,u=t}finally{try{r||null==c.return||c.return()}finally{if(i)throw u}}return n}(t))}}(),document.querySelectorAll(".projects__cube").forEach((function(t){return function t(e,n){var o=["front","left","right","top","bottom","back"];n.length||(n=function(t){for(var e=[],n=0;n<t;n++)e.push(n);for(var o=e.length-1;o>0;o--){var r=Math.floor(Math.random()*(o+1)),i=[e[r],e[o]];e[o]=i[0],e[r]=i[1]}return e}(o.length));var r=n.pop(),i=o[r];e.className="projects__cube projects__cube_".concat(i),setTimeout((function(){return t(e,n)}),3e3)}(t,[])}))}]);