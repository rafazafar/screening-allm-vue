<script lang="ts">
import { defineComponent, onMounted, computed } from "vue"
import { usePhotosStore } from "../stores/photos"

export default defineComponent({
  setup() {
    const photosStore = usePhotosStore()
    const photos = computed(() => photosStore.getPhotos)
    const isLoading = computed(() => photosStore.getIsLoading)

    function addToFavs(photo: FlickrPhoto): void {
      // TODO: sadd photo eto user favs.
    }

    //TODO : Sorting

    onMounted(() => {
      photosStore.fetchPhotos()
    })

    return {
      photos,
      isLoading,
      addToFavs,
    }
  },
})
</script>

<template>
  <section class="overflow-hidden text-gray-700">
    <div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
      <div v-if="isLoading" class="loading">Loading data.. please wait</div>

      <div v-else class="flex flex-wrap -m-1 md:-m-2">
        <div class="flex flex-wrap w-1/3" v-for="photo in photos">
          <div class="w-full p-1 md:p-2 relative">
            //TODO: Add logic for storing photo to user.favs
            <div
              class="rating gap-1 absolute top-5 right-5"
              @click="addToFavs(photo)"
            >
              <input
                type="checkbox"
                name="rating-3"
                :class="'mask mask-heart ' + 'bg-orange-400'"
              />
            </div>
            <img
              alt="gallery"
              class="block object-cover object-center w-full h-full max-h-[20rem] rounded-lg"
              v-lazy="{
                src: photo.link[1].href,
                loading: 'https://via.placeholder.com/300',
                error: 'https://via.placeholder.com/300',
              }"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
