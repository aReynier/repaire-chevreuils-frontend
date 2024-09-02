<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LongLineCenter'
})
</script>

<template>
  <div class="d-flex justify-center">
    <div class="long__line__center"></div>
  </div>
</template>

<style lang="scss">
.long__line__center {
  width: 300px;
  height: 2px;
  background-color: var(--secondary--logo--color);
}
</style>
