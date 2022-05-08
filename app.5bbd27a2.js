parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"SUSc":[function(require,module,exports) {
"use strict";function t(t,e,r){var n=document.createElement(t);return e&&n.classList.add(e),r&&(n.innerText=r),n}function e(t,e,r){var n=document.createElement("input");return t&&n.classList.add(t),e?n.setAttribute("type",e):n.setAttribute("type","text"),r&&n.setAttribute("placeholder",r),n}function r(t,e,r){var n=document.createElement("button");return t&&n.classList.add(t),e?n.setAttribute("type",e):n.setAttribute("type","button"),r&&(n.innerText=r),n}function n(){for(var t=1;t<arguments.length;t++)arguments[0].append(arguments[t])}Object.defineProperty(exports,"__esModule",{value:!0}),exports.appendTag=n,exports.createButton=r,exports.createInput=e,exports.createTag=t;
},{}],"Ra6s":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.calcCountTasksInProgress=n,exports.getDate=c,exports.getTime=u,exports.setCountOfCards=o;var t=require("./app.js");function e(){return t.cards.filter(function(t){return"todo"==t.status&&"true"==t.active}).length}function n(){return t.cards.filter(function(t){return"in_progress"==t.status&&"true"==t.active}).length}function r(){return t.cards.filter(function(t){return"done"==t.status&&"true"==t.active}).length}function o(){document.querySelector("#count_todo").innerText=e(),document.querySelector("#count_in-progress").innerText=n(),document.querySelector("#count_done").innerText=r()}function c(){var t,e,n=new Date;return t=n.getDate()<10?"0".concat(n.getDate()):n.getDate(),e=n.getMonth()<9?"0".concat(n.getMonth()+1):n.getMonth()+1,"".concat(t,".").concat(e,".").concat(n.getFullYear())}function u(){var t,e,n=new Date;return e=n.getMinutes()<10?"0".concat(n.getMinutes()):n.getMinutes(),t=n.getHours()<9?"0".concat(n.getHours()):n.getHours(),"".concat(t,":").concat(e)}
},{"./app.js":"Lent"}],"oqhb":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.boardDisplay=v,exports.closeEditForm=T,exports.displayTime=s,exports.fillingCard=_,exports.getCardData=n,exports.inProgressWrapper=void 0,exports.renderDone=l,exports.renderInProgress=u,exports.renderTodo=p,exports.todoWrapper=void 0;var e,t=require("./create_tag.js"),a=require("./additional.js"),r=require("./app.js");function s(e){document.querySelector(".header__time").innerText=e()}function n(t,a,r,s){e=fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(e){c(e),g(t,a,r,s)}).catch(function(e){return alert(e)})}setInterval(function(){return s(a.getTime)},1e3);var o=document.querySelector(".board__task-wrapper");exports.todoWrapper=o;var d=document.querySelector(".in-progress-wrapper");exports.inProgressWrapper=d;var i=document.querySelector(".done-wrapper");function c(e){var a=document.querySelector(".task__edit-user");a.innerHTML="",e.forEach(function(e){var r=(0,t.createTag)("option","user",e.name);r.innerText=e.name,(0,t.appendTag)(a,r)})}function p(){var e=r.cards.filter(function(e){return"todo"===e.status&&"true"===e.active});if(o.innerHTML="",e.forEach(function(e){var a=(0,t.createTag)("form","task_to-do");a.classList.add("task"),a.setAttribute("data-id",e.id);var r=(0,t.createTag)("div","task__btn"),s=(0,t.createButton)("task__btn-edit","","Edit");s.classList.add("btn");var n=(0,t.createButton)("task__btn-delete","","Delete");n.classList.add("btn");var d=(0,t.createTag)("p","task__title","Title"),i=(0,t.createTag)("p","task__description","Description"),c=(0,t.createTag)("p","task__user","User"),p=(0,t.createTag)("date","task__date","Date"),u=(0,t.createButton)("to-progress");_("todo",e,d,i,c,p),(0,t.appendTag)(r,s,n),(0,t.appendTag)(a,r,d,i,c,p,u),(0,t.appendTag)(o,a)}),0===e.length){var a=(0,t.createTag)("p","empty-message","Currently there are no tasks to do");(0,t.appendTag)(o,a)}}function u(){var e=r.cards.filter(function(e){return"in_progress"===e.status&&"true"===e.active});if(d.innerHTML="",e.forEach(function(e){var a=(0,t.createTag)("form","in-progress");a.classList.add("task"),a.setAttribute("data-id",e.id);var r=(0,t.createTag)("div","task__btn"),s=(0,t.createButton)("task__btn-back","","Back");s.classList.add("btn");var n=(0,t.createButton)("task__btn-complete","","Complete");n.classList.add("btn");var o=(0,t.createTag)("p","task__title","Title"),i=(0,t.createTag)("p","task__description","Description"),c=(0,t.createTag)("p","task__user","User"),p=(0,t.createTag)("date","task__date","Date");_("in_progress",e,o,i,c,p),(0,t.appendTag)(r,s,n),(0,t.appendTag)(a,r,o,i,c,p),(0,t.appendTag)(d,a)}),0===e.length){var a=(0,t.createTag)("p","empty-message","Currently there are no tasks in progress");(0,t.appendTag)(d,a)}}function l(){var e=r.cards.filter(function(e){return"done"===e.status&&"true"===e.active});if(i.innerHTML="",e.forEach(function(e){var a=(0,t.createTag)("form","task_done");a.classList.add("task"),a.setAttribute("data-id",e.id);var r=(0,t.createTag)("div","task__btn"),s=(0,t.createButton)("task__btn-delete","","Delete");s.classList.add("btn");var n=(0,t.createTag)("p","task__title","Title"),o=(0,t.createTag)("p","task__description","Description"),d=(0,t.createTag)("p","task__user","User"),c=(0,t.createTag)("date","task__date","Date");_("done",e,n,o,d,c),(0,t.appendTag)(r,s),(0,t.appendTag)(a,r,n,o,d,c),(0,t.appendTag)(i,a)}),0===e.length){var a=(0,t.createTag)("p","empty-message","Currently there are no done tasks");(0,t.appendTag)(i,a)}}function _(){var e=Array.prototype.slice.call(arguments),t=e[0],r=e[1],s=e[2],n=e[3],o=e[4],d=e[5];s&&(s.innerText=r.title),n&&(n.innerText=r.description),o&&(o.innerText=r.user),"todo"===t&&d&&(d.innerText=r.date),"in_progress"===t&&d&&(d.innerText=r.date_to_progress),"done"===t&&d&&(d.innerText=r.date_to_done),(0,a.setCountOfCards)()}function g(){var e=Array.prototype.slice.call(arguments),t=e[0],a=e[1],r=e[2],s=e[3];a&&(a.value=t.title),r&&(r.value=t.description),s&&(s.value=t.user)}function T(){r.cardFormWrapper.classList.toggle("overlay-active");var e=document.querySelector(".task__edit");e.querySelector(".task__edit-title").value="",e.querySelector(".task__edit-description").value=""}function v(e){var t=e.closest(".board"),a=t.id,r=document.querySelector("#todo-header"),s=document.querySelector("#in-progress-header"),n=document.querySelector("#done-header");"board_todo"!==a&&r.closest(".board").classList.add("task-hidden"),"board_in-progress"!==a&&s.closest(".board").classList.add("task-hidden"),"board_done"!==a&&n.closest(".board").classList.add("task-hidden"),t.classList.toggle("task-hidden")}
},{"./create_tag.js":"SUSc","./additional.js":"Ra6s","./app.js":"Lent"}],"Lent":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.cards=exports.cardFormWrapper=exports.cardForm=void 0,exports.createObject=g;var e,t,r,a,o,n,s,d,c,i=require("./display.js"),l=require("./additional.js");function u(e,t){e&&localStorage.setItem("cards",JSON.stringify(e)),t&&localStorage.setItem("id",t)}function g(){var e=Array.prototype.slice.call(arguments);return{id:e[0],title:e[1],description:e[2],user:e[3],date:e[4],status:"todo",active:"true"}}exports.cards=e,t=localStorage.getItem("id")?localStorage.getItem("id"):0,localStorage.getItem("cards")?exports.cards=e=JSON.parse(localStorage.getItem("cards")):exports.cards=e=[],document.addEventListener("DOMContentLoaded",function(){(0,i.displayTime)(l.getTime),(0,i.renderTodo)(),(0,i.renderInProgress)(),(0,i.renderDone)()},!1);var _=document.querySelector(".board-wrapper"),m=document.querySelector(".done-wrapper"),p=document.querySelector(".overlay");exports.cardFormWrapper=p;var v=document.querySelector(".task__edit");exports.cardForm=v;var f=document.querySelector(".task__edit-confirm"),y=document.querySelector(".task__edit-cancel"),k=document.querySelector(".overlay-warning"),S=document.querySelector(".warning__confirm"),q=document.querySelector(".warning__cancel");function w(){if(b(v),s&&d){t++;var r=(0,l.getDate)(),a=g(t,s,d,c,r);e.push(a),u(e,t),(0,i.closeEditForm)()}}function b(){s=v.querySelector(".task__edit-title").value,d=v.querySelector(".task__edit-description").value,c=v.querySelector(".task__edit-user").value}function x(t){a="edit",o=t.closest(".task_to-do"),n=o.getAttribute("data-id");var r=v.querySelector(".task__edit-title"),s=v.querySelector(".task__edit-description"),d=v.querySelector(".task__edit-user");e.forEach(function(e){e.id==n&&((0,i.getCardData)(e,r,s,d),p.classList.toggle("overlay-active"))})}function E(t,r){var a=t.closest(r).getAttribute("data-id");e.forEach(function(e){e.id==a&&(e.active="false",e.date_deleted=(0,l.getDate)())})}function L(t){var r=t.closest(".task_to-do").getAttribute("data-id");e.forEach(function(e){e.id==r&&(e.status="in_progress",e.date_to_progress=(0,l.getDate)())})}function D(t){var r=t.closest(".in-progress").getAttribute("data-id");e.forEach(function(e){e.id==r&&(e.status="todo",e.date_to_todo=(0,l.getDate)())})}function h(t){var r=t.closest(".in-progress").getAttribute("data-id");e.forEach(function(e){e.id==r&&(e.status="done",e.date_to_done=(0,l.getDate)())})}function T(){b(o);var t=(0,l.getDate)();s&&d&&e.forEach(function(r){r.id==n&&(r.title=s,r.description=d,r.user=c,r.date_edit=t,u(e),(0,i.closeEditForm)())})}_.addEventListener("click",function(e){var t=e.target;t.className.includes("board__header")&&(0,i.boardDisplay)(t),t.className.includes("board__add-todo")&&(a="add",(0,i.getCardData)(),p.classList.toggle("overlay-active")),t.className.includes("board__delete-all")&&(k.classList.toggle("warning-active"),document.querySelector(".warning__text-description").innerText="Do you want to delete all tasks?",r=t)}),f.addEventListener("click",function(){"add"===a&&w(),"edit"===a&&T(),(0,i.renderTodo)()}),i.todoWrapper.addEventListener("click",function(t){var a=t.target;(a.className.includes("task__btn-edit")&&x(a),a.className.includes("task__btn-delete")&&(k.classList.toggle("warning-active"),document.querySelector(".warning__text-description").innerText="Do you want to delete the current task?",r=a),a.className.includes("to-progress"))&&((0,l.calcCountTasksInProgress)()<6?(L(a),u(e),(0,i.renderTodo)(),(0,i.renderInProgress)()):(k.classList.toggle("warning-active"),document.querySelector(".warning__confirm").hidden=!0,document.querySelector(".warning__text-description").innerText="There are many tasks in progress. Complete the task and try again"))}),i.inProgressWrapper.addEventListener("click",function(t){var r=t.target;r.className.includes("task__btn-back")&&D(r),r.className.includes("task__btn-complete")&&h(r),u(e),(0,i.renderTodo)(),(0,i.renderInProgress)(),(0,i.renderDone)()}),y.addEventListener("click",function(){(0,i.closeEditForm)()}),m.addEventListener("click",function(e){var t=e.target;r=t,t.className.includes("task__btn-delete")&&(k.classList.toggle("warning-active"),document.querySelector(".warning__text-description").innerText="Do you want to delete the current task?")}),S.addEventListener("click",function(){k.classList.toggle("warning-active"),r.closest(".task_done")&&(E(r,".task_done"),u(e),(0,i.renderDone)()),r.closest(".task_to-do")&&(E(r,".task_to-do"),u(e),(0,i.renderTodo)()),r.className.includes("board__delete-all")&&(exports.cards=e=[],u(e),(0,i.renderTodo)(),(0,i.renderInProgress)(),(0,i.renderDone)(),(0,l.setCountOfCards)())}),q.addEventListener("click",function(){k.classList.toggle("warning-active"),document.querySelector(".warning__confirm").hidden=!1});
},{"./display.js":"oqhb","./additional.js":"Ra6s"}]},{},["Lent"], null)
//# sourceMappingURL=app.5bbd27a2.js.map