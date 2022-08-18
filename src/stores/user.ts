import { defineStore } from "pinia"

export const useUserStore = defineStore("user", {
  state: () => ({
    savedPhotos: [] as FlickrPhoto[],
  }),
  getters: {
    getSavedPhotos: (state) => state.savedPhotos,
  },
})
