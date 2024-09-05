<script lang="ts">
import { defineComponent, computed } from 'vue'
import 'v-calendar/style.css'
import { VDateInput } from 'vuetify/labs/VDateInput'
import { useBookingStore } from '@/stores/booking'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'

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
    }
  },
  setup() {
    const bookingStore = useBookingStore()
    const adultNumber = computed(() => bookingStore.adultNumber)
    const couplesAmongAdults = computed(() => bookingStore.couplesAmongAdults)
    const childNumber = computed(() => bookingStore.childNumber)
    const babyNumber = computed(() => bookingStore.babyNumber)

    const { substractNumber, addNumber, addCoupleNumber, totalNumber } = bookingStore

    return {
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
  methods: {},
  computed: {
    calculateNightsNumber() {
      if (this.dateRange === null || this.dateRange.length < 2) {
        return 0
      }

      let startDate = this.dateRange[1]
      const endDate = this.dateRange[this.dateRange.length - 1]

      //for now bug patch when there is only one day interval
      let result = Math.ceil(
        Math.abs(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
      )
      if (result === 0) {
        return 1
      }
      return result
    }
  },
  watch: {
    dateRange(newValue) {
      if (newValue.length >= 2) {
        //date problem when there is a one day interval and where it's more, temporary patch for now
        const startDate = format(
          new Date(newValue[1].setDate(newValue[1].getDate() - 1)),
          'eeee d MMMM yyyy',
          { locale: fr }
        )
        const endDate = format(newValue[newValue.length - 1], 'eeee d MMMM yyyy', {
          locale: fr
        })

        // Update store with the new dates
        const bookingStore = useBookingStore()
        bookingStore.setDates(startDate, endDate)

        console.log(bookingStore.arrivalDate)
        console.log(bookingStore.departureDate)
      }
    }
  }
})
</script>

<template>
  <div class="test d-flex justify-center"></div>
  <div class="booking">
    <v-row class="ma-0 pa-0 booking__container">
      <v-col cols="12" lg="3" class="ma-0 px-5 py-3">
        <!-- the visual schedule have an hole when the interval is larger than three -->
        <v-date-input
          class="booking__container__date"
          v-model="dateRange"
          label="Sélectionner période"
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
        <v-btn
          class="pa-2 d-flex justify-center align-center booking__container__valid"
          :to="{ name: 'roomSelection' }"
          variant="text"
        >
          <p>Rechercher les disponibilités</p>
        </v-btn>
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
      height: 70px !important;
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
