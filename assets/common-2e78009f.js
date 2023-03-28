(function(){const g=document.createElement("link").relList;if(g&&g.supports&&g.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const n of l.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=a(o);fetch(o.href,l)}})();function T(m){throw new Error('Could not dynamically require "'+m+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var M={},K={get exports(){return M},set exports(m){M=m}},C={},U={get exports(){return C},set exports(m){C=m}},B;function J(){if(B)return C;B=1;function m(){}return m.prototype={on:function(g,a,i){var o=this.e||(this.e={});return(o[g]||(o[g]=[])).push({fn:a,ctx:i}),this},once:function(g,a,i){var o=this;function l(){o.off(g,l),a.apply(i,arguments)}return l._=a,this.on(g,l,i)},emit:function(g){var a=[].slice.call(arguments,1),i=((this.e||(this.e={}))[g]||[]).slice(),o=0,l=i.length;for(o;o<l;o++)i[o].fn.apply(i[o].ctx,a);return this},off:function(g,a){var i=this.e||(this.e={}),o=i[g],l=[];if(o&&a)for(var n=0,v=o.length;n<v;n++)o[n].fn!==a&&o[n].fn._!==a&&l.push(o[n]);return l.length?i[g]=l:delete i[g],this}},U.exports=m,C.TinyEmitter=m,C}/**
 * Droppy - v1.1.1
 * Pure JavaScript multi-level drop-down menu.
 * By OutlawPlz, @license GPL-3.0.
 * https://github.com/OutlawPlz/droppy.git
 */(function(m,g){"document"in self&&(!("classList"in document.createElement("_"))||document.createElementNS&&!("classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))?function(a){if("Element"in a){var i="classList",o="prototype",l=a.Element[o],n=Object,v=String[o].trim||function(){return this.replace(/^\s+|\s+$/g,"")},d=Array[o].indexOf||function(f){for(var u=0,L=this.length;u<L;u++)if(u in this&&this[u]===f)return u;return-1},c=function(f,u){this.name=f,this.code=DOMException[f],this.message=u},b=function(f,u){if(u==="")throw new c("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(u))throw new c("INVALID_CHARACTER_ERR","String contains an invalid character");return d.call(f,u)},E=function(f){for(var u=v.call(f.getAttribute("class")||""),L=u?u.split(/\s+/):[],_=0,O=L.length;_<O;_++)this.push(L[_]);this._updateClassName=function(){f.setAttribute("class",this.toString())}},y=E[o]=[],A=function(){return new E(this)};if(c[o]=Error[o],y.item=function(f){return this[f]||null},y.contains=function(f){return f+="",b(this,f)!==-1},y.add=function(){var f=arguments,u=0,L=f.length,_,O=!1;do _=f[u]+"",b(this,_)===-1&&(this.push(_),O=!0);while(++u<L);O&&this._updateClassName()},y.remove=function(){var f=arguments,u=0,L=f.length,_,O=!1,x;do for(_=f[u]+"",x=b(this,_);x!==-1;)this.splice(x,1),O=!0,x=b(this,_);while(++u<L);O&&this._updateClassName()},y.toggle=function(f,u){f+="";var L=this.contains(f),_=L?u!==!0&&"remove":u!==!1&&"add";return _&&this[_](f),u===!0||u===!1?u:!L},y.toString=function(){return this.join(" ")},n.defineProperty){var N={get:A,enumerable:!0,configurable:!0};try{n.defineProperty(l,i,N)}catch(f){f.number===-2146823252&&(N.enumerable=!1,n.defineProperty(l,i,N))}}else n[o].__defineGetter__&&l.__defineGetter__(i,A)}}(self):function(){var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var i=function(l){var n=DOMTokenList.prototype[l];DOMTokenList.prototype[l]=function(v){var d,c=arguments.length;for(d=0;d<c;d++)v=arguments[d],n.call(this,v)}};i("add"),i("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var o=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(l,n){return 1 in arguments&&!this.contains(l)==!n?n:o.call(this,l)}}a=null}()),Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(a){for(var i=(this.document||this.ownerDocument).querySelectorAll(a),o=i.length;--o>=0&&i.item(o)!==this;);return o>-1}),function(a){m.exports=a()}(function(){return function a(i,o,l){function n(c,b){if(!o[c]){if(!i[c]){var E=typeof T=="function"&&T;if(!b&&E)return E(c,!0);if(v)return v(c,!0);var y=new Error("Cannot find module '"+c+"'");throw y.code="MODULE_NOT_FOUND",y}var A=o[c]={exports:{}};i[c][0].call(A.exports,function(N){var f=i[c][1][N];return n(f||N)},A,A.exports,a,i,o,l)}return o[c].exports}for(var v=typeof T=="function"&&T,d=0;d<l.length;d++)n(l[d]);return n}({1:[function(a,i,o){function l(){}l.prototype={on:function(n,v,d){var c=this.e||(this.e={});return(c[n]||(c[n]=[])).push({fn:v,ctx:d}),this},once:function(n,v,d){var c=this;function b(){c.off(n,b),v.apply(d,arguments)}return b._=v,this.on(n,b,d)},emit:function(n){var v=[].slice.call(arguments,1),d=((this.e||(this.e={}))[n]||[]).slice(),c=0,b=d.length;for(c;c<b;c++)d[c].fn.apply(d[c].ctx,v);return this},off:function(n,v){var d=this.e||(this.e={}),c=d[n],b=[];if(c&&v)for(var E=0,y=c.length;E<y;E++)c[E].fn!==v&&c[E].fn._!==v&&b.push(c[E]);return b.length?d[n]=b:delete d[n],this}},i.exports=l},{}]},{},[1])(1)}),function(a,i){m.exports=i(J())}(window,function(a){var i=window.console,o=[],l=N();function n(e,t,r){if(n.prototype.getInstance(e)){i&&i.error("Droppy: another Droppy instance was found for this element.",e);return}if(e.nodeType!==Node.ELEMENT_NODE){i&&i.error("Droppy: the given element is not valid.",e);return}this.element=e;var s=this.element.querySelector(t.dropdownSelector);if(!s){i&&i.error("Droppy: the given dropdownSelector returns no value.",t.dropdownSelector);return}var p=this.element.querySelector(t.parentSelector);if(!p){i&&i.error("Droppy: the given parentSelector returns no value.",t.parentSelector);return}var h=this.element.querySelector(t.triggerSelector);if(!h){i&&i.error("Droppy: the given triggerSelector returns no value.",t.triggerSelector);return}var w={parentSelector:"li",dropdownSelector:"li > ul",triggerSelector:"a",closeOthers:!0,clickOutToClose:!0,clickEscToClose:!0,animationIn:"",animationOut:"",preventDefault:!0};t&&typeof t=="object"?this.options=d(w,t):this.options=w;var I={beforeOpen:null,afterOpen:null,beforeClose:null,afterClose:null,beforeOpenAll:null,afterOpenAll:null,beforeCloseAll:null,afterCloseAll:null,beforeInit:null,afterInit:null,beforeDestroy:null,afterDestroy:null};r&&typeof r=="object"?this.callbacks=d(I,r):this.callbacks=I,this.init()}n.prototype=Object.create(a.prototype),n.prototype.constructor=n;function v(){this.dropdown="",this.parent="",this.trigger="",this.parentNodes=[],this.descendantNodes=[],this.level=0,this.open=!1}n.prototype.init=function(){if(!n.prototype.isInitialized(this)){typeof this.callbacks.beforeInit=="function"&&this.callbacks.beforeInit(),this.tree=E(this.element,this.options.dropdownSelector,this.options.parentSelector,this.options.triggerSelector),this.element.classList.add("droppy");for(var e=this.tree.length,t;e--,t=this.tree[e];)t.dropdown.classList.add("droppy__drop"),t.parent.classList.add("droppy__parent"),t.trigger.classList.add("droppy__trigger"),t.trigger.setAttribute("aria-haspopup","true"),t.trigger.setAttribute("aria-expanded","false");o.length===0&&(document.body.addEventListener("click",P),document.body.addEventListener("keyup",R)),o.push(this),typeof this.callbacks.afterInit=="function"&&this.callbacks.afterInit(),this.emit("init",{droppy:this})}},n.prototype.destroy=function(){if(n.prototype.isInitialized(this)){typeof this.callbacks.beforeDestroy=="function"&&this.callbacks.beforeDestroy(),this.element.classList.remove("droppy");for(var e=this.tree.length,t;e--,t=this.tree[e];)t.dropdown.classList.remove("droppy__drop","droppy__drop--active"),t.parent.classList.remove("droppy__parent"),t.trigger.classList.remove("droppy__trigger"),t.trigger.removeAttribute("aria-haspopup"),t.trigger.removeAttribute("aria-expanded");delete this.tree,o.length===1&&(document.body.removeEventListener("click",P),document.body.removeEventListener("keyup",R));for(var r=o.length,s;r--,s=o[r];)s===this&&o.splice(r,1);typeof this.callbacks.afterDestroy=="function"&&this.callbacks.afterDestroy(),this.emit("destroy",{droppy:this})}},n.prototype.open=function(e,t){var r;if(e instanceof v?r=e:r=y("dropdown",e,this.tree),!r.open){if(typeof this.callbacks.beforeOpen=="function"&&this.callbacks.beforeOpen(),this.options.closeOthers)for(var s=A("level",r.level,this.tree),p=s.length,h;p--,h=s[p];)h.open&&u(h,!0,this.options.animationOut);f(r,t,this.options.animationIn),typeof this.callbacks.afterOpen=="function"&&this.callbacks.afterOpen(),this.emit("open",{droppy:this,dropdown:r})}},n.prototype.close=function(e,t){var r;e instanceof v?r=e:r=y("dropdown",e,this.tree),r.open&&(typeof this.callbacks.beforeClose=="function"&&this.callbacks.beforeClose(),u(r,t,this.options.animationOut),typeof this.callbacks.afterClose=="function"&&this.callbacks.afterClose(),this.emit("close",{droppy:this,dropdown:r}))},n.prototype.toggle=function(e,t){var r;e instanceof v?r=e:r=y("dropdown",e,this.tree),r.open?this.close(r,t):this.open(r,t)},n.prototype.closeAll=function(){var e=y("open",!0,this.tree);if(e){typeof this.callbacks.beforeCloseAll=="function"&&this.callbacks.beforeCloseAll();for(var t=A("level",0,this.tree),r=t.length,s;r--,s=t[r];)s.open&&u(s,!0,this.options.animationOut);typeof this.callbacks.afterCloseAll=="function"&&this.callbacks.afterCloseAll(),this.emit("closeAll",{droppy:this})}},n.prototype.openAll=function(){var e=y("open",!1,this.tree);if(e){typeof this.callbacks.beforeOpenAll=="function"&&this.callbacks.beforeOpenAll();for(var t=A("level",0,this.tree),r=t.length,s;r--,s=t[r];){if(!s.open){f(s,!0,this.options.animationIn);continue}for(var p=0,h=s.descendantNodes.length,w;w=s.descendantNodes[p];++p)w.open||f(w,!0,this.options.animationIn)}typeof this.callbacks.afterOpenAll=="function"&&this.callbacks.afterOpenAll(),this.emit("openAll",{droppy:this})}},n.prototype.isInitialized=function(e){for(var t=o.length,r;t--,r=o[t];)if(e===r)return!0;return!1},n.prototype.getInstance=function(e){for(var t=o.length,r;t--,r=o[t];)if(r.element===e)return r};function d(e,t){var r;for(r in t)e.hasOwnProperty(r)&&(e[r]=t[r]);return e}function c(e,t,r,s){for(s||(e=e.parentNode);e!==t&&e!==document.body;){if(e.matches(r))return e;e=e.parentNode}}function b(e,t,r,s){s||(e=e.parentNode);for(var p=[];e!==t&&e!==document.body;)e.matches(r)&&p.push(e),e=e.parentNode;return p}function E(e,t,r,s){for(var p=Array.prototype.slice.call(e.querySelectorAll(t)),h=[],w=0,I=p.length,k;k=p[w];w++){var S=new v;S.dropdown=k,S.parent=c(k,e,r,!1),S.trigger=S.parent.querySelector(s);for(var H=b(k,e,t,!1),q,j=H.length,G;j--,G=H[j];)q=y("dropdown",G,h),S.parentNodes.push(q),q.descendantNodes.push(S);S.level=S.parentNodes.length,h.push(S)}return h}function y(e,t,r){for(var s=r.length,p;s--,p=r[s];)if(p[e]===t)return p}function A(e,t,r){for(var s=[],p=r.length,h;p--,h=r[p];)h[e]===t&&s.push(h);return s}function N(){var e=!1,t=document.createElement("div"),r="Webkit";return t.style.animationName!==void 0&&(e=!0),e||t.style[r+"AnimationName"]!==void 0&&(e=!0),e}function f(e,t,r){typeof t!="boolean"&&(t=!1);for(var s=e,p=[e],h=e.parentNodes.length,w;h--,w=e.parentNodes[h];)w.open||(p.push(w),s=w);for(p=p.reverse(),l&&r&&L(s,r),h=p.length,e;h--,e=p[h];)O(e,t)}function u(e,t,r){typeof t!="boolean"&&(t=!0),l&&r?_(e,t,r):x(e,t)}function L(e,t){e.dropdown.addEventListener("animationend",function r(){e.dropdown.classList.remove(t),e.dropdown.removeEventListener("animationend",r)}),e.dropdown.classList.add(t)}function _(e,t,r){e.dropdown.addEventListener("animationend",function s(){e.dropdown.classList.remove(r),x(e,t),e.dropdown.removeEventListener("animationend",s)}),e.dropdown.classList.add(r)}function O(e,t){if(t)for(var r=e.descendantNodes.length,s;r--,s=e.descendantNodes[r];)s.open||(s.dropdown.classList.add("droppy__drop--active"),s.trigger.setAttribute("aria-expanded","true"),s.open=!0);e.dropdown.classList.add("droppy__drop--active"),e.trigger.setAttribute("aria-expanded","true"),e.open=!0}function x(e,t){if(e.dropdown.classList.remove("droppy__drop--active"),e.trigger.setAttribute("aria-expanded","false"),e.open=!1,t)for(var r=e.descendantNodes.length,s;r--,s=e.descendantNodes[r];)s.open&&(s.dropdown.classList.remove("droppy__drop--active"),s.trigger.setAttribute("aria-expanded","false"),s.open=!1)}function P(e){for(var t,r,s,p=o.length,h;p--,h=o[p];){if(!h.element.contains(e.target)&&h.options.clickOutToClose){h.closeAll();continue}t=c(e.target,h.element,".droppy__trigger",!0),t?s=y("trigger",t,h.tree):s=!1,s&&(r=e.shiftKey?!0:void 0,h.toggle(s,r),h.options.preventDefault&&!e.ctrlKey&&e.preventDefault())}}function R(e){if(e.which===27)for(var t=o.length,r;t--,r=o[t];)r.options.clickEscToClose&&r.closeAll()}for(var F=document.querySelectorAll("[data-droppy]"),z=F.length,D;z--,D=F[z];)new n(D,JSON.parse(D.getAttribute("data-droppy")));return n})})(K);const Q=M;function V(){const m=W(),g=m.querySelector(".dropdown-menu");g.querySelector("li > ul").classList.add("animate__animated","animate__superfast");const a=new Q(g,{parentSelector:"li",dropdownSelector:"li > ul",triggerSelector:"a",closeOthers:!0,clickOutToClose:!0,clickEscToClose:!0,preventDefault:!0,animationIn:"animate__fadeIn",animationOut:"animate__fadeOut"}),i=g.querySelector(".droppy__drop");let o=null;g.addEventListener("mouseover",()=>{clearTimeout(o),a.open(i)}),g.addEventListener("mouseleave",()=>{o=setTimeout(()=>{a.close(i)},1e3)}),i.addEventListener("mouseover",()=>{clearTimeout(o)}),i.addEventListener("mouseleave",()=>{clearTimeout(o),a.close(i)}),document.querySelector("header.header").prepend(m)}function W(){const m=document.createElement("div");return m.innerHTML=`
        <nav class="navbar">
        <div class="container">
          <div class="navbar__inner flex-column flex-md-row">
            <a class="navbar__logo mb-4 mb-lg-0" href="/">
              <img src="/logo.png" alt="Памятники на заказ">
            </a>

                <ul class="navbar__menu mb-4 mb-lg-0">
                    <li>
                        <a href="/catalog/">Каталог</a>
                    </li>
                    <li>
                        <a href="/about-us/">О нас</a>
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
                                        <li><a href="/about-us/">О компании</a></li>
                                        <li><a href="/payment/">Оплата и доставка</a></li>
                                        <li><a href="/awards/">Сертификаты и награды</a></li>
                                        <li><a href="/blog/">Статьи</a></li>
                                        <li><a href="/warranty/">Гарантии</a></li>
                                        <li><a href="/reviews/">Отзывы</a></li>
                                        <li><a href="/faq/">FAQ</a></li>
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
              <img src="/whatsapp.png" alt="">
            </a>
          </div>
        </div>
      </nav>
    `,m.firstElementChild}function X(){const m=document.createElement("div");return m.innerHTML=`
        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-12 col-lg col-md footer__column">
                <a class="footer__logo" href="/">
                  <img src="/logo.png" alt="Памятники на заказ">
                </a>
                <a href="tel:+79661744333">
                  +7 (966) 174-43-33
                </a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="#">Памятники</a>
                <a href="#">Мемориальные комплексы</a>
                <a href="#">Эксклюзивные работы</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/about-us/">О нас</a>
                <a href="/works/">Наши проекты</a>
                <a href="/blog/">Статьи</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/payment/">Оплата и доставка Гранитных памятников</a>
                <a href="/warranty/">Гарантии на Гранитные памятники</a>
                <a href="/faq/">Вопросы и ответы о Гранитных памятниках</a>
              </div>
    
              <div class="col-12 col-lg col-md footer__column">
                <a href="/about-us/">О компании</a>
                <a href="/awards/">Сертификаты и награды Компании «Памятники на заказ»</a>
                <a href="/reviews/">Отзывы</a>
                <a href="/contacts/">Контакты компании «Памятники на заказ»</a>
              </div>
    
            </div>
          </div>
        </footer>
    `,m.firstElementChild}function Y(){document.querySelector("body").append(X())}document.addEventListener("DOMContentLoaded",()=>{V(),Y()});
