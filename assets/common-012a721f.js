(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(o){if(o.ep)return;o.ep=!0;const a=c(o);fetch(o.href,a)}})();function T(g){throw new Error('Could not dynamically require "'+g+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var P={},K={get exports(){return P},set exports(g){P=g}},C={},U={get exports(){return C},set exports(g){C=g}},B;function W(){if(B)return C;B=1;function g(){}return g.prototype={on:function(b,c,s){var o=this.e||(this.e={});return(o[b]||(o[b]=[])).push({fn:c,ctx:s}),this},once:function(b,c,s){var o=this;function a(){o.off(b,a),c.apply(s,arguments)}return a._=c,this.on(b,a,s)},emit:function(b){var c=[].slice.call(arguments,1),s=((this.e||(this.e={}))[b]||[]).slice(),o=0,a=s.length;for(o;o<a;o++)s[o].fn.apply(s[o].ctx,c);return this},off:function(b,c){var s=this.e||(this.e={}),o=s[b],a=[];if(o&&c)for(var n=0,p=o.length;n<p;n++)o[n].fn!==c&&o[n].fn._!==c&&a.push(o[n]);return a.length?s[b]=a:delete s[b],this}},U.exports=g,C.TinyEmitter=g,C}/**
 * Droppy - v1.1.1
 * Pure JavaScript multi-level drop-down menu.
 * By OutlawPlz, @license GPL-3.0.
 * https://github.com/OutlawPlz/droppy.git
 */(function(g,b){"document"in self&&(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(c){if("Element"in c){var s="classList",o="prototype",a=c.Element[o],n=Object,p=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},f=Array[o].indexOf||function(u){for(var d=0,L=this.length;d<L;d++)if(d in this&&this[d]===u)return d;return-1},l=function(u,d){this.name=u,this.code=DOMException[u],this.message=d},m=function(u,d){if(d==="")throw new l("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(d))throw new l("INVALID_CHARACTER_ERR","String contains an invalid character");return f.call(u,d)},w=function(u){for(var d=p.call(u.getAttribute("class")||""),L=d?d.split(/\s+/):[],_=0,A=L.length;_<A;_++)this.push(L[_]);this._updateClassName=function(){u.setAttribute("class",this.toString())}},y=w[o]=[],O=function(){return new w(this)};if(l[o]=Error[o],y.item=function(u){return this[u]||null},y.contains=function(u){return u+="",m(this,u)!==-1},y.add=function(){var u=arguments,d=0,L=u.length,_,A=!1;do _=u[d]+"",m(this,_)===-1&&(this.push(_),A=!0);while(++d<L);A&&this._updateClassName()},y.remove=function(){var u=arguments,d=0,L=u.length,_,A=!1,N;do for(_=u[d]+"",N=m(this,_);N!==-1;)this.splice(N,1),A=!0,N=m(this,_);while(++d<L);A&&this._updateClassName()},y.toggle=function(u,d){u+="";var L=this.contains(u),_=L?d!==!0&&"remove":d!==!1&&"add";return _&&this[_](u),d===!0||d===!1?d:!L},y.toString=function(){return this.join(" ")},n.defineProperty){var x={get:O,enumerable:!0,configurable:!0};try{n.defineProperty(a,s,x)}catch(u){u.number===-2146823252&&(x.enumerable=!1,n.defineProperty(a,s,x))}}else n[o].__defineGetter__&&a.__defineGetter__(s,O)}}(self):function(){var c=document.createElement("_");if(c.classList.add("c1","c2"),!c.classList.contains("c2")){var s=function(a){var n=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(p){var f,l=arguments.length;for(f=0;f<l;f++)p=arguments[f],n.call(this,p)}};s("add"),s("remove")}if(c.classList.toggle("c3",!1),c.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,n){return 1 in arguments&&!this.contains(a)==!n?n:o.call(this,a)}}c=null}()),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(c){for(var s=(this.document||this.ownerDocument).querySelectorAll(c),o=s.length;--o>=0&&s.item(o)!==this;);return o>-1}),function(c){g.exports=c()}(function(){return function c(s,o,a){function n(l,m){if(!o[l]){if(!s[l]){var w=typeof T=="function"&&T;if(!m&&w)return w(l,!0);if(p)return p(l,!0);var y=new Error("Cannot find module '"+l+"'");throw y.code="MODULE_NOT_FOUND",y}var O=o[l]={exports:{}};s[l][0].call(O.exports,function(x){var u=s[l][1][x];return n(u||x)},O,O.exports,c,s,o,a)}return o[l].exports}for(var p=typeof T=="function"&&T,f=0;f<a.length;f++)n(a[f]);return n}({1:[function(c,s,o){function a(){}a.prototype={on:function(n,p,f){var l=this.e||(this.e={});return(l[n]||(l[n]=[])).push({fn:p,ctx:f}),this},once:function(n,p,f){var l=this;function m(){l.off(n,m),p.apply(f,arguments)}return m._=p,this.on(n,m,f)},emit:function(n){var p=[].slice.call(arguments,1),f=((this.e||(this.e={}))[n]||[]).slice(),l=0,m=f.length;for(l;l<m;l++)f[l].fn.apply(f[l].ctx,p);return this},off:function(n,p){var f=this.e||(this.e={}),l=f[n],m=[];if(l&&p)for(var w=0,y=l.length;w<y;w++)l[w].fn!==p&&l[w].fn._!==p&&m.push(l[w]);return m.length?f[n]=m:delete f[n],this}},s.exports=a},{}]},{},[1])(1)}),function(c,s){g.exports=s(W())}(window,function(c){var s=window.console,o=[],a=x();function n(e,t,r){if(n.prototype.getInstance(e)){s&&s.error("Droppy: another Droppy instance was found for this element.",e);return}if(e.nodeType!==Node.ELEMENT_NODE){s&&s.error("Droppy: the given element is not valid.",e);return}this.element=e;var i=this.element.querySelector(t.dropdownSelector);if(!i){s&&s.error("Droppy: the given dropdownSelector returns no value.",t.dropdownSelector);return}var h=this.element.querySelector(t.parentSelector);if(!h){s&&s.error("Droppy: the given parentSelector returns no value.",t.parentSelector);return}var v=this.element.querySelector(t.triggerSelector);if(!v){s&&s.error("Droppy: the given triggerSelector returns no value.",t.triggerSelector);return}var E={parentSelector:"li",dropdownSelector:"li > ul",triggerSelector:"a",closeOthers:!0,clickOutToClose:!0,clickEscToClose:!0,animationIn:"",animationOut:"",preventDefault:!0};t&&typeof t=="object"?this.options=f(E,t):this.options=E;var D={beforeOpen:null,afterOpen:null,beforeClose:null,afterClose:null,beforeOpenAll:null,afterOpenAll:null,beforeCloseAll:null,afterCloseAll:null,beforeInit:null,afterInit:null,beforeDestroy:null,afterDestroy:null};r&&typeof r=="object"?this.callbacks=f(D,r):this.callbacks=D,this.init()}n.prototype=Object.create(c.prototype),n.prototype.constructor=n;function p(){this.dropdown="",this.parent="",this.trigger="",this.parentNodes=[],this.descendantNodes=[],this.level=0,this.open=!1}n.prototype.init=function(){if(!n.prototype.isInitialized(this)){typeof this.callbacks.beforeInit=="function"&&this.callbacks.beforeInit(),this.tree=w(this.element,this.options.dropdownSelector,this.options.parentSelector,this.options.triggerSelector),this.element.classList.add("droppy");for(var e=this.tree.length,t;e--,t=this.tree[e];)t.dropdown.classList.add("droppy__drop"),t.parent.classList.add("droppy__parent"),t.trigger.classList.add("droppy__trigger"),t.trigger.setAttribute("aria-haspopup","true"),t.trigger.setAttribute("aria-expanded","false");o.length===0&&(document.body.addEventListener("click",M),document.body.addEventListener("keyup",R)),o.push(this),typeof this.callbacks.afterInit=="function"&&this.callbacks.afterInit(),this.emit("init",{droppy:this})}},n.prototype.destroy=function(){if(n.prototype.isInitialized(this)){typeof this.callbacks.beforeDestroy=="function"&&this.callbacks.beforeDestroy(),this.element.classList.remove("droppy");for(var e=this.tree.length,t;e--,t=this.tree[e];)t.dropdown.classList.remove("droppy__drop","droppy__drop--active"),t.parent.classList.remove("droppy__parent"),t.trigger.classList.remove("droppy__trigger"),t.trigger.removeAttribute("aria-haspopup"),t.trigger.removeAttribute("aria-expanded");delete this.tree,o.length===1&&(document.body.removeEventListener("click",M),document.body.removeEventListener("keyup",R));for(var r=o.length,i;r--,i=o[r];)i===this&&o.splice(r,1);typeof this.callbacks.afterDestroy=="function"&&this.callbacks.afterDestroy(),this.emit("destroy",{droppy:this})}},n.prototype.open=function(e,t){var r;if(e instanceof p?r=e:r=y("dropdown",e,this.tree),!r.open){if(typeof this.callbacks.beforeOpen=="function"&&this.callbacks.beforeOpen(),this.options.closeOthers)for(var i=O("level",r.level,this.tree),h=i.length,v;h--,v=i[h];)v.open&&d(v,!0,this.options.animationOut);u(r,t,this.options.animationIn),typeof this.callbacks.afterOpen=="function"&&this.callbacks.afterOpen(),this.emit("open",{droppy:this,dropdown:r})}},n.prototype.close=function(e,t){var r;e instanceof p?r=e:r=y("dropdown",e,this.tree),r.open&&(typeof this.callbacks.beforeClose=="function"&&this.callbacks.beforeClose(),d(r,t,this.options.animationOut),typeof this.callbacks.afterClose=="function"&&this.callbacks.afterClose(),this.emit("close",{droppy:this,dropdown:r}))},n.prototype.toggle=function(e,t){var r;e instanceof p?r=e:r=y("dropdown",e,this.tree),r.open?this.close(r,t):this.open(r,t)},n.prototype.closeAll=function(){var e=y("open",!0,this.tree);if(e){typeof this.callbacks.beforeCloseAll=="function"&&this.callbacks.beforeCloseAll();for(var t=O("level",0,this.tree),r=t.length,i;r--,i=t[r];)i.open&&d(i,!0,this.options.animationOut);typeof this.callbacks.afterCloseAll=="function"&&this.callbacks.afterCloseAll(),this.emit("closeAll",{droppy:this})}},n.prototype.openAll=function(){var e=y("open",!1,this.tree);if(e){typeof this.callbacks.beforeOpenAll=="function"&&this.callbacks.beforeOpenAll();for(var t=O("level",0,this.tree),r=t.length,i;r--,i=t[r];){if(!i.open){u(i,!0,this.options.animationIn);continue}for(var h=0,v=i.descendantNodes.length,E;E=i.descendantNodes[h];++h)E.open||u(E,!0,this.options.animationIn)}typeof this.callbacks.afterOpenAll=="function"&&this.callbacks.afterOpenAll(),this.emit("openAll",{droppy:this})}},n.prototype.isInitialized=function(e){for(var t=o.length,r;t--,r=o[t];)if(e===r)return!0;return!1},n.prototype.getInstance=function(e){for(var t=o.length,r;t--,r=o[t];)if(r.element===e)return r};function f(e,t){var r;for(r in t)e.hasOwnProperty(r)&&(e[r]=t[r]);return e}function l(e,t,r,i){for(i||(e=e.parentNode);e!==t&&e!==document.body;){if(e.matches(r))return e;e=e.parentNode}}function m(e,t,r,i){i||(e=e.parentNode);for(var h=[];e!==t&&e!==document.body;)e.matches(r)&&h.push(e),e=e.parentNode;return h}function w(e,t,r,i){for(var h=Array.prototype.slice.call(e.querySelectorAll(t)),v=[],E=0,D=h.length,k;k=h[E];E++){var S=new p;S.dropdown=k,S.parent=l(k,e,r,!1),S.trigger=S.parent.querySelector(i);for(var z=m(k,e,t,!1),q,H=z.length,G;H--,G=z[H];)q=y("dropdown",G,v),S.parentNodes.push(q),q.descendantNodes.push(S);S.level=S.parentNodes.length,v.push(S)}return v}function y(e,t,r){for(var i=r.length,h;i--,h=r[i];)if(h[e]===t)return h}function O(e,t,r){for(var i=[],h=r.length,v;h--,v=r[h];)v[e]===t&&i.push(v);return i}function x(){var e=!1,t=document.createElement("div"),r="Webkit";return t.style.animationName!==void 0&&(e=!0),e||t.style[r+"AnimationName"]!==void 0&&(e=!0),e}function u(e,t,r){typeof t!="boolean"&&(t=!1);for(var i=e,h=[e],v=e.parentNodes.length,E;v--,E=e.parentNodes[v];)E.open||(h.push(E),i=E);for(h=h.reverse(),a&&r&&L(i,r),v=h.length,e;v--,e=h[v];)A(e,t)}function d(e,t,r){typeof t!="boolean"&&(t=!0),a&&r?_(e,t,r):N(e,t)}function L(e,t){e.dropdown.addEventListener("animationend",function r(){e.dropdown.classList.remove(t),e.dropdown.removeEventListener("animationend",r)}),e.dropdown.classList.add(t)}function _(e,t,r){e.dropdown.addEventListener("animationend",function i(){e.dropdown.classList.remove(r),N(e,t),e.dropdown.removeEventListener("animationend",i)}),e.dropdown.classList.add(r)}function A(e,t){if(t)for(var r=e.descendantNodes.length,i;r--,i=e.descendantNodes[r];)i.open||(i.dropdown.classList.add("droppy__drop--active"),i.trigger.setAttribute("aria-expanded","true"),i.open=!0);e.dropdown.classList.add("droppy__drop--active"),e.trigger.setAttribute("aria-expanded","true"),e.open=!0}function N(e,t){if(e.dropdown.classList.remove("droppy__drop--active"),e.trigger.setAttribute("aria-expanded","false"),e.open=!1,t)for(var r=e.descendantNodes.length,i;r--,i=e.descendantNodes[r];)i.open&&(i.dropdown.classList.remove("droppy__drop--active"),i.trigger.setAttribute("aria-expanded","false"),i.open=!1)}function M(e){for(var t,r,i,h=o.length,v;h--,v=o[h];){if(!v.element.contains(e.target)&&v.options.clickOutToClose){v.closeAll();continue}t=l(e.target,v.element,".droppy__trigger",!0),t?i=y("trigger",t,v.tree):i=!1,i&&(r=e.shiftKey?!0:void 0,v.toggle(i,r),v.options.preventDefault&&!e.ctrlKey&&e.preventDefault())}}function R(e){if(e.which===27)for(var t=o.length,r;t--,r=o[t];)r.options.clickEscToClose&&r.closeAll()}for(var F=document.querySelectorAll("[data-droppy]"),j=F.length,I;j--,I=F[j];)new n(I,JSON.parse(I.getAttribute("data-droppy")));return n})})(K);const J=P;function V(){const g=X(),b=g.querySelector(".sidebar_toggler"),c=g.querySelector(".navbar");c.querySelector(".navbar__inner").addEventListener("click",w=>{w.stopPropagation()});const o=()=>{document.body.style.height="100dvh",document.body.style.overflow="hidden",c.classList.add("navbar--shown")},a=()=>{document.body.style.height="",document.body.style.overflow="",c.classList.remove("navbar--shown")};b.addEventListener("click",w=>{w.stopPropagation(),c.classList.contains("navbar--shown")?a():o()}),g.addEventListener("click",w=>{a()});const n=g.querySelector(".dropdown-menu");n.querySelector("li > ul").classList.add("animate__animated","animate__superfast");let p=!1;const f=new J(n,{parentSelector:"li",dropdownSelector:"li > ul",triggerSelector:"a",closeOthers:!0,clickOutToClose:!0,clickEscToClose:!0,preventDefault:!0,animationIn:"animate__fadeIn",animationOut:"animate__fadeOut"},{afterOpen:()=>{console.log("droppy is open"),p=!0},afterClose:()=>{console.log("droppy is closed"),p=!1}}),l=n.querySelector(".droppy__drop");let m=null;window.matchMedia("(max-width: 992px)").matches?n.addEventListener("click",()=>{clearTimeout(m),p&&f.close(l),p||f.open(l)}):n.addEventListener("mouseover",()=>{clearTimeout(m),f.open(l)}),n.addEventListener("mouseleave",()=>{m=setTimeout(()=>{f.close(l)},1e3)}),n.addEventListener("focusout",()=>{clearTimeout(m),f.close(l)}),l.addEventListener("mouseover",()=>{clearTimeout(m)}),l.addEventListener("mouseleave",()=>{clearTimeout(m),f.close(l)}),l.addEventListener("focusout",()=>{clearTimeout(m),f.close(l)}),document.querySelector("header.header").prepend(g)}function X(){const g=document.createElement("div");return g.innerHTML=`
        <div class="navbar-wrapper">
        <div class="mobile-navbar">
                <a class="navbar__logo" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>
            <div class="sidebar_toggler">
                <span></span>
                <span></span>
                <span></span>
             </div>
        </div>
        <nav class="navbar">
        <div class="container h-100">
          <div class="navbar__inner flex-column h-100 flex-lg-row justify-content-lg-between">
                <a class="navbar__logo mb-4 mb-lg-0" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>

                <ul class="navbar__menu mb-4 mb-lg-0 flex-column flex-grow-1 flex-lg-grow-0 flex-lg-row">
                    <li>
                        <a href="/">Главная</a>
                    </li>
                    <li>
                        <a href="/catalog/">Каталог</a>
                    </li>
                    <li>
                        <a href="/works/">Работы</a>
                    </li>
                    <li class="dropdown-menu-wrapper">
                        <nav class="dropdown-menu"> <!-- The Droppy's element -->
                            <ul class="menu">
                                <li> <!-- The parent selector "li" -->
                                    <a href="#">Клиенту <i>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/>
                                        </svg>
                                    </i>
                                    </a> <!-- The trigger selector "a" -->
                                    <ul class="menu"> <!-- The drop-down selector "li > ul" -->
                                        <li><a href="/payment/">Оплата и доставка</a></li>
                                        <li style="display: none"><a href="/awards/">Сертификаты и награды</a></li>
                                        <li><a href="/warranty/">Гарантии</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </li>
                    <li class="from-dropdown"><a href="/payment/">Оплата и доставка</a></li>
                    <li class="from-dropdown" style="display: none"><a href="/awards/">Сертификаты и награды</a></li>
                    <li class="from-dropdown"><a href="/warranty/">Гарантии</a></li>
                    <li>
                        <a href="/contacts/">Контакты</a>
                    </li>
                </ul>

            <a class="navbar__whatsapp mb-4 mb-lg-0" href="https://wa.me/+79265453632">
              <img src="/whatsapp.svg" style="height: 2.5em" alt="">
            </a>
          </div>
        </div>
      </nav>
</div>
      
    `,g.firstElementChild}function Y(){const g=document.createElement("div");return g.innerHTML=`
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg col-md footer__column">
                <a class="footer__logo" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>
                <a href="tel:+79181396538">+7(918) 139-65-38</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="#">Памятники</a>
                <a href="#">Мемориальные комплексы</a>
                <a href="#">Эксклюзивные работы</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/works/">Наши проекты</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/payment/">Оплата и доставка Гранитных памятников</a>
                <a href="/warranty/">Гарантии на Гранитные памятники</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/awards/" style="display: none">Сертификаты и награды Компании «Памятники на заказ»</a>
                <a href="/contacts/">Контакты компании «Памятники на заказ»</a>
              </div>
    
            </div>
          </div>
        </footer>
    `,g.firstElementChild}function $(){document.querySelector("body").append(Y())}document.addEventListener("DOMContentLoaded",()=>{V(),$()});
