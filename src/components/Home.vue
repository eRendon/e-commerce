<script setup lang="ts">
import ProductList       from './ProductList.vue';
import { onMounted  } from 'vue'
import { useGetProducts } from '../composables/products'
import { useProductsStore } from '../store/products'
import { storeToRefs } from 'pinia'

const productsStore = useProductsStore()
const { products } = storeToRefs(productsStore)
onMounted( () => {
  useGetProducts('products')
})

</script>

<template>
  <ProductList :products="products"></ProductList>
</template>
