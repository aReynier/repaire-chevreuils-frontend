import { defineStore } from 'pinia'

interface GuestRoomState {
  name: String | null
}

export const useGuestRoomStore = defineStore('guestRoom', {
  state: (): GuestRoomState => ({
    name: null
  }),
  getters: {
    booking(state: GuestRoomState) {
      return state
    }
  }
})
