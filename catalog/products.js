export async function get_products(category) {
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
                            <div class="product-card">
                              <img src="${item.image}"
                                   alt="">
                              <div class="product-title">
                                ${item.title}
                              </div>
                            </div>
                          </div>`;
            document.querySelector('.products-list').innerHTML += el;
        }
    }
}

export async function get_catalogs() {
    let response = await fetch("http://213.189.201.225:8000/rest/categories/");

    if (response.ok) {
        document.querySelector('.categories-list').innerHTML = '';
        let data = await response.json();
        for (let i in data) {
            const item = data[i];
            const el = `<div class="category" data-id="${item.id}">${item.__str__}</div>`;
            document.querySelector('.categories-list').innerHTML += el;
        }
        document.querySelectorAll('.categories-list .category').forEach((el) => {
            el.addEventListener('click', () => {
                get_products(el.dataset.id);
            })
        })
    }

}