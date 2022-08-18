import { describe, it, expect, beforeAll } from "vitest"
import { mount, flushPromises } from "@vue/test-utils"

import { createPinia } from "pinia"

import { usePhotosStore } from "../../stores/photos"
import PhotoSearch from "../PhotoSearch.vue"

describe("PhotoSearch", () => {
  it("should update store when submit", async () => {
    const wrapper = mount(PhotoSearch, {
      global: {
        plugins: [createPinia()],
      },
    })
    await flushPromises()
    const store = usePhotosStore()

    await wrapper.find("input").setValue("some value")
    await wrapper.find("#submit-button").trigger("click")
    expect(store.tag).toBe("some value")
  })
})
