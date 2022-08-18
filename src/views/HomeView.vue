<template>
  <main class="container">
    <PhotoSearch />
    <PhotoGallery />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted } from "vue"
import PhotoSearch from "@/components/PhotoSearch.vue"
import PhotoGallery from "@/components/PhotoGallery.vue"

export default defineComponent({
  components: {
    PhotoSearch,
    PhotoGallery,
  },
})
</script>
