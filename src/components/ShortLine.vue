<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ShortLine'
})
</script>

<template>
  <div class="d-flex justify-center">
    <div class="my-2 short__line"></div>
  </div>
</template>

<style lang="scss">
.short__line {
  width: 30px !important;
  height: 2px;
  background-color: var(--secondary--logo--color);
}
</style>
