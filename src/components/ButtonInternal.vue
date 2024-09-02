<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PictogramContainer',
  props: {
    buttonTitle: {
      type: String,
      required: true
    },
    buttonInternalLink: {
      type: String,
      required: false
    }
  }
})
</script>

<template>
  <v-btn class="pt-3 pb-8 button" variant="text" :to="buttonInternalLink">{{ buttonTitle }}</v-btn>
</template>

<style lang="scss">
.button {
  width: 237px;
  text-transform: lowercase;
  border: 2px solid var(--secondary--logo--color);
  background-color: var(--main-background-color);
  border-radius: 0;
  font-family: Lora-MediumItalic, serif;
}
</style>
