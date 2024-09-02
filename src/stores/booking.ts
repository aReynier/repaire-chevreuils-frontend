import { defineStore } from 'pinia'

interface BookingState {
  arrivalDate: Date | null
  departureDate: Date | null
  adultNumber: number
  couplesAmongAdults: number
  childNumber: number
  babyNumber: number
}

export const useBookingStore = defineStore('booking', {
  state: (): BookingState => ({
    arrivalDate: null,
    departureDate: null,
    adultNumber: 2,
    couplesAmongAdults: 0,
    childNumber: 0,
    babyNumber: 0
  }),
  getters: {
    booking(state: BookingState) {
      return state
    }
  },
  actions: {
    substractNumber(category: 'adultNumber' | 'couplesAmongAdults' | 'childNumber' | 'babyNumber') {
      if (this[category] > 0) {
        this[category]--
      }
      if (this.couplesAmongAdults > this.adultNumber / 2) {
        this.couplesAmongAdults--
      }
    },
    addNumber(category: 'adultNumber' | 'childNumber' | 'babyNumber') {
      console.log('Adding number to:', category)
      this[category]++
      console.log('test')
      console.log('New value:', this[category])
    },
    addCoupleNumber() {
      if (this.couplesAmongAdults < Math.floor(this.adultNumber / 2)) {
        this.couplesAmongAdults++
      }
    },
    totalNumber() {
      return this.adultNumber + this.childNumber + this.babyNumber
    }
  }
})
