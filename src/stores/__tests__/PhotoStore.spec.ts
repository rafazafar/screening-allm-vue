import { it, describe, expect, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { usePhotosStore } from "../photos"

describe("Photos Store", () => {
  describe("Initial State", () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })
    it("empty photos array", () => {
      const photosStore = usePhotosStore()
      expect(photosStore.photos.length).toBe(0)
    })
    it("empty tags", () => {
      const photosStore = usePhotosStore()
      expect(photosStore.tag).toBe("cat")
    })
  })
})
