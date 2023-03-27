import"./common-4ec05799.js";async function s(i){let t;if(i?t=await fetch(`http://213.189.201.225:8000/rest/filter_products/${i}/`):t=await fetch("http://213.189.201.225:8000/rest/products/"),t.ok){document.querySelector(".products-list").innerHTML="";let e=await t.json();for(let c in e){const o=e[c],r=`<div class="product col-12 col-sm-6 col-md-4">
                            <div class="product-card">
                              <img src="${o.image}"
                                   alt="">
                              <div class="product-title">
                                ${o.title}
                              </div>
                            </div>
                          </div>`;document.querySelector(".products-list").innerHTML+=r}}}async function a(){let i=await fetch("http://213.189.201.225:8000/rest/categories/");if(i.ok){document.querySelector(".categories-list").innerHTML="";let t=await i.json();for(let e in t){const c=t[e],o=`<div class="category" data-id="${c.id}">${c.__str__}</div>`;document.querySelector(".categories-list").innerHTML+=o}document.querySelectorAll(".categories-list .category").forEach(e=>{e.addEventListener("click",()=>{s(e.dataset.id)})})}}window.addEventListener("DOMContentLoaded",()=>{a(),s()});
