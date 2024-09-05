<script lang="ts">
import { defineComponent } from 'vue'
import UserNumberBox from '@/components/Booking/UserNumberBox.vue'

export default defineComponent({
  name: 'RoomSelection',
  components: {
    UserNumberBox
  }
})
</script>

<template>
  <div class="room__selection">
    <h1>Votre réservation</h1>
    <h2>Choix de chambre</h2>
    <div class="room__selection__summary">
      <UserNumberBox />
      <div>
        <h2>Ajouter une chambre</h2>
        <div>
          <h3>Chambre 1</h3>
          <p>Un lit double et deux lits simples</p>
          <v-icon icon="mdi-account-multiple"></v-icon>
          <v-icon icon="mdi-account"></v-icon>
          <v-icon icon="mdi-account"></v-icon>
          <p>22,5 m²</p>
          <p>90 euros/nuit</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.room__selection {
  &__summary {
    max-width: 1440px;
    margin: auto;
    padding: 0 50px;

    &__box {
      background-color: var(--secondary-clear-background-color);
      border: solid 2px var(--secondary-dark-background-color);
    }
  }
}
</style>
