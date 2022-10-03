(()=>{"use strict";var e={28:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(81),l=n.n(s),a=n(645),r=n.n(a)()(l());r.push([e.id,"@tailwind base;\r\n@tailwind components;\r\n@tailwind utilities;\r\n\r\ni {\r\n    font-style: normal;\r\n    font-size: 24px;\r\n}",""]);const o=r},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",s=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),s&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),s&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,s,l,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(s)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(var d=0;d<e.length;d++){var c=[].concat(e[d]);s&&r[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),l&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=l):c[4]="".concat(l)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,s=0;s<t.length;s++)if(t[s].identifier===e){n=s;break}return n}function s(e,s){for(var a={},r=[],o=0;o<e.length;o++){var i=e[o],d=s.base?i[0]+s.base:i[0],c=a[d]||0,x="".concat(d," ").concat(c);a[d]=c+1;var p=n(x),f={css:i[1],media:i[2],sourceMap:i[3],supports:i[4],layer:i[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var u=l(f,s);s.byIndex=o,t.splice(o,0,{identifier:x,updater:u,references:1})}r.push(x)}return r}function l(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,l){var a=s(e=e||[],l=l||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var o=n(a[r]);t[o].references--}for(var i=s(e,l),d=0;d<a.length;d++){var c=n(a[d]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=i}}},569:e=>{var t={};e.exports=function(e,n){var s=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var l=void 0!==n.layer;l&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,l&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(s,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(s){var l=t[s];if(void 0!==l)return l.exports;var a=t[s]={id:s,exports:{}};return e[s](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),s=n(795),l=n.n(s),a=n(569),r=n.n(a),o=n(565),i=n.n(o),d=n(216),c=n.n(d),x=n(589),p=n.n(x),f=n(28),u={};function b(){document.getElementsByTagName("main")[0].innerHTML='\n        <section class="home w-full bg-slate-200 flex flex-col px-2 py-8 gap-6 md:px-24 lg:px-48">\n            <div class="px-4 w-1/2 h-96 rounded-lg overflow-hidden">\n                <img src="./hero.jpg" />\n            </div>\n            <div class="description">\n                <h1 class="text-5xl font-bold px-4 py-4 text-sky-600">JamBull restro-bar</h1>\n                <p class="text-xl px-4 max-w-4xl">A bright break from working days? There is an offer - JamBull!\n                    <br>\n                    5 reasons why you should visit us:\n                    <br>\n                    • author\'s fusion cuisine, a combination of culinary traditions from all over the world;\n                    <br>\n                    • exclusive bar menu;\n                    <br>\n                    • breakfasts all day;\n                    <br>\n                    • two atmospheric halls and a comfortable contact bar;\n                    <br>\n                    • democratic prices.\n                    <br>\n                    When developing the menu, we tried to interpret the classics into new bright tastes in our signature format. We guarantee that the high level of service will leave a pleasant impression and a desire to return again. Fill your life with warm memories with JamBull!\n                    Contact us via Instagram or by contact number, we will answer all your questions!\n                </p>\n            </div>\n            <div class="hours">\n                <h1 class="px-4 py-2 font-semibold text-2xl">Hours</h1>\n                <p class="text-xl px-4">\n                    Sunday: 8am - 8pm\n                    <br>\n                    Monday: 6am - 6pm\n                    <br>\n                    Tuesday: 6am - 6pm\n                    <br>\n                    Wednesday: 6am - 6pm\n                    <br>\n                    Thursday: 6am - 10pm\n                    <br>\n                    Friday: 6am - 10pm\n                    <br>\n                    Saturday: 8am - 10pm</p>\n            </div>\n            <div class="location">\n                <h1 class="px-4 py-2 font-semibold text-2xl">Location</h1>\n                <p class="text-xl px-4">​ЖК Отау • ​улица Жамбыла, 155 к2\n                    Алмалинский район, Алматы, 050008</p>\n            </div>\n        </section>'}function m(){document.getElementsByTagName("main")[0].innerHTML='\n        <section class="menu w-full bg-slate-200 flex flex-col px-2 md:px-24 lg:px-48 py-8 gap-6">\n                <h1 class="text-5xl font-bold px-4 py-4">Menu</h1>\n                <div class="breakfast list px-4">\n                    <h1 class="font-semibold text-2xl py-4">Breakfast</h1>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Cheeses</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 300 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Eggs benedict with salmon</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Bagel with salted salmon, avocado and labne cheese</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 450 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Scramble with avocado and salted salmon</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 350 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Fried eggs with sausages and champignons</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>\n                    </div>\n                </div>\n                <div class="bowl list list px-4">\n                    <h1 class="font-semibold text-2xl py-4">Bowls</h1>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Green Bowl</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Teriyaki Bowl with chicken</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 150 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Teriyaki Bowl with salmon</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 450 T</span>\n                    </div>\n                </div>\n                <div class="salad list list px-4">\n                    <h1 class="font-semibold text-2xl py-4">Salads</h1>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Warm salad with horsemeat and ginger sauce</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Salad with warm Asian eggplant</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 750 T</span>\n                    </div>\n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Greece salad</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 550 T</span>\n                    </div>  \n                    <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                        <p class="text-2xl font-medium text-slate-600 w-2/4">Salad with arugula and shrimps</p>\n                        <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 450 T</span>\n                    </div>   \n                    <div class="snack list">\n                        <h1 class="font-semibold text-2xl py-4">Snakcs</h1>\n                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                            <p class="text-2xl font-medium text-slate-600 w-2/4">Bread</p>\n                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">1 550 T</span>\n                        </div>\n                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                            <p class="text-2xl font-medium text-slate-600 w-2/4">Cheese plato</p>\n                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 950 T</span>\n                        </div>\n                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                            <p class="text-2xl font-medium text-slate-600 w-2/4">Snacks plato</p>\n                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 950 T</span>\n                        </div>  \n                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                            <p class="text-2xl font-medium text-slate-600 w-2/4">Homemade mackerel</p>\n                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">2 750 T</span>\n                        </div>    \n                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                            <p class="text-2xl font-medium text-slate-600 w-2/4">Salmon carpaccio</p>\n                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 350 T</span>\n                        </div>      \n                        <div class="px-4 py-4 flex flex-row w-full justify-between bg-slate-300 border-b-2 border-slate-400">\n                            <p class="text-2xl font-medium text-slate-600 w-2/4">Beer snacks</p>\n                            <span class="text-2xl font-bold text-sky-600 w-1/4 text-right">3 550 T</span>\n                        </div>             \n        </section>'}function w(){document.getElementsByTagName("main")[0].innerHTML='\n            <section class="contacts h-screen w-full bg-slate-200 flex flex-col px-2 md:px-24 lg:px-48 py-8 gap-6">\n                <h1  class="text-5xl font-bold px-4 py-4 self-center">Our contacts</h1>\n                <div class="socials px-4 flex flex-col gap-4">\n                    <div class="self-center">\n                        <i></i><p class="text-xl">+7-701-200-10-60</p>\n                    </div>\n                    <div class="self-center">\n                        <i></i><a href="wolt.com" class="text-xl underline text-sky-600\n                        hover:text-sky-800\n                        ">wolt.com</a>\n                    </div>\n                    <div class="self-center">\n                        <i></i><a href="#" class="text-xl underline text-sky-600\n                        hover:text-sky-800\n                        ">jambulljam@gmail.com</a>\n                    </div>\n                    <div class="self-center">\n                        <i></i><a href="#" class="text-xl underline text-sky-600\n                        hover:text-sky-800\n                        ">Instagram</a>\n                    </div>\n                    <div class="self-center">\n                        <i></i><a href="#" class="text-xl underline text-sky-600\n                        hover:text-sky-800\n                        ">Facebook</a>\n                    </div>\n                    <div class="self-center">\n                        <i></i><a href="#" class="text-xl underline text-sky-600\n                        hover:text-sky-800\n                        ">WhatApp</a>\n                    </div>\n                </div>\n            </section>'}u.styleTagTransform=p(),u.setAttributes=i(),u.insert=r().bind(null,"head"),u.domAPI=l(),u.insertStyleElement=c(),t()(f.Z,u),f.Z&&f.Z.locals&&f.Z.locals,console.log("it is working my dude"),console.log("it is working"),document.addEventListener("DOMContentLoaded",(()=>{let e=document.getElementsByTagName("body")[0],t=document.createElement("main"),n=document.createElement("nav");n.classList.add("w-full","bg-slate-100");let s=document.createElement("ul");s.classList.add("px-2","md:px-24","lg:px-48","flex","flex-row","w-full");let l=document.createElement("li"),a=document.createElement("i"),r=document.createTextNode("Logo");l.classList.add("basis-4/5","px-4","py-4"),a.classList.add("hover:cursor-pointer","hover:text-sky-500"),a.appendChild(r),l.appendChild(a),s.appendChild(l);class o{constructor(e,t){this.innerText=e,this.addText=function(){let e=document.createElement("li");e.classList.add("px-4","py-4","basis-1/5","text-2xl","hover:bg-slate-200","hover:cursor-pointer","hover:text-sky-500");let n=document.createTextNode(this.innerText);e.appendChild(n),s.appendChild(e),e.addEventListener("click",t)}}}new o("Home",b).addText(),new o("Menu",m).addText(),new o("Contacts",w).addText(),n.appendChild(s),e.appendChild(n),e.appendChild(t)}))})()})();