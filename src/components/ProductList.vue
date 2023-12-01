<script setup lang="ts">
import DataView from 'primevue/dataview'
import DataViewLayoutOptions from 'primevue/dataviewlayoutoptions'
import Rating from 'primevue/rating'
import Button from 'primevue/button'
import Skeleton from './Skeleton.vue'

import { ref } from "vue";
import { IProduct } from '../models/IProduct'
import { useCartStore } from '../store/cart'
import { useSpinnerStore } from '../store/spinner'
import { storeToRefs } from 'pinia'
import { useToast } from 'primevue/usetoast'

const { products } = defineProps<{products: IProduct[]}>()
const layout = ref('grid');
const bagStore = useCartStore()
const spinnerStore = useSpinnerStore()
const toast = useToast()
const { isLoading } = storeToRefs(spinnerStore)

const addBagItem = (item: IProduct) => {
  bagStore.addItem(item)
  toast.add({ severity: 'success', summary: 'Item agregado', detail: 'Se ha agregado el item al carrito correctamente', life: 3000 });
}

</script>

<template>
  <div v-if="!isLoading" class="card">
    <DataView :value="products" :layout="layout">
      <template class="fixed" v-if="products.length > 0" #header>
        <div class="flex justify-content-end">
          <DataViewLayoutOptions  v-model="layout" />
        </div>
      </template>

      <template #grid="slotProps">
        <div class="grid grid-nogutter" >
          <div v-for="(item, index) in slotProps.items"
               :key="index"
               class="col-12 sm:col-6 lg:col-12 xl:col-4 p-2"

          >
            <div class="p-4 h-full border-1 surface-border surface-card border-round">
              <div class="flex flex-wrap align-items-center justify-content-between gap-2">
                <div class="flex align-items-center gap-2">
                  <i class="pi pi-tag"></i>
                  <span class="font-semibold">{{ item.category }}</span>
                </div>
              </div>
              <div class="flex flex-column align-items-center gap-3 py-5">
                <img class="w-4 h-5rem shadow-2 border-round" :src="item.image" :alt="item.name" />
                <div class="text-2xl font-bold">{{ item.title }}</div>
                <Rating :modelValue="item.rating.rate" readonly :cancel="false"></Rating>
                <p class="description">{{ item.description}}</p>
              </div>
              <div class="flex align-items-center justify-content-between">
                <span class="text-2xl font-semibold">${{ item.price }}</span>
                <Button @click="addBagItem(item)" icon="pi pi-shopping-cart" rounded ></Button>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
              <img class="w-4 h-5rem sm:w-15rem xl:w-7rem shadow-2 block xl:block mx-auto border-round" :src="item.image" :alt="item.name" />
              <div class="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                <div class="flex flex-column align-items-center sm:align-items-start gap-3">
                  <div class="text-2xl font-bold text-900">{{ item.name }}</div>
                  <Rating :modelValue="item.rating.rate" readonly :cancel="false"></Rating>
                  <div class="flex align-items-center gap-3">
                                <span class="flex align-items-center gap-2">
                                    <i class="pi pi-tag"></i>
                                    <span class="font-semibold">{{ item.category }}</span>
                                </span>
                  </div>
                </div>
                <div class="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                  <span class="text-2xl font-semibold">${{ item.price }}</span>
                  <Button icon="pi pi-shopping-cart" rounded @click="addBagItem(item)"></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
  <div v-else>
    <Skeleton :products="products"></Skeleton>
  </div>
</template>

<style scoped>
.description {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 11;
  text-overflow: ellipsis;
  min-height: 260px;
  max-height: 260px;
  height: 260px;
}
</style>
