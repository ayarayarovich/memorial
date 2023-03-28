async function get_products(category) {
    let response;
    if (category)
        response = await fetch(`http://213.189.201.225:8000/rest/filter_products/${category}/`);
    else
        response = await fetch(`http://213.189.201.225:8000/rest/products/`);

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        document.querySelector('.products-list').innerHTML = '';
        let data = await response.json();
        for (let i in data) {
            const item = data[i];
            const el = `<div class="product col-12 col-sm-6 col-md-4">
                        <a href="/product/?id=${item.id}">
                            <div class="product-card">
                              <img src="${item.image}"
                                   alt="">
                              <div class="product-title">
                                ${item.title}
                              </div>
                            </div>
                            </a>
                          </div>`;
            document.querySelector('.products-list').innerHTML += el;
        }
    }
}

function add_category(item) {
    const depth = (item.__str__.match(/>/g) || []).length;
    const el = `<div class="category" data-id="${item.id}" data-depth=${depth}>
            <span>${item.name}</span> 
    </div>`;

    console.log(item.parent);
    if (!item.parent)
        document.querySelector('.categories-list').innerHTML += el;
    else
        document.querySelector(`.category[data-id="${item.parent}"]`).innerHTML += el;
}

async function get_categories() {
    let response = await fetch("http://213.189.201.225:8000/rest/categories/");

    if (response.ok) {
        document.querySelector('.categories-list').innerHTML = '';
        let data = await response.json();
        for (let i in data) {
            add_category(data[i]);
        }
        document.querySelectorAll('.categories-list .category > span').forEach((el) => {
            el.addEventListener('click', () => {
                document.querySelector('h1').innerHTML = el.textContent;
                get_products(el.parentNode.dataset.id);
            })
        })
    }

}

window.addEventListener('DOMContentLoaded', () => {
    get_categories();
    get_products();
})
