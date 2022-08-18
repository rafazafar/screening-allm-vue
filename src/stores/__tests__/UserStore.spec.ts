import { it, describe, expect, beforeEach } from "vitest"
import { setActivePinia, createPinia } from "pinia"
import { useUserStore } from "../user"

describe("Photos Store", () => {
  describe("Initial State", () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })
    it("should empty savedPhotos", () => {
      const userStore = useUserStore()
      const savedPhotos = userStore.getSavedPhotos
      expect(savedPhotos.length).toBe(0)
    })
  })
})
