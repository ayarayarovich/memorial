import"./common-02e81a3a.js";async function n(r){let e=await fetch(`http://213.189.201.225:8000/rest/products/${r}/`);if(e.ok){let t=await e.json();document.querySelector(".prodPg-image").innerHTML=`<img src="${t.image}" alt="">`,document.querySelector(".prodPg-info-attrs").innerHTML="",document.querySelectorAll(".prodPg-title").forEach(i=>{i.textContent=t.title});let o=t.attrs;for(let i in o){let a=o[i];document.querySelector(".prodPg-info-attrs").innerHTML+=`<li>
              <div class="attr-title">${a.title}</div>
              <div class="item_dots"></div>
              <div class="attr-value">${a.value}</div>
            </li>`}}}window.addEventListener("DOMContentLoaded",()=>{const r=new Proxy(new URLSearchParams(window.location.search),{get:(e,t)=>e.get(t)});n(r.id)});
