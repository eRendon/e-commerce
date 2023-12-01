import { defineStore } from 'pinia'
import { IProduct } from '../models/IProduct'

interface CartStore {
  products: IProduct[]
}
export const useCartStore = defineStore('cart', {
  state: (): CartStore => {
    return { products: [] }
  },
  actions: {
    addItem(item: IProduct): void {
      this.products.push(item)
    },
    deleteItem(index: number): void {
      this.products = this.products.filter((_, i) => i !==index)
    }
  }
})
