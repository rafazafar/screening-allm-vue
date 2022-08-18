import { defineStore } from "pinia"
import axios from "axios"
import xml2json from "@hendt/xml2json"

export const usePhotosStore = defineStore("photos", {
  state: () => ({
    photos: [] as FlickrPhoto[],
    tag: "",
    isLoading: false,
  }),
  getters: {
    getPhotos: (state) => state.photos,
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    async searchByTag(tag: string) {
      // Set tag and re-fetches photos
      this.tag = tag
      this.fetchPhotos()
    },
    async fetchPhotos() {
      try {
        this.isLoading = true

        // fetch photos via proxy to avoid CORS issues
        const res = await axios.get(
          "/flickr/services/feeds/photos_public.gne?tags=" + this.tag
        )
        // parse XML response into JSON
        const data = xml2json(res.data)

        // extract photos list from JSON
        this.photos = data.feed.entry
      } catch (error) {
        alert(error)
        console.log(error)
      } finally {
        this.isLoading = false
      }
    },
  },
})
