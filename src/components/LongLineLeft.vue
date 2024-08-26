<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LongLineLeft'
})
</script>

<template>
  <div class="d-flex justify-start">
    <div class="mt-1 mb-8 long__line__left"></div>
  </div>
</template>

<style lang="scss">
.long__line__left {
  width: 120px;
  height: 2px;
  background-color: var(--secondary--logo--color);
}
</style>
