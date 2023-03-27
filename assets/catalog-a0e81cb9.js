import"./common-560cb86f.js";async function s(){let e=await fetch("http://213.189.201.225:8000/rest/products/");if(e.ok){let t=await e.json();console.log(t);for(let c in t){const o=t[c];console.log(o);const i=`<div class="product col-12 col-sm-6 col-md-4">
                            <div class="product-card">
                              <img src="${o.image}"
                                   alt="">
                              <div class="product-title">
                                ${o.title}
                              </div>
                            </div>
                          </div>`;document.querySelector(".products-list").innerHTML+=i}}}window.addEventListener("DOMContentLoaded",()=>{s()});
