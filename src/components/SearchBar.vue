<template>
  <div class="flex align-items-center gap-2">
    <InputText @input="searchByName()" v-model="searchProduct" placeholder="Search" type="text" class="w-8rem sm:w-auto" />
    <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" shape="circle" />
  </div>
</template>

<script setup lang="ts">
import InputText from 'primevue/inputtext'
import Avatar from 'primevue/avatar'
import { useProductsStore } from '../store/products'
import { ref } from 'vue'

const productsStore = useProductsStore()
const searchProduct = ref('')

const searchByName = () => {
  productsStore.searchByName(searchProduct.value)
}
</script>
