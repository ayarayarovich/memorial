import {get_products, get_catalogs} from "./products.js";

window.addEventListener('DOMContentLoaded', () => {
    get_catalogs();
    get_products();
})
