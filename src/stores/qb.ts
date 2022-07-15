import { defineStore } from 'pinia'
import qb from '@/data.json'

export const useStore = defineStore({
  id: 'qb',
  state: () => ({
      data: qb
  }),
})
