<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useBookingStore } from '@/stores/booking'

export default defineComponent({
  name: 'UserNumberBox',
  setup() {
    const bookingStore = useBookingStore()
    const arrivalDate = computed(() => bookingStore.arrivalDate)
    const departureDate = computed(() => bookingStore.departureDate)
    const nightNumber = computed(() => bookingStore.nightNumber)
    const adultNumber = computed(() => bookingStore.adultNumber)
    const couplesAmongAdults = computed(() => bookingStore.couplesAmongAdults)
    const childNumber = computed(() => bookingStore.childNumber)
    const babyNumber = computed(() => bookingStore.babyNumber)

    const { substractNumber, addNumber, addCoupleNumber, totalNumber } = bookingStore

    return {
      arrivalDate,
      departureDate,
      nightNumber,
      adultNumber,
      couplesAmongAdults,
      childNumber,
      babyNumber,

      substractNumber,
      addNumber,
      addCoupleNumber,
      totalNumber
    }
  },
  computed: {
    // calculateNightsNumber() {
    //   const startDate = this.arrivalDate
    //   const endDate = this.departureDate
    //   let result = 0
    //   if (endDate !== null && startDate !== null) {
    //     result = Math.ceil(
    //       Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    //     )
    //   }
    //   if (result === 0) {
    //     return 1
    //   }
    //   return result
    // }
  }
})
</script>

<template>
  <div class="user__number__box">
    <p>{{ adultNumber }} adultes dont {{ couplesAmongAdults }} couples</p>
    <p>{{ childNumber }} enfants</p>
    <p>{{ babyNumber }} bébés</p>
    <!-- Attention, les dates ne fonctionnent pas -->
    <p>{{ nightNumber }} nuitée(s) du {{ arrivalDate }} au {{ departureDate }}</p>
    {{ console.log(arrivalDate) }}
  </div>
</template>

<style lang="scss">
.user__number {
  &__box {
    background-color: var(--secondary-clear-background-color);
    border: solid 2px var(--secondary-dark-background-color);
  }
}
</style>
