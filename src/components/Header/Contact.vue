<script lang="ts">
import { defineComponent } from 'vue'
import logoDesktop from '@/assets/logos/logo-repaire-chevreuils-desktop.png'

export default defineComponent({
  name: 'ContactComponent',
  data() {
    return {
      logoDesktop
    }
  }
})
</script>

<template>
  <div class="contact">
    <div class="contact__line">
      <v-icon icon="mdi-phone-outline"></v-icon>
      <p>+33 3 33 33 33 3A</p>
    </div>
    <div class="contact__line">
      <v-icon icon="mdi-email-outline"></v-icon>
      <p class="contact__email">lefebvre.chevreuils@mail.com</p>
    </div>
  </div>
</template>

<style lang="scss">
.contact {
  color: var(--main-background-color);
  padding: 10px 15px;
  background-color: var(--secondary-dark-background-color);
  box-shadow: 0 0 0 3px var(--secondary-clear-background-color);
  outline: 5px dashed var(--secondary-clear-background-color);

  &__line {
    display: flex;
    gap: 10px;
  }

  &__email {
    letter-spacing: -0.5px;
  }
}

@media (max-width: 1600px) {
  .contact {
    font-size: 10px;
  }
}
</style>
