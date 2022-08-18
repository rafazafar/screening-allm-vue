import { defineStore } from "pinia"
import { ref, computed, watch } from "vue"

export const useUserStore = defineStore("user", () => {
  const user = ref({
    savedPhotos: [] as FlickrPhoto[],
  })

  const getSavedPhotos = computed(() => user.value.savedPhotos)
  function isSaved(photo: FlickrPhoto) {
    return user.value.savedPhotos.find((p) => p.id === photo.id) !== undefined
  }

  function markUnmarkSaved(photo: FlickrPhoto) {
    // If photo already save , remove from saved list. Otherwise, save it.
    if (isSaved(photo)) {
      user.value.savedPhotos = user.value.savedPhotos.filter(
        (p: FlickrPhoto) => p.id !== photo.id
      )
      return false
    } else {
      user.value.savedPhotos.push(photo)
      return true
    }
  }

  if (localStorage.getItem("user")) {
    user.value = JSON.parse(localStorage.getItem("user") as string)
  }

  watch(
    user,
    (userVal) => {
      localStorage.setItem("user", JSON.stringify(userVal))
    },
    // To handle larger data, we can use deep: true
    { deep: true }
  )

  return {
    getSavedPhotos,
    isSaved,
    markUnmarkSaved,
  }
})
