<script lang="ts">
import { defineComponent } from 'vue'
import logoDesktop from '@/assets/logos/logo-repaire-chevreuils-desktop.png'
import Contact from '@/components/Header/Contact.vue'

export default defineComponent({
  name: 'LogoAndContact',
  components: {
    Contact
  },
  data() {
    return {
      logoDesktop
    }
  }
})
</script>

<template>
  <main class="logoAndContact">
    <div>
      <img :src="logoDesktop" alt="logo" />
    </div>
    <Contact />
  </main>
</template>

<style lang="scss">
.logoAndContact {
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

@media (max-width: 1024px) {
  .logoAndContact {
    display: none;
  }
}
</style>
