(function(){const b=document.createElement("link").relList;if(b&&b.supports&&b.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function c(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=c(o);fetch(o.href,l)}})();function T(m){throw new Error('Could not dynamically require "'+m+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var P={},K={get exports(){return P},set exports(m){P=m}},C={},U={get exports(){return C},set exports(m){C=m}},B;function W(){if(B)return C;B=1;function m(){}return m.prototype={on:function(b,c,s){var o=this.e||(this.e={});return(o[b]||(o[b]=[])).push({fn:c,ctx:s}),this},once:function(b,c,s){var o=this;function l(){o.off(b,l),c.apply(s,arguments)}return l._=c,this.on(b,l,s)},emit:function(b){var c=[].slice.call(arguments,1),s=((this.e||(this.e={}))[b]||[]).slice(),o=0,l=s.length;for(o;o<l;o++)s[o].fn.apply(s[o].ctx,c);return this},off:function(b,c){var s=this.e||(this.e={}),o=s[b],l=[];if(o&&c)for(var n=0,p=o.length;n<p;n++)o[n].fn!==c&&o[n].fn._!==c&&l.push(o[n]);return l.length?s[b]=l:delete s[b],this}},U.exports=m,C.TinyEmitter=m,C}/**
 * Droppy - v1.1.1
 * Pure JavaScript multi-level drop-down menu.
 * By OutlawPlz, @license GPL-3.0.
 * https://github.com/OutlawPlz/droppy.git
 */(function(m,b){"document"in self&&(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(c){if("Element"in c){var s="classList",o="prototype",l=c.Element[o],n=Object,p=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},f=Array[o].indexOf||function(u){for(var d=0,L=this.length;d<L;d++)if(d in this&&this[d]===u)return d;return-1},a=function(u,d){this.name=u,this.code=DOMException[u],this.message=d},g=function(u,d){if(d==="")throw new a("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(d))throw new a("INVALID_CHARACTER_ERR","String contains an invalid character");return f.call(u,d)},E=function(u){for(var d=p.call(u.getAttribute("class")||""),L=d?d.split(/\s+/):[],w=0,O=L.length;w<O;w++)this.push(L[w]);this._updateClassName=function(){u.setAttribute("class",this.toString())}},y=E[o]=[],A=function(){return new E(this)};if(a[o]=Error[o],y.item=function(u){return this[u]||null},y.contains=function(u){return u+="",g(this,u)!==-1},y.add=function(){var u=arguments,d=0,L=u.length,w,O=!1;do w=u[d]+"",g(this,w)===-1&&(this.push(w),O=!0);while(++d<L);O&&this._updateClassName()},y.remove=function(){var u=arguments,d=0,L=u.length,w,O=!1,x;do for(w=u[d]+"",x=g(this,w);x!==-1;)this.splice(x,1),O=!0,x=g(this,w);while(++d<L);O&&this._updateClassName()},y.toggle=function(u,d){u+="";var L=this.contains(u),w=L?d!==!0&&"remove":d!==!1&&"add";return w&&this[w](u),d===!0||d===!1?d:!L},y.toString=function(){return this.join(" ")},n.defineProperty){var N={get:A,enumerable:!0,configurable:!0};try{n.defineProperty(l,s,N)}catch(u){u.number===-2146823252&&(N.enumerable=!1,n.defineProperty(l,s,N))}}else n[o].__defineGetter__&&l.__defineGetter__(s,A)}}(self):function(){var c=document.createElement("_");if(c.classList.add("c1","c2"),!c.classList.contains("c2")){var s=function(l){var n=DOMTokenList.prototype[l];DOMTokenList.prototype[l]=function(p){var f,a=arguments.length;for(f=0;f<a;f++)p=arguments[f],n.call(this,p)}};s("add"),s("remove")}if(c.classList.toggle("c3",!1),c.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(l,n){return 1 in arguments&&!this.contains(l)==!n?n:o.call(this,l)}}c=null}()),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(c){for(var s=(this.document||this.ownerDocument).querySelectorAll(c),o=s.length;--o>=0&&s.item(o)!==this;);return o>-1}),function(c){m.exports=c()}(function(){return function c(s,o,l){function n(a,g){if(!o[a]){if(!s[a]){var E=typeof T=="function"&&T;if(!g&&E)return E(a,!0);if(p)return p(a,!0);var y=new Error("Cannot find module '"+a+"'");throw y.code="MODULE_NOT_FOUND",y}var A=o[a]={exports:{}};s[a][0].call(A.exports,function(N){var u=s[a][1][N];return n(u||N)},A,A.exports,c,s,o,l)}return o[a].exports}for(var p=typeof T=="function"&&T,f=0;f<l.length;f++)n(l[f]);return n}({1:[function(c,s,o){function l(){}l.prototype={on:function(n,p,f){var a=this.e||(this.e={});return(a[n]||(a[n]=[])).push({fn:p,ctx:f}),this},once:function(n,p,f){var a=this;function g(){a.off(n,g),p.apply(f,arguments)}return g._=p,this.on(n,g,f)},emit:function(n){var p=[].slice.call(arguments,1),f=((this.e||(this.e={}))[n]||[]).slice(),a=0,g=f.length;for(a;a<g;a++)f[a].fn.apply(f[a].ctx,p);return this},off:function(n,p){var f=this.e||(this.e={}),a=f[n],g=[];if(a&&p)for(var E=0,y=a.length;E<y;E++)a[E].fn!==p&&a[E].fn._!==p&&g.push(a[E]);return g.length?f[n]=g:delete f[n],this}},s.exports=l},{}]},{},[1])(1)}),function(c,s){m.exports=s(W())}(window,function(c){var s=window.console,o=[],l=N();function n(e,t,r){if(n.prototype.getInstance(e)){s&&s.error("Droppy: another Droppy instance was found for this element.",e);return}if(e.nodeType!==Node.ELEMENT_NODE){s&&s.error("Droppy: the given element is not valid.",e);return}this.element=e;var i=this.element.querySelector(t.dropdownSelector);if(!i){s&&s.error("Droppy: the given dropdownSelector returns no value.",t.dropdownSelector);return}var h=this.element.querySelector(t.parentSelector);if(!h){s&&s.error("Droppy: the given parentSelector returns no value.",t.parentSelector);return}var v=this.element.querySelector(t.triggerSelector);if(!v){s&&s.error("Droppy: the given triggerSelector returns no value.",t.triggerSelector);return}var _={parentSelector:"li",dropdownSelector:"li > ul",triggerSelector:"a",closeOthers:!0,clickOutToClose:!0,clickEscToClose:!0,animationIn:"",animationOut:"",preventDefault:!0};t&&typeof t=="object"?this.options=f(_,t):this.options=_;var D={beforeOpen:null,afterOpen:null,beforeClose:null,afterClose:null,beforeOpenAll:null,afterOpenAll:null,beforeCloseAll:null,afterCloseAll:null,beforeInit:null,afterInit:null,beforeDestroy:null,afterDestroy:null};r&&typeof r=="object"?this.callbacks=f(D,r):this.callbacks=D,this.init()}n.prototype=Object.create(c.prototype),n.prototype.constructor=n;function p(){this.dropdown="",this.parent="",this.trigger="",this.parentNodes=[],this.descendantNodes=[],this.level=0,this.open=!1}n.prototype.init=function(){if(!n.prototype.isInitialized(this)){typeof this.callbacks.beforeInit=="function"&&this.callbacks.beforeInit(),this.tree=E(this.element,this.options.dropdownSelector,this.options.parentSelector,this.options.triggerSelector),this.element.classList.add("droppy");for(var e=this.tree.length,t;e--,t=this.tree[e];)t.dropdown.classList.add("droppy__drop"),t.parent.classList.add("droppy__parent"),t.trigger.classList.add("droppy__trigger"),t.trigger.setAttribute("aria-haspopup","true"),t.trigger.setAttribute("aria-expanded","false");o.length===0&&(document.body.addEventListener("click",M),document.body.addEventListener("keyup",R)),o.push(this),typeof this.callbacks.afterInit=="function"&&this.callbacks.afterInit(),this.emit("init",{droppy:this})}},n.prototype.destroy=function(){if(n.prototype.isInitialized(this)){typeof this.callbacks.beforeDestroy=="function"&&this.callbacks.beforeDestroy(),this.element.classList.remove("droppy");for(var e=this.tree.length,t;e--,t=this.tree[e];)t.dropdown.classList.remove("droppy__drop","droppy__drop--active"),t.parent.classList.remove("droppy__parent"),t.trigger.classList.remove("droppy__trigger"),t.trigger.removeAttribute("aria-haspopup"),t.trigger.removeAttribute("aria-expanded");delete this.tree,o.length===1&&(document.body.removeEventListener("click",M),document.body.removeEventListener("keyup",R));for(var r=o.length,i;r--,i=o[r];)i===this&&o.splice(r,1);typeof this.callbacks.afterDestroy=="function"&&this.callbacks.afterDestroy(),this.emit("destroy",{droppy:this})}},n.prototype.open=function(e,t){var r;if(e instanceof p?r=e:r=y("dropdown",e,this.tree),!r.open){if(typeof this.callbacks.beforeOpen=="function"&&this.callbacks.beforeOpen(),this.options.closeOthers)for(var i=A("level",r.level,this.tree),h=i.length,v;h--,v=i[h];)v.open&&d(v,!0,this.options.animationOut);u(r,t,this.options.animationIn),typeof this.callbacks.afterOpen=="function"&&this.callbacks.afterOpen(),this.emit("open",{droppy:this,dropdown:r})}},n.prototype.close=function(e,t){var r;e instanceof p?r=e:r=y("dropdown",e,this.tree),r.open&&(typeof this.callbacks.beforeClose=="function"&&this.callbacks.beforeClose(),d(r,t,this.options.animationOut),typeof this.callbacks.afterClose=="function"&&this.callbacks.afterClose(),this.emit("close",{droppy:this,dropdown:r}))},n.prototype.toggle=function(e,t){var r;e instanceof p?r=e:r=y("dropdown",e,this.tree),r.open?this.close(r,t):this.open(r,t)},n.prototype.closeAll=function(){var e=y("open",!0,this.tree);if(e){typeof this.callbacks.beforeCloseAll=="function"&&this.callbacks.beforeCloseAll();for(var t=A("level",0,this.tree),r=t.length,i;r--,i=t[r];)i.open&&d(i,!0,this.options.animationOut);typeof this.callbacks.afterCloseAll=="function"&&this.callbacks.afterCloseAll(),this.emit("closeAll",{droppy:this})}},n.prototype.openAll=function(){var e=y("open",!1,this.tree);if(e){typeof this.callbacks.beforeOpenAll=="function"&&this.callbacks.beforeOpenAll();for(var t=A("level",0,this.tree),r=t.length,i;r--,i=t[r];){if(!i.open){u(i,!0,this.options.animationIn);continue}for(var h=0,v=i.descendantNodes.length,_;_=i.descendantNodes[h];++h)_.open||u(_,!0,this.options.animationIn)}typeof this.callbacks.afterOpenAll=="function"&&this.callbacks.afterOpenAll(),this.emit("openAll",{droppy:this})}},n.prototype.isInitialized=function(e){for(var t=o.length,r;t--,r=o[t];)if(e===r)return!0;return!1},n.prototype.getInstance=function(e){for(var t=o.length,r;t--,r=o[t];)if(r.element===e)return r};function f(e,t){var r;for(r in t)e.hasOwnProperty(r)&&(e[r]=t[r]);return e}function a(e,t,r,i){for(i||(e=e.parentNode);e!==t&&e!==document.body;){if(e.matches(r))return e;e=e.parentNode}}function g(e,t,r,i){i||(e=e.parentNode);for(var h=[];e!==t&&e!==document.body;)e.matches(r)&&h.push(e),e=e.parentNode;return h}function E(e,t,r,i){for(var h=Array.prototype.slice.call(e.querySelectorAll(t)),v=[],_=0,D=h.length,k;k=h[_];_++){var S=new p;S.dropdown=k,S.parent=a(k,e,r,!1),S.trigger=S.parent.querySelector(i);for(var z=g(k,e,t,!1),q,H=z.length,G;H--,G=z[H];)q=y("dropdown",G,v),S.parentNodes.push(q),q.descendantNodes.push(S);S.level=S.parentNodes.length,v.push(S)}return v}function y(e,t,r){for(var i=r.length,h;i--,h=r[i];)if(h[e]===t)return h}function A(e,t,r){for(var i=[],h=r.length,v;h--,v=r[h];)v[e]===t&&i.push(v);return i}function N(){var e=!1,t=document.createElement("div"),r="Webkit";return t.style.animationName!==void 0&&(e=!0),e||t.style[r+"AnimationName"]!==void 0&&(e=!0),e}function u(e,t,r){typeof t!="boolean"&&(t=!1);for(var i=e,h=[e],v=e.parentNodes.length,_;v--,_=e.parentNodes[v];)_.open||(h.push(_),i=_);for(h=h.reverse(),l&&r&&L(i,r),v=h.length,e;v--,e=h[v];)O(e,t)}function d(e,t,r){typeof t!="boolean"&&(t=!0),l&&r?w(e,t,r):x(e,t)}function L(e,t){e.dropdown.addEventListener("animationend",function r(){e.dropdown.classList.remove(t),e.dropdown.removeEventListener("animationend",r)}),e.dropdown.classList.add(t)}function w(e,t,r){e.dropdown.addEventListener("animationend",function i(){e.dropdown.classList.remove(r),x(e,t),e.dropdown.removeEventListener("animationend",i)}),e.dropdown.classList.add(r)}function O(e,t){if(t)for(var r=e.descendantNodes.length,i;r--,i=e.descendantNodes[r];)i.open||(i.dropdown.classList.add("droppy__drop--active"),i.trigger.setAttribute("aria-expanded","true"),i.open=!0);e.dropdown.classList.add("droppy__drop--active"),e.trigger.setAttribute("aria-expanded","true"),e.open=!0}function x(e,t){if(e.dropdown.classList.remove("droppy__drop--active"),e.trigger.setAttribute("aria-expanded","false"),e.open=!1,t)for(var r=e.descendantNodes.length,i;r--,i=e.descendantNodes[r];)i.open&&(i.dropdown.classList.remove("droppy__drop--active"),i.trigger.setAttribute("aria-expanded","false"),i.open=!1)}function M(e){for(var t,r,i,h=o.length,v;h--,v=o[h];){if(!v.element.contains(e.target)&&v.options.clickOutToClose){v.closeAll();continue}t=a(e.target,v.element,".droppy__trigger",!0),t?i=y("trigger",t,v.tree):i=!1,i&&(r=e.shiftKey?!0:void 0,v.toggle(i,r),v.options.preventDefault&&!e.ctrlKey&&e.preventDefault())}}function R(e){if(e.which===27)for(var t=o.length,r;t--,r=o[t];)r.options.clickEscToClose&&r.closeAll()}for(var F=document.querySelectorAll("[data-droppy]"),j=F.length,I;j--,I=F[j];)new n(I,JSON.parse(I.getAttribute("data-droppy")));return n})})(K);const J=P;function V(){const m=X(),b=m.querySelector(".sidebar_toggler"),c=m.querySelector(".navbar");c.querySelector(".navbar__inner").addEventListener("click",g=>{g.stopPropagation()});const o=()=>{document.body.style.height="100dvh",document.body.style.overflow="hidden",c.classList.add("navbar--shown")},l=()=>{document.body.style.height="",document.body.style.overflow="",c.classList.remove("navbar--shown")};b.addEventListener("click",g=>{g.stopPropagation(),c.classList.contains("navbar--shown")?l():o()}),m.addEventListener("click",g=>{l()});const n=m.querySelector(".dropdown-menu");n.querySelector("li > ul").classList.add("animate__animated","animate__superfast");const p=new J(n,{parentSelector:"li",dropdownSelector:"li > ul",triggerSelector:"a",closeOthers:!0,clickOutToClose:!0,clickEscToClose:!0,preventDefault:!0,animationIn:"animate__fadeIn",animationOut:"animate__fadeOut"}),f=n.querySelector(".droppy__drop");let a=null;n.addEventListener("mouseover",()=>{clearTimeout(a),p.open(f)}),n.addEventListener("mouseleave",()=>{a=setTimeout(()=>{p.close(f)},1e3)}),n.addEventListener("focusout",()=>{clearTimeout(a),p.close(f)}),f.addEventListener("mouseover",()=>{clearTimeout(a)}),f.addEventListener("mouseleave",()=>{clearTimeout(a),p.close(f)}),f.addEventListener("focusout",()=>{clearTimeout(a),p.close(f)}),document.querySelector("header.header").prepend(m)}function X(){const m=document.createElement("div");return m.innerHTML=`
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
                    <li>
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
                                        <li><a href="/awards/" style="display: none">Сертификаты и награды</a></li>
                                        <li><a href="/warranty/">Гарантии</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </li>
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
      
    `,m.firstElementChild}function Y(){const m=document.createElement("div");return m.innerHTML=`
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
    `,m.firstElementChild}function $(){document.querySelector("body").append(Y())}document.addEventListener("DOMContentLoaded",()=>{V(),$()});
