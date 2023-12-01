import { defineStore } from 'pinia'

export const useToastStore = defineStore('toast', {
  state: () => ({
    message: null,
    severity: null,
  }),
  actions: {
    showToast({ message, severity }) {
      this.message = message;
      this.severity = severity;
    },
    clearToast() {
      this.message = null;
      this.severity = null;
    },
  },
})
