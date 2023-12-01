import { useProductsStore } from '../store/products'
import { useSpinnerStore } from '../store/spinner'
import Product from '../services/request/product'
import { watchEffect } from 'vue'

export const useGetProducts = (url) => {
  const productService = new Product()
  const productsStore = useProductsStore()
  const spinnerStore = useSpinnerStore()

  const getProDucts = async () => {
    spinnerStore.setLoading(true)
    console.log(url)
    try {
      const { data, success } = await productService.getProducts(url)
      console.log(data)
      if (success) {
        productsStore.setProducts(data)
      }
      spinnerStore.setLoading(false)
    } catch (e) {
      console.log(e)
      spinnerStore.setLoading(false)
    }
  }

  watchEffect(() => {
    getProDucts().then(() => {})
  })
}
