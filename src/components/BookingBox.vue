<script lang="ts">
import { defineComponent, computed } from 'vue'
import 'v-calendar/style.css'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { useBookingStore } from '@/stores/booking'

export default defineComponent({
  name: 'BookingBox',
  components: {
    VDateInput
  },
  data() {
    return {
      isDatePicker: false,
      dateRange: [] as Date[],
      nightsNumber: 1
      // adultNumber: 2,
      // couplesAmongAdults: 0,
      // childNumber: 0,
      // babyNumber: 0
    }
  },
  setup() {
    const bookingStore = useBookingStore()

    // const arrivalDate = computed(() => bookingStore.arrivalDate)
    // const departureDate = computed(() => bookingStore.departureDate)
    const adultNumber = computed(() => bookingStore.adultNumber)
    const couplesAmongAdults = computed(() => bookingStore.couplesAmongAdults)
    const childNumber = computed(() => bookingStore.childNumber)
    const babyNumber = computed(() => bookingStore.babyNumber)

    const { arrivalDate, departureDate, substractNumber, addNumber, addCoupleNumber, totalNumber } =
      bookingStore

    return {
      arrivalDate,
      departureDate,
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
  methods: {
    // toggleDatePicker() {
    //   this.isDatePicker = !this.isDatePicker
    // },
    // substractNumber(category: 'adultNumber' | 'couplesAmongAdults' | 'childNumber' | 'babyNumber') {
    //   if (this[category] > 0) {
    //     this[category]--
    //   }
    //   if (this.couplesAmongAdults > this.adultNumber / 2) {
    //     this.couplesAmongAdults--
    //   }
    // },
    // addNumber(category: 'adultNumber' | 'childNumber' | 'babyNumber') {
    //   this[category]++
    // },
    // addCoupleNumber() {
    //   if (this.couplesAmongAdults < Math.floor(this.adultNumber / 2)) {
    //     this.couplesAmongAdults++
    //   }
    // },
    // totalNumber() {
    //   return this.adultNumber + this.childNumber + this.babyNumber
    // }
  },
  computed: {
    calculateNightsNumber() {
      if (this.dateRange === null || this.dateRange.length < 2) {
        return 0
      }

      const startDate = this.dateRange[1]
      const endDate = this.dateRange[this.dateRange.length - 1]

      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.arrivalDate = startDate
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.departureDate = endDate

      const result = Math.ceil(
        Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      )
      if (result === 0) {
        return 1
      }
      return result
    }
  }
})
</script>

<template>
  <div class="test d-flex justify-center"></div>
  <div class="booking">
    <v-row class="ma-0 pa-0 booking__container">
      <v-col cols="12" lg="3" class="ma-0 px-5 py-3">
        <!-- <div @click="toggleDatePicker" class="d-flex pa-2 booking__container__date">
          <v-icon class="align-self-center mx-3" icon="mdi-calendar-blank-outline"></v-icon>
          <div>
            <p>Arrivée/départ</p>
            <p>01/01/2024-02/01/2024</p>
          </div>
        </div> -->
        <v-date-input
          class="booking__container__date"
          v-model="dateRange"
          label="Select range"
          max-width="368"
          multiple="range"
        ></v-date-input>
        <p class="pb-0">{{ calculateNightsNumber }} nuitée(s)</p>
      </v-col>
      <v-col cols="12" lg="6" class="ma-0 px-5 py-3 pl-0">
        <div class="d-flex flex-column pa-2 booking__container__people">
          <div class="d-flex flex-wrap ga-5">
            <div class="d-flex">
              <p>Adultes</p>
              <v-icon icon="mdi-minus-box-outline" @click="substractNumber('adultNumber')"></v-icon>
              {{ adultNumber }}
              {{ console.log(adultNumber) }}
              <v-icon icon="mdi-plus-box-outline" @click="addNumber('adultNumber')"></v-icon>
            </div>
            <div class="d-flex">
              <p>Enfants</p>
              <v-icon icon="mdi-information-variant-circle-outline"></v-icon>
              <v-icon icon="mdi-minus-box-outline" @click="substractNumber('childNumber')"></v-icon>
              {{ childNumber }}
              <v-icon icon="mdi-plus-box-outline" @click="addNumber('childNumber')"></v-icon>
            </div>
            <div class="d-flex">
              <p>Bébés</p>
              <v-icon icon="mdi-information-variant-circle-outline"></v-icon>
              <v-icon icon="mdi-minus-box-outline" @click="substractNumber('babyNumber')"></v-icon>
              {{ babyNumber }}
              <v-icon icon="mdi-plus-box-outline" @click="addNumber('babyNumber')"></v-icon>
            </div>
          </div>
          <div>
            dont
            <v-icon
              icon="mdi-minus-box-outline"
              @click="substractNumber('couplesAmongAdults')"
            ></v-icon
            >{{ couplesAmongAdults
            }}<v-icon icon="mdi-plus-box-outline" @click="addCoupleNumber()"></v-icon> couples
            <v-tooltip text="Pour connaître les besoins en lits doubles" class="ma-0 pa-0">
              <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" variant="text">
                  <v-icon> mdi-information-variant-circle-outline </v-icon>
                </v-btn>
              </template>
            </v-tooltip>
          </div>
        </div>
        <p class="pb-0">Pour {{ totalNumber() }} personnes</p>
      </v-col>
      <v-col cols="12" lg="3" class="ma-0 px-5 py-3 pl-0">
        <div class="pa-2 d-flex justify-center align-center booking__container__valid">
          <p>Rechercher les disponibilités</p>
        </div>
        <p class="pb-0"></p>
      </v-col>
    </v-row>
  </div>
</template>

<style lang="scss">
.datepicker {
  z-index: 150;
  position: absolute;
  bottom: 120px;
}

.booking {
  position: relative;

  &__container {
    border: 2px solid var(--secondary--logo--color);

    &__date {
      border: 2px solid var(--secondary--logo--color);
    }

    &__people {
      background-color: var(--secondary-clear-background-color);
    }

    &__valid {
      height: 70px;
      border: 2px solid var(--secondary--logo--color);
    }
  }
}

@media (max-width: 1024px) {
  .booking {
    &__container {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
s
