import"./common-a3ed4d09.js";async function r(t){let o;if(t?o=await fetch(`https://213.189.201.225:8000/rest/filter_products/${t}/`):o=await fetch("https://213.189.201.225:8000/rest/products/"),o.ok){document.querySelector(".products-list").innerHTML="";let e=await o.json();for(let n in e){const c=e[n],a=`<div class="product col-12 col-sm-6 col-xl-4">
                        <a href="/product/?id=${c.id}">
                            <div class="product-card">
                              <img src="${c.image}"
                                   alt="">
                              <div class="product-title">
                                ${c.title}
                              </div>
                            </div>
                            </a>
                          </div>`;document.querySelector(".products-list").innerHTML+=a}}}function s(t){const o=(t.__str__.match(/>/g)||[]).length,e=`<div class="category" data-id="${t.id}" data-depth=${o}>
            <span>${t.name}</span> 
    </div>`;console.log(t.parent),t.parent?document.querySelector(`.category[data-id="${t.parent}"]`).innerHTML+=e:document.querySelector(".categories-list").innerHTML+=e}async function i(){let t=await fetch("https://213.189.201.225:8000/rest/categories/");if(t.ok){document.querySelector(".categories-list").innerHTML="";let o=await t.json();for(let e in o)s(o[e]);document.querySelectorAll(".categories-list .category > span").forEach(e=>{e.addEventListener("click",()=>{document.querySelector("h1").innerHTML=e.textContent,r(e.parentNode.dataset.id)})})}}window.addEventListener("DOMContentLoaded",()=>{i(),r()});
