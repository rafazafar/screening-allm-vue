<template>
  <div id="details" class="text-sm break-words p-2 cursor-pointer">
    <p id="title" class="mb-3">Title:<br />{{ data.title }}</p>
    <p id="id" class="mb-3">ID:<br />{{ data.id }}</p>
    <p id="published" class="mb-3">Published:<br />{{ data.published }}</p>
    <p id="author" class="mb-3">Author:<br />{{ data.author.name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
  props: ["data"],
  setup(props) {
    const data = props.data
    return {
      data,
    }
  },
})
</script>
