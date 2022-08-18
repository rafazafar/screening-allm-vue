<template>
  <div id="sorting">
    <div id="sort-date-taken" class="p-2">
      <span class="align-top mr-2"> Sort By Published Date: </span>
      <span
        id="desc"
        class="inline-block cursor-pointer text-gray-700 hover:text-gray-900"
        v-if="sortDirection == 'desc'"
        @click="sortByDatePublished('asc')"
      >
        <!-- desc icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 swap-off"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
          />
        </svg>
      </span>
      <span
        id="asc"
        v-else
        class="inline-block cursor-pointer text-gray-700 hover:text-gray-900"
        @click="sortByDatePublished('desc')"
      >
        <!-- asc icon -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 swap-on"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { usePhotosStore } from "../stores/photos"

export default defineComponent({
  setup() {
    const photosStore = usePhotosStore()
    const sortDirection = ref("desc")

    async function sortByDatePublished(order: string) {
      const res = await photosStore.sortByDatePublished(order)
      sortDirection.value = res
    }

    return {
      sortDirection,
      sortByDatePublished,
    }
  },
})
</script>
