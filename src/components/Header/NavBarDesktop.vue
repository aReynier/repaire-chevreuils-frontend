<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBarDesktop',
  data() {
    return {
      isCollapsible: false
    }
  },
  methods: {
    toggleCollapsible() {
      this.isCollapsible = !this.isCollapsible
    }
  }
})
</script>

<template>
  <nav class="NavBarDesktop d-flex justify-center">
    <div class="d-flex NavBarDesktop__background">
      <RouterLink class="NavBarDesktop__link" to="/">
        <div class="NavBarDesktop__link__content NavBarDesktop__link__content--activated">
          Accueil
        </div>
      </RouterLink>
      <div @click="toggleCollapsible">
        <div class="NavBarDesktop__link NavBarDesktop__link__content">L'établissement</div>
        <div v-if="isCollapsible" class="collapsible">
          <RouterLink class="NavBarDesktop__link" to="/">
            <div class="NavBarDesktop__link__content">L'établissement</div>
          </RouterLink>
          <RouterLink class="NavBarDesktop__link" to="/">
            <div class="NavBarDesktop__link__content">Les chambres</div>
          </RouterLink>
          <RouterLink class="NavBarDesktop__link" to="/">
            <div class="NavBarDesktop__link__content">Les activités du gîte</div>
          </RouterLink>
        </div>
      </div>
      <RouterLink class="NavBarDesktop__link" to="/">
        <div class="NavBarDesktop__link__content">La région</div>
      </RouterLink>
      <RouterLink class="NavBarDesktop__link NavBarDesktop__link__booking" to="/">
        <div class="NavBarDesktop__link__content">Réservation/contact</div>
      </RouterLink>
    </div>
  </nav>
</template>

<style lang="scss">
.collapsible {
  position: absolute;
  background-color: var(--tertiary-clear-background-color);
  margin-top: 10px;
  padding: 10px;
}

.NavBarDesktop {
  z-index: 100;
  width: 100%;
  position: fixed;
  font-family: Lora-MediumItalic, serif;
  font-size: 1.125rem;

  &__background {
    padding: 0 20px 0 20px;
    background-color: var(--main-background-color);
    gap: 30px;
  }

  &__link {
    padding: 30px 20px 8px 20px;

    &__content {
      padding-bottom: 2px;

      &--activated {
        border-bottom: 1px solid var(--secondary--logo--color);
        font-family: Lora-BoldItalic, serif;
      }
    }

    &__booking {
      color: var(--main-background-color);
      background-color: var(--secondary-dark-background-color);
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 2px;

      &:hover {
        color: white;
      }

      &--activated {
        border-bottom: 1px solid var(--main-background-color);
        font-family: Lora-BoldItalic, serif;
      }
    }
  }
}

@media (max-width: 1600px) {
  .NavBarDesktop {
    font-size: 14px;

    &__background {
      gap: 5px;
    }

    &__link {
      padding-top: 30px;
      padding-left: 10px;
      padding-right: 10px;
    }
  }
}

@media (max-width: 1024px) {
  .NavBarDesktop {
    display: none !important;
  }
}

@media (max-width: 768px) {
}
</style>
