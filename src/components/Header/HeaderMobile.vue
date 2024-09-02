<script lang="ts">
import { defineComponent } from 'vue'
import logo from '@/assets/logos/logo-repaire-chevreuils-desktop.png'
import Contact from '@/components/Header/Contact.vue'

export default defineComponent({
  name: 'HeaderMobile',
  components: {
    Contact
  },
  data() {
    return {
      logo,
      isMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenu = !this.isMenu
    }
  }
})
</script>

<template>
  <div class="HeaderMobile">
    <div class="HeaderMobile__top d-flex align-start justify-space-between">
      <div class="d-flex">
        <v-icon icon="mdi-menu" @click="toggleMenu"></v-icon>
        <v-img class="HeaderMobile__top__logo" :src="logo" alt="Logo Le repaire des chevreuils" />
      </div>
      <Contact />
    </div>
    <nav v-if="isMenu" class="HeaderMobile__background d-flex flex-column">
      <RouterLink class="HeaderMobile__link" to="/">
        <div class="HeaderMobile__link__content HeaderMobile__link__content--activated">
          Accueil
        </div>
      </RouterLink>
      <RouterLink class="HeaderMobile__link" to="/">
        <div class="HeaderMobile__link__content">L'établissement</div>
      </RouterLink>
      <RouterLink class="HeaderMobile__link" to="/">
        <div class="HeaderMobile__link__content">Les chambres</div>
      </RouterLink>
      <RouterLink class="HeaderMobile__link" to="/">
        <div class="HeaderMobile__link__content">Les activités du gîte</div>
      </RouterLink>
      <RouterLink class="HeaderMobile__link" to="/">
        <div class="HeaderMobile__link__content">La région</div>
      </RouterLink>
      <RouterLink class="HeaderMobile__link HeaderMobile__link__booking" to="/">
        <div class="HeaderMobile__link__content">Réservation/contact</div>
      </RouterLink>
    </nav>
  </div>
</template>

<style lang="scss">
.HeaderMobile {
  font-family: Lora-MediumItalic, serif;
  font-size: 1.125rem;

  &__top {
    margin: 20px;

    &__logo {
      height: 100px;
      width: 200px;
    }
  }

  &__background {
    padding: 20px;
    z-index: 100;
    width: 100%;
    position: absolute;
    background-color: var(--tertiary-clear-background-color);
    gap: 10px;
  }

  &__link {
    font-size: 1.125rem;

    &__content {
      padding-bottom: 2px;

      &--activated {
        font-family: Lora-BoldItalic, serif;
      }
    }

    &__booking {
      &--activated {
        font-family: Lora-BoldItalic, serif;
      }
    }
  }
}

@media (min-width: 1024px) {
  .HeaderMobile {
    display: none !important;
  }
}

@media (max-width: 768px) {
}
</style>
