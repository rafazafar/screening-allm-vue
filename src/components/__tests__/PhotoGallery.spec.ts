import { describe, it, expect, beforeAll } from "vitest"
import { mount } from "@vue/test-utils"
import PhotoGallery from "../PhotoGallery.vue"
import { usePhotosStore } from "../../stores/photos"
import { setActivePinia, createPinia } from "pinia"
import { createTestingPinia } from "@pinia/testing"

beforeAll(() => {
  setActivePinia(createPinia())
})

describe("PhotoGallery", () => {
  it("renders properly", () => {
    const wrapper = mount(PhotoGallery)
    expect(wrapper.text()).toContain("")
  })

  it("displays the correct number of photos", () => {
    const wrapper = mount(PhotoGallery, {
      global: {
        plugins: [createTestingPinia()],
      },
    })
    const photosStore = usePhotosStore()
    photosStore.photos = []

    console.log(wrapper.findAll("div"))
    expect(wrapper.findAll("img").length).toBe(0)
  })
})
