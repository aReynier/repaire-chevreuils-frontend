<script lang="ts">
import { defineComponent } from 'vue'

import leafDeer from '@/assets/pictures/deer-leaf-lukas-kadava-unsplash.png'
import googleMaps from '@/assets/pictures/google-maps.jpg'

export default defineComponent({
  name: 'FooterView',
  components: {},
  data() {
    return {
      leafDeer,
      googleMaps
    }
  }
})
</script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <v-row class="py-9 align-end footer__top__container">
        <v-col>
          <v-img class="footer__top__image" :src="leafDeer" alt="Photo d'un chevreuil" />
        </v-col>
        <v-col>
          <h2>Nous retrouver</h2>
          <div>
            <v-icon icon=""></v-icon>
            <p>+33 3 33 33 33 3A</p>
          </div>
          <div>
            <v-icon icon=""></v-icon>
            <p>lefebvre.chevreuil@fictif.com</p>
          </div>
          <div>
            <v-icon icon=""></v-icon>
            <p>
              Le repaire des chevreuils<br />
              Marie et Jean Lefebvre<br />
              Chemin de la corne<br />
              59 620 Aulnoye-Aymeries
            </p>
          </div>
          <p>
            Attention : Cette maison d’hôte est aussi réelle qu'une licorne, coordonnées incluses.
            Ne vous y rendez pas ;)
          </p>
          <p>
            Vous pouvez faire connaissance avec la créatrice de ce site via son LinkedIn ci-dessous
          </p>
          <div>
            <v-icon icon=""></v-icon>
            <p>Reynier Aurore - développeuse web & graphiste</p>
          </div>
        </v-col>
        <v-col>
          <v-img class="footer__top__image" :src="googleMaps" alt="capture google maps" />
        </v-col>
      </v-row>
    </div>
    <div class="footer__bottom">
      <v-row class="py-3 footer__bottom__container flex-column align-center">
        <div class="d-flex">
          <p>Mentions légales</p>
          <p>-</p>
          <p>conditions générales de vente</p>
        </div>
        <div>
          <p>2024 - Reynier Aurore</p>
        </div>
      </v-row>
    </div>
  </footer>
</template>

<style lang="scss">
.footer {
  &__top {
    background-color: var(--secondary-clear-background-color);

    &__container {
      max-width: 1560px;
      padding: 0 120px;
      margin: auto;
    }

    &__image {
      max-height: 380px;
    }
  }

  &__bottom {
    background-color: var(--main-logo-color);
    color: var(--main-background-color);
  }
}

@media (max-width: 1024px) {
  .footer {
    &__top {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
