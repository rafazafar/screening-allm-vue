<template>
  <div class="container mx-auto px-5 lg:pt-12 lg:px-32">
    <input
      type="text"
      v-model="inputTag"
      placeholder="Search By Tag"
      class="input input-bordered w-full max-w-xs"
    /><button @click="searchByTag" class="btn ml-5">Search</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { usePhotosStore } from "@/stores/photos"

export default defineComponent({
  setup() {
    const photosStore = usePhotosStore()
    const inputTag = ref("")

    function searchByTag(): void {
      photosStore.searchByTag(inputTag.value)
    }

    return { searchByTag, inputTag }
  },
})
</script>
