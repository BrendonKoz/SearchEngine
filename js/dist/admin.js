parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qkQw":[function(require,module,exports) {
function n(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var t=function t(){n(this,t)};document.addEventListener("DOMContentLoaded",function(){window.SearchEngine=new t,document.dispatchEvent(new CustomEvent("SearchEngineConstructed"))});
},{}],"PYTh":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function r(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}var n=function(){function e(){t(this,e)}return r(e,[{key:"init",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=[];(r=(t="Object"==typeof t?t:document).querySelectorAll(".pwse-tabs")).length&&r.forEach(function(t){var r=t.querySelector('[role="tablist"]'),n=r.querySelectorAll('[role="tab"]'),a=t.querySelectorAll(':scope > [role="tabpanel"]'),i=0,o=null;if(e){var l=localStorage.getItem("pwse-tabs");(l=l?JSON.parse(l):{}).hasOwnProperty(t.getAttribute("id"))&&(o=l[t.getAttribute("id")])}var u=function(t,r){r.focus(),r.removeAttribute("tabindex"),r.setAttribute("aria-selected","true"),t.removeAttribute("aria-selected"),t.setAttribute("tabindex","-1");var i=Array.prototype.indexOf.call(n,r),o=Array.prototype.indexOf.call(n,t);if(a[o].hidden=!0,a[i].hidden=!1,e){var l=localStorage.getItem("pwse-tabs");(l=l?JSON.parse(l):{})[r.closest(".pwse-tabs").getAttribute("id")]=r.getAttribute("id"),localStorage.setItem("pwse-tabs",JSON.stringify(l))}};r.setAttribute("role","tablist"),Array.prototype.forEach.call(n,function(l,c){l.setAttribute("role","tab"),l.setAttribute("id",t.getAttribute("id")+"-"+(c+1)),l.setAttribute("tabindex","-1"),l.parentNode.setAttribute("role","presentation"),e&&o===l.getAttribute("id")&&(i=c),l.addEventListener("click",function(t){t.preventDefault();var e=r.querySelector("[aria-selected]");t.currentTarget!==e&&u(e,t.currentTarget)}),l.addEventListener("keydown",function(t){var e=Array.prototype.indexOf.call(n,t.currentTarget),r=37===t.which?e-1:39===t.which?e+1:40===t.which?"down":null;null!==r&&(t.preventDefault(),"down"===r?a[c].focus():n[r]&&u(t.currentTarget,n[r]))})}),Array.prototype.forEach.call(a,function(t,e){t.setAttribute("role","tabpanel"),t.setAttribute("tabindex","-1"),t.setAttribute("aria-labelledby",n[e].id),t.hidden=!0}),n[i].removeAttribute("tabindex"),n[i].setAttribute("aria-selected","true"),a[i].hidden=!1})}}]),e}();document.addEventListener("SearchEngineConstructed",function(){window.SearchEngine.Tabs=new n});
},{}],"cqec":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}var i=function(){function t(){var n=this;e(this,t);var i=document.getElementById("pwse-operator-details");if(i){i.setAttribute("hidden","");var o=document.createElement("button");o.classList.add("ui-button","ui-state-default"),o.innerHTML=i.getAttribute("data-toggle-label"),o.innerHTML+=' <i class="fa fa-question-circle"></i>',o.addEventListener("click",function(e){e.preventDefault(),i.toggleAttribute("hidden"),"function"==typeof window.InputfieldColumnWidths&&window.InputfieldColumnWidths()}),i.parentNode.prepend(o),"function"==typeof window.InputfieldColumnWidths&&window.InputfieldColumnWidths();var r=document.getElementById("Inputfield_find_args__operator");r&&r.addEventListener("change",function(e){n.setOperator(e.target.value)});var a=document.querySelectorAll(".pwse-operator-details__button");a.length&&a.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault(),n.setOperator(e.target.getAttribute("data-operator"))})})}}return n(t,[{key:"setOperator",value:function(e){var t=document.querySelector(".pwse-operator-details__list-item--active");t&&t.classList.remove("pwse-operator-details__list-item--active"),document.querySelector('button[data-operator="'+e+'"]').closest(".pwse-operator-details__list-item").classList.add("pwse-operator-details__list-item--active"),document.getElementById("Inputfield_find_args__operator").value=e}},{key:"highlight",value:function(e){e.style.transition="all .25s ease-in-out",e.style.backgroundColor="lightyellow",setTimeout(function(){e.style.backgroundColor=null,setTimeout(function(){e.style.transition=null},250)},1e3)}}]),t}();document.addEventListener("SearchEngineConstructed",function(){window.SearchEngine.Config=new i});
},{}],"xbaW":[function(require,module,exports) {
function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}var i=function(){function e(){var n=this;t(this,e);var i=document.querySelectorAll(".pwse-debug");i.length&&(this.configURL=ProcessWire.config.urls.admin+"module/edit?name=SearchEngine",this.debugURL=this.configURL+"&se-debug=1&",i.forEach(function(t){var e=n.makeButton(t.getAttribute("data-debug-button-label"),t,!0);switch(e.icon.setAttribute("class","fa fa-bug"),t.getAttribute("data-type")){case"index":n.initIndex(t,e);break;case"page":n.initPage(t,e);break;case"query":n.initQuery(t,e);break;default:console.error("Unidentified debug container type ("+t.getAttribute("data-type")+")")}}))}return n(e,[{key:"initIndex",value:function(t,e){var n=this;e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),e.button.addEventListener("click",function(i){i.preventDefault(),e.button.setAttribute("disabled","disabled"),e.button.setAttribute("class","ui-button ui-state-disabled"),e.icon.classList.add("fa-spin"),fetch(n.debugURL+"se-debug-index=1").then(function(t){return t.text()}).then(function(i){e.text.innerText=t.getAttribute("data-refresh-button-label"),e.icon.setAttribute("class","fa fa-refresh"),e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),t.innerHTML=i,t.setAttribute("style","margin-top: 2rem"),n.highlight(t),n.findCollapsed(t),window.SearchEngine.Tabs.init(t)})})}},{key:"initPage",value:function(t,e){var n=this,i=this.makeButton(t.getAttribute("data-reindex-button-label"),t,!0),u=parseInt(t.getAttribute("data-page-id"));u&&(e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),i.button.removeAttribute("disabled"),i.button.setAttribute("class","ui-button ui-state-default"));var a=document.getElementById("Inputfield_debugger_page");a.previousSibling.addEventListener("click",function(n){if(n.target.parentNode.classList.contains("PageListActionSelect")){var s=n.target.closest(".PageListItem");u=s.getAttribute("class").match(/(?!PageList)([0-9])+/)[0],t.innerHTML="",t.setAttribute("style","margin-top: 0"),e.text.innerText=t.getAttribute("data-debug-button-label"),e.icon.setAttribute("class","fa fa-bug"),u&&a.value!=u?(e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),i.button.removeAttribute("disabled"),i.button.setAttribute("class","ui-button ui-state-default")):(e.button.setAttribute("disabled","disabled"),e.button.setAttribute("class","ui-button ui-state-disabled"),i.button.setAttribute("disabled","disabled"),i.button.setAttribute("class","ui-button ui-state-disabled"))}},!0);var s=[];e.button.addEventListener("click",function(i){i.preventDefault(),e.button.setAttribute("disabled","disabled"),e.button.setAttribute("class","ui-button ui-state-disabled"),e.icon.classList.add("fa-spin"),fetch(n.debugURL+"se-debug-page-id="+u).then(function(t){return t.text()}).then(function(i){e.text.innerText=t.getAttribute("data-refresh-button-label"),e.icon.setAttribute("class","fa fa-refresh"),e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),t.innerHTML=i,s.length&&(t.innerHTML=s.pop()+t.innerHTML);t.queueData;t.setAttribute("style","margin-top: 2rem"),n.highlight(t),n.findCollapsed(t),window.SearchEngine.Tabs.init(t)})}),i.button.addEventListener("click",function(t){t.preventDefault(),i.button.setAttribute("disabled","disabled"),i.button.setAttribute("class","ui-button ui-state-disabled"),i.icon.classList.add("fa-spin"),fetch(n.debugURL+"se-reindex-page-id="+u).then(function(t){return t.text()}).then(function(t){i.icon.classList.remove("fa-spin"),i.button.removeAttribute("disabled"),i.button.setAttribute("class","ui-button ui-state-default"),s.push(t),e.button.click()})})}},{key:"initQuery",value:function(t,e){var n=this,i=t.getAttribute("data-query");i&&(e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"));var u=document.getElementById("Inputfield_debugger_query_args");document.getElementById("Inputfield_debugger_query").addEventListener("keyup",function(n){"Enter"==n.key&&n.preventDefault(),(i=n.target.value)?(e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),e.text.innerText=t.getAttribute("data-"+(i==a?"refresh":"debug")+"-button-label"),"Enter"==n.key&&e.button.click()):(e.button.setAttribute("disabled","disabled"),e.button.setAttribute("class","ui-button ui-state-disabled"),e.text.innerText=t.getAttribute("data-debug-button-label"))});var a=i;e.button.addEventListener("click",function(s){s.preventDefault(),e.button.setAttribute("disabled","disabled"),e.button.setAttribute("class","ui-button ui-state-disabled"),e.icon.classList.add("fa-spin"),fetch(n.debugURL+"se-debug-query="+encodeURIComponent(i)+"&se-debug-query-args="+encodeURIComponent(JSON.stringify(JSON.parse(u.value)))).then(function(t){return t.text()}).then(function(u){a=i,e.text.innerText=t.getAttribute("data-refresh-button-label"),e.icon.setAttribute("class","fa fa-refresh"),e.button.removeAttribute("disabled"),e.button.setAttribute("class","ui-button ui-state-default"),t.innerHTML=u,t.setAttribute("style","margin-top: 2rem"),n.highlight(t),window.SearchEngine.Tabs.init(t)})})}},{key:"highlight",value:function(t){t.style.transition="all .25s ease-in-out",t.style.backgroundColor="lightyellow",setTimeout(function(){t.style.backgroundColor=null,setTimeout(function(){t.style.transition=null},250)},1e3)}},{key:"makeButton",value:function(t,e,n){var i={button:document.createElement("button"),text:document.createElement("span"),icon:document.createElement("i")};return i.button.setAttribute("class","ui-button ui-state-disabled"),i.button.setAttribute("disabled","disabled"),void 0!==n&&!1!==n&&i.button.setAttribute("style","position: sticky; top: 1rem; z-index: 1"),void 0!==e&&e.parentNode.insertBefore(i.button,e),i.text.innerText=t,i.button.appendChild(i.text),i.icon.setAttribute("class","fa fa-refresh"),i.icon.setAttribute("style","margin-left: .5rem"),i.button.appendChild(i.icon),i}},{key:"findCollapsed",value:function(t){var e=this,n=t.querySelectorAll(".pwse-collapse");n.length&&n.forEach(function(n){if(n.style.maxHeight="400px","TEXTAREA"===n.tagName&&(n.style.height=n.scrollHeight+2+"px"),n.style.overflowY="auto",n.scrollHeight+2>400){var i=e.makeButton(t.getAttribute("data-show-more-button-label"));i.button.setAttribute("class","ui-button ui-state-default"),i.icon.setAttribute("class","fa fa-chevron-down"),i.button.addEventListener("click",function(u){u.preventDefault(),n.style.maxHeight?(n.style.maxHeight=null,i.text.innerText=t.getAttribute("data-show-less-button-label"),i.icon.setAttribute("class","fa fa-chevron-up")):(n.style.maxHeight="400px",i.text.innerText=t.getAttribute("data-show-more-button-label"),i.icon.setAttribute("class","fa fa-chevron-down")),i.button.removeAttribute("disabled"),i.button.setAttribute("class","ui-button ui-state-default"),e.highlight(n)}),i.button.removeAttribute("disabled"),n.parentNode.insertBefore(i.button,n.nextSibling)}})}}]),e}();document.addEventListener("SearchEngineConstructed",function(){window.SearchEngine.Debugger=new i});
},{}],"sfHE":[function(require,module,exports) {
"use strict";require("./src/Core.js"),require("./src/Tabs.js"),require("./src/Config.js"),require("./src/Debugger.js");
},{"./src/Core.js":"qkQw","./src/Tabs.js":"PYTh","./src/Config.js":"cqec","./src/Debugger.js":"xbaW"}]},{},["sfHE"], null)
//# sourceMappingURL=/admin.js.map