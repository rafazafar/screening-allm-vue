<template>
  <div id="photo-wrapper" class="flex flex-wrap w-1/3">
    <div class="w-full p-1 md:p-2 relative">
      <div
        class="absolute top-5 right-5 cursor-pointer text-red-300 drop-shadow"
        @click="saveUnsavePhoto(photo)"
      >
        <svg
          v-if="!isSaved"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
            clip-rule="evenodd"
          />
        </svg>
      </div>

      <!-- Lazy Load Image -->
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
</template>

<script lang="ts">
import { useUserStore } from "../stores/user"
import { usePhotosStore } from "../stores/photos"
import { defineComponent, onMounted, reactive, ref } from "vue"

export default defineComponent({
  props: ["photo"],
  setup(props) {
    const userStore = useUserStore()

    const isSaved = ref(false)

    onMounted(() => {
      // check if photo is already saved
      isSaved.value = userStore.isSaved(props.photo)
    })

    // toggle save/unsave photoand update state
    function saveUnsavePhoto(photo: FlickrPhoto): void {
      isSaved.value = userStore.markUnmarkSaved(photo)
    }

    return {
      isSaved,
      saveUnsavePhoto,
    }
  },
})
</script>
