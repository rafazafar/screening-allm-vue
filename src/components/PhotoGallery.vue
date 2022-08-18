<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <!-- Show data loading text -->
      <div v-if="isLoading" class="loading">Loading data.. please wait</div>

      <div v-else class="flex flex-wrap -m-1 md:-m-2">
        <PhotoCard :photo="photo" v-for="photo in photos" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import { usePhotosStore } from "../stores/photos"
import { useUserStore } from "../stores/user"
import PhotoCard from "./PhotoCard.vue"

export default defineComponent({
  setup() {
    const photosStore = usePhotosStore()
    const photos = computed(() => photosStore.getPhotos)
    const isLoading = computed(() => photosStore.getIsLoading)

    onMounted(() => {
      // Fetch photos from Flickr and update Photos Store
      photosStore.fetchPhotos()
    })
    return {
      photos,
      isLoading,
    }
  },
  components: { PhotoCard },
})
</script>
