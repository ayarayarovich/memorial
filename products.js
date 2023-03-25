export async function get_products() {
    let response = await fetch("http://213.189.201.225:8000/rest/products/");

    if (response.ok) { // если HTTP-статус в диапазоне 200-299
        // получаем тело ответа (см. про этот метод ниже)
        let data = await response.json();
        console.log(data);
        for (let i in data) {
            const item = data[i];
            console.log(item)
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