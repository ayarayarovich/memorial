import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                works: resolve(__dirname, 'works/index.html'),
                warranty: resolve(__dirname, 'warranty/index.html'),
                payment: resolve(__dirname, 'payment/index.html'),
                catalog: resolve(__dirname, 'catalog/index.html'),
                product: resolve(__dirname, 'product/index.html'),
                contacts: resolve(__dirname, 'contacts/index.html'),
            }
        }
    }
})
