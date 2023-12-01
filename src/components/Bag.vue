<template>
  <div class="card">
    <DataView :value="cartStore.products">
      <template #list="slotProps">
        <div class="grid grid-nogutter">
          <div v-for="(item, index) in slotProps.items" :key="index" class="col-12">
            <div class="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4" :class="{ 'border-top-1 surface-border': index !== 0 }">
              <img class="w-9 h-8rem sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" :src="item.image" :alt="item.name" />
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
                  <Button @click="deleteItem(index)" icon="pi pi-trash" severity="danger" rounded></Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </DataView>
  </div>
</template>

<script setup lang="ts">
import DataView from 'primevue/dataview'
import Button from 'primevue/button'
import Rating from 'primevue/rating'

import { useCartStore } from '../store/cart.js';
import { useToast } from 'primevue/usetoast'

const cartStore = useCartStore()
const toast = useToast()

const deleteItem = (index: number): void => {
  cartStore.deleteItem(index)
  toast.add({ severity: 'info', summary: 'Item eliminado', detail: 'Se ha eliminado el item correctamente', life: 3000 });
}
</script>
