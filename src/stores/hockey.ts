import { defineStore } from 'pinia'
// import qb from '@/data.json'
import hockey from '@/hockey.json'

export const useStore = defineStore({
  id: 'hockey',
  state: () => ({
      data: hockey
  }),
})
