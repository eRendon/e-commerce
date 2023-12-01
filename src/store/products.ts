import { defineStore } from 'pinia'
import { IProduct } from '../models/IProduct'

interface StateProducts {
  products: IProduct[],
  filteredProducts: IProduct[]
}
export const useProductsStore = defineStore('products', {
  state: (): StateProducts => {
    return { products: [], filteredProducts: [] }
  },
  actions: {
    setProducts(products: IProduct[]) {
      this.products = products
      this.filteredProducts = products
    },
    searchByName(name: string): void {
      console.log(name)
      if (name === '') {
        this.products = this.filteredProducts
      } else {
        this.products = this.filteredProducts.filter((product) => product.title.toLowerCase().includes(name))
      }
    }
  }
})
