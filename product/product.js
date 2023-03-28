async function get_product(product_id) {
    let response = await fetch(`http://213.189.201.225:8000/rest/products/${product_id}/`);
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        let item = await response.json();

        document.title = item.title;

        const el = ``;
        document.querySelector('.prodPg-image').innerHTML = `<img src="${item.image}" alt="">`;
        document.querySelector('.prodPg-info-attrs').innerHTML = '';
        document.querySelectorAll('.prodPg-title').forEach((el) => {
            el.textContent = item.title;
        });
        let attrs = item.attrs;
        for(let key in attrs){
            let attr = attrs[key];
            document.querySelector('.prodPg-info-attrs').innerHTML += `<li>
              <div class="attr-title">${attr.title}</div>
              <div class="item_dots"></div>
              <div class="attr-value">${attr.value}</div>
            </li>`;
        }
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    get_product(params.id);
})
