<script lang="ts">
import { defineComponent } from 'vue'
import ShortLine from '@/components/ShortLine.vue'

export default defineComponent({
  name: 'PictogramContainer',
  components: {
    ShortLine
  },
  props: {
    pictogramName: {
      type: String,
      required: true
    },
    pictogramAltText: {
      type: String,
      required: true
    },
    pictogramLegend: {
      type: String,
      required: true
    },
    pictogramSubLegend: {
      type: String,
      required: true
    }
  }
})
</script>

<template>
  <div class="my-3 pictogram d-flex flex-column justify-center text-center">
    <v-img class="pictogram__image" :src="pictogramName" :alt="pictogramAltText" />
    <ShortLine />
    <p class="pictogram__legend">{{ pictogramLegend }}</p>
    <div class="test"></div>
    <p class="pictogram__sublegend">{{ pictogramSubLegend }}</p>
  </div>
</template>

<style lang="scss">
.pictogram {
  &__image {
    height: 50px !important;
    max-height: 50px !important;
  }

  &__legend {
    font-family: serif;
  }

  &__sublegend {
    font-family: serif;
  }
}
</style>
