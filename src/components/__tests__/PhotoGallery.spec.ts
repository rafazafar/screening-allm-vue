import { describe, it, expect } from "vitest"
import { mount, flushPromises } from "@vue/test-utils"

import { createPinia } from "pinia"

import PhotoGallery from "../PhotoGallery.vue"

describe("PhotoSearch", () => {
  it("should render", async () => {
    const wrapper = mount(PhotoGallery, {
      global: {
        plugins: [createPinia()],
      },
    })
    await flushPromises()
    expect(wrapper.findAll(".loading").length).toBe(1)
  })
})
