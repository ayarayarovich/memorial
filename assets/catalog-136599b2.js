import"./common-4c14cef3.js";async function s(i){let t;if(i?t=await fetch(`http://213.189.201.225:8000/rest/filter_products/${i}/`):t=await fetch("http://213.189.201.225:8000/rest/products/"),t.ok){document.querySelector(".products-list").innerHTML="";let e=await t.json();for(let o in e){const c=e[o],r=`<div class="product col-12 col-sm-6 col-md-4">
                        <a href="/product/?id=${c.id}">
                            <div class="product-card">
                              <img src="${c.image}"
                                   alt="">
                              <div class="product-title">
                                ${c.title}
                              </div>
                            </div>
                            </a>
                          </div>`;document.querySelector(".products-list").innerHTML+=r}}}async function a(){let i=await fetch("http://213.189.201.225:8000/rest/categories/");if(i.ok){document.querySelector(".categories-list").innerHTML="";let t=await i.json();for(let e in t){const o=t[e],c=`<div class="category" data-id="${o.id}">${o.__str__}</div>`;document.querySelector(".categories-list").innerHTML+=c}document.querySelectorAll(".categories-list .category").forEach(e=>{e.addEventListener("click",()=>{s(e.dataset.id)})})}}window.addEventListener("DOMContentLoaded",()=>{a(),s()});
