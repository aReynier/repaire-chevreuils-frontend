<script lang="ts">
import { defineComponent } from 'vue'
import LongLineCenter from '@/components/LongLineCenter.vue'
import sleepyDeer from '@/assets/illustrations/sleepy-deer.png'

export default defineComponent({
  name: 'BottomIllustration',
  components: {
    LongLineCenter
  },
  data() {
    return {
      sleepyDeer
    }
  }
})
</script>

<template>
  <div class="my-12 d-flex flex-column justify-center bottom">
    <LongLineCenter />
    <v-img
      class="my-6 bottom__illustration"
      :src="sleepyDeer"
      alt="Illustration d'un chevreuil assoupi"
    />
    <LongLineCenter />
  </div>
</template>

<style lang="scss">
.bottom {
  max-width: 260px;
  margin: auto;
}
</style>
