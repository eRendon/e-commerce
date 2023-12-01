import { defineStore } from 'pinia'

interface StateSpinner {
  isLoading: boolean
}
export const useSpinnerStore = defineStore('spinner', {
  state: (): StateSpinner => {
    return {
      isLoading: false
    }
  },
  actions: {
    setLoading(state): void {
      this.isLoading = state
    },
    dismissSpinner(): void {
      this.isLoading = false
    }
  }
})
