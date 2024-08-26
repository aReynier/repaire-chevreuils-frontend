<script lang="ts">
import { defineComponent } from 'vue'
import NavBarDesktop from '@/components/Header/NavBarDesktop.vue'
import LogoAndContact from '@/components/Header/LogoAndContact.vue'
import HeaderMobile from '@/components/Header/HeaderMobile.vue'
import BookingBox from '@/components/BookingBox.vue'
import PictogramContainer from '@/components/HomeView/PictogramContainer.vue'
import LongLineLeft from '@/components/LongLineLeft.vue'
import LongLineCenter from '@/components/LongLineCenter.vue'
import BottomIllustation from '@/components/BottomIllustation.vue'
import FooterView from '@/components/Footer/FooterView.vue'
import ButtonInternal from '@/components/ButtonInternal.vue'

import decorativeLeaf1 from '@/assets/illustrations/decorative-leaf-1.png'
import decorativeLeaf2 from '@/assets/illustrations/decorative-leaf-2.png'
import buildingMainView from '@/assets/pictures/Ferme-Escamin-Baisieux-Pierre-Andre-Leclercq-Wikimedia.png'
import hotelPictures from '@/assets/pictures/hotel-pictures.png'
import parc from '@/assets/pictograms/parc.png'
import shower from '@/assets/pictograms/shower.png'
import chimney from '@/assets/pictograms/chimney.png'
import cooking from '@/assets/pictograms/cooking.png'
import wifi from '@/assets/pictograms/wifi.png'
import owl from '@/assets/pictograms/owl.png'
import catAndDog from '@/assets/pictograms/cat-and-dog.png'
import washingMachine from '@/assets/pictograms/washing-machine.png'
import maisonHoteCadre from '@/assets/pictures/maison-hote-cadre.png'
import chambrePommier from '@/assets/pictures/chambre-pommier-cadre-calum-lewis-unsplash.png'
import chambreBosquet from '@/assets/pictures/chambre-bosquet-cadre-vijendranath-unsplash.png'
import tinyHouse from '@/assets/pictures/chambre-bosquet-cadre-vijendranath-unsplash.png'
import chambreClairiere from '@/assets/pictures/chambre-clairiere-cadre.png'
import leafSeparator from '@/assets/illustrations/leaf-separator.png'
import paysageHautsDeFrance from '@/assets/pictures/Godewaersvelde-french-flanders-landscapes-Hauts-de-France-Pierre-André- Wikimedia-Commons.png'
import diapo1 from '@/assets/pictures/diapo-1.jpg'
import diapo2 from '@/assets/pictures/diapo-2.jpg'
import diapo3 from '@/assets/pictures/diapo-3.jpg'
import diapo4 from '@/assets/pictures/diapo-4.jpg'
import diapo5 from '@/assets/pictures/diapo-5.jpg'
import diapo6 from '@/assets/pictures/diapo-6.jpg'
import diapo7 from '@/assets/pictures/diapo-7.jpg'
import decorativeLeafMirror1 from '@/assets/illustrations/decorative-leaf-mirror-1.png'
import decorativeLeafMirror2 from '@/assets/illustrations/decorative-leaf-mirror-2.png'
import decorativeLeafMirror3 from '@/assets/illustrations/decorative-leaf-mirror-3.png'
import decorativeLeafMirror4 from '@/assets/illustrations/decorative-leaf-mirror-4.png'
import decorativeLeafMirror5 from '@/assets/illustrations/decorative-leaf-mirror-5.png'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBarDesktop,
    LogoAndContact,
    HeaderMobile,
    BookingBox,
    ButtonInternal,
    PictogramContainer,
    LongLineLeft,
    LongLineCenter,
    BottomIllustation,
    FooterView
  },
  data() {
    return {
      decorativeLeaf1,
      decorativeLeaf2,
      buildingMainView,
      hotelPictures,
      parc,
      shower,
      chimney,
      cooking,
      wifi,
      owl,
      catAndDog,
      washingMachine,
      maisonHoteCadre,
      chambrePommier,
      chambreBosquet,
      tinyHouse,
      chambreClairiere,
      leafSeparator,
      paysageHautsDeFrance,
      diapo1,
      diapo2,
      diapo3,
      diapo4,
      diapo5,
      diapo6,
      diapo7,
      decorativeLeafMirror1,
      decorativeLeafMirror2,
      decorativeLeafMirror3,
      decorativeLeafMirror4,
      decorativeLeafMirror5
    }
  }
})
</script>

<template>
  <NavBarDesktop />
  <HeaderMobile />
  <main class="home">
    <LogoAndContact />
    <section class="d-flex flex-column home__introduction">
      <article>
        <div class="home__introduction__titles">
          <h1>Plus qu’une maison d’hôte</h1>
          <h2 class="home__introduction__subtitle">
            Une escapade enchantée en lisière de la forêt de Mormal
          </h2>
          <img
            class="home__introduction__illustration"
            :src="decorativeLeaf1"
            alt="Dessin de feuilles de chênes avec un gland"
          />
        </div>
      </article>
      <div class="text-center home__introduction__grow">
        <img
          :src="buildingMainView"
          alt="Vue de l'entrée principale de la maison d'hôte, un grand bâtiment en brique avec pelouse et parking"
        />
      </div>
      <article>
        <h2>Préparez votre venue</h2>
        <BookingBox />
      </article>
    </section>
    <article class="d-flex my-15 align-center home__presentation">
      <div class="w-50">
        <div class="w-50 mx-auto home__presentation__paragraph">
          <v-img
            class="home__presentation__paragraph__decoration"
            :src="decorativeLeaf2"
            alt="dessin de feuille décorative"
          />
          <h2>Le repaire</h2>
          <LongLineLeft />
          <p class="mb-6">
            Le Repère du Chevreuil est une chambre d’hôtes nichée en pleine nature, idéale pour se
            ressourcer loin du tumulte quotidien. Ce lieu unique combine confort moderne et ambiance
            chaleureuse, avec un soin particulier apporté aux détails pour un séjour apaisant. Entre
            promenades en forêt et moments de détente dans les espaces communs, chaque instant ici
            invite à la déconnexion. Que vous veniez en famille, entre amis ou en couple, le Repère
            du Chevreuil vous promet une escapade authentique et revitalisante.
          </p>
          <ButtonInternal buttonTitle="Page de l'établissement" />
        </div>
      </div>
      <div class="w-50">
        <v-img :src="hotelPictures" alt="Photos de la maison d'hôte" />
      </div>
    </article>
    <article class="w-100 my-12 home__diaporama">
      <div class="d-flex wrap ga-5 home__diaporama__container">
        <v-img cover class="home__diaporama__image" :src="diapo1" />
        <v-img cover class="home__diaporama__image" :src="diapo2" />
        <v-img cover class="home__diaporama__image" :src="diapo3" />
        <v-img cover class="home__diaporama__image" :src="diapo4" />
        <v-img cover class="home__diaporama__image" :src="diapo5" />
        <v-img cover class="home__diaporama__image" :src="diapo6" />
        <v-img cover class="home__diaporama__image" :src="diapo7" />
      </div>
    </article>
    <LongLineCenter />
    <article class="my-12 py-6 home__caracteristics">
      <div class="home__caracteristics__global">
        <div class="home__caracteristics__container">
          <PictogramContainer
            :pictogramName="parc"
            pictogramAltText="pictogramme de parc"
            pictogramLegend="Accès jardin et espace boisé"
            pictogramSubLegend="Un coin de nature paisible"
          />
          <PictogramContainer
            :pictogramName="shower"
            pictogramAltText="pictogramme de douche"
            pictogramLegend="Salle de bain privative"
            pictogramSubLegend="Intimité préservée"
          />
          <PictogramContainer
            :pictogramName="chimney"
            pictogramAltText="pictogramme de cheminée"
            pictogramLegend="Salle commune conviviale"
            pictogramSubLegend="Lieu de détente et échange"
          />
          <PictogramContainer
            :pictogramName="cooking"
            pictogramAltText="pictogramme de cuisine"
            pictogramLegend="Ateliers cuisine réguliers"
            pictogramSubLegend="Découverte culinaire et convivialité"
          />
          <PictogramContainer
            :pictogramName="wifi"
            pictogramAltText="pictogramme wifi"
            pictogramLegend="Accès Wi-Fi gratuit"
            pictogramSubLegend="Pour qui ne peut décrocher"
          />
          <PictogramContainer
            :pictogramName="owl"
            pictogramAltText="pictogramme de chouette"
            pictogramLegend="Horaires d’entrée flexible"
            pictogramSubLegend="Liberté d’aller et venir"
          />
          <PictogramContainer
            :pictogramName="catAndDog"
            pictogramAltText="pictogramme de chien et chat"
            pictogramLegend="Animaux autorisés"
            pictogramSubLegend="Toute la famille réunie"
          />
          <PictogramContainer
            :pictogramName="washingMachine"
            pictogramAltText="pictogramme de machine à laver"
            pictogramLegend="Machine à laver en libre accès"
            pictogramSubLegend="Pratique pour les longs séjours"
          />
        </div>
        <ButtonInternal class="mt-6" buttonTitle="Détails activités et services" />
      </div>
    </article>
    <LongLineCenter />
    <article class="my-12 d-flex align-center justify-space-between home__rooms">
      <div class="pa-9 home__rooms__card home__rooms__secondcard">
        <div class="d-flex flex-column ga-5 home__rooms__inner">
          <v-img class="home__rooms__inner__decorative2" :src="decorativeLeafMirror2" />
          <h2>Côté ferme</h2>
          <v-img :src="maisonHoteCadre" alt="Vue de la partie ancienne de la maison d'hôte" />
          <v-img :src="chambrePommier" alt="Une des chambres de la maison d'hôte" />
        </div>
      </div>
      <div class="pa-9 home__rooms__card home__rooms__maincard">
        <div class="home__rooms__inner">
          <v-img class="home__rooms__inner__decorative4" :src="decorativeLeafMirror4" />
          <v-img class="home__rooms__inner__decorative5" :src="decorativeLeafMirror5" />
          <h2>Les chambres</h2>
          <LongLineLeft />
          <p>
            Les chambres de cette propriété offrent une expérience alliant l’authenticité du passé
            au confort d'aujourd'hui. Côté ferme, trois chambres dans un bâtiment du XVIIIe siècle
            mêlent charme d'autrefois et confort chaleureux. Pour un séjour insolite, des tiny
            houses en pleine nature offrent un cocon contemporain alliant élégance et sérénité.
            Chaque espace promet un séjour paisible dans un cadre accueillant et naturel.
          </p>
          <v-img class="my-6" :src="chambreBosquet" alt="Une des chambres de la maison d'hôte" />
          <ButtonInternal buttonTitle="Voir les chambres" />
        </div>
      </div>
      <div class="pa-9 home__rooms__card home__rooms__secondcard">
        <div class="home__rooms__inner d-flex flex-column ga-5">
          <v-img class="home__rooms__inner__decorative3" :src="decorativeLeafMirror3" />
          <h2>Les tiny houses</h2>
          <v-img :src="tinyHouse" alt="Une des tiny house de la maison d'hôte" />
          <v-img :src="chambreClairiere" alt="Une des chambres de la maison d'hôte" />
        </div>
      </div>
    </article>
    <v-img
      class="mx-auto my-12 home__separator"
      :src="leafSeparator"
      alt="ligne décorative composée de feuilles"
    />
    <article class="d-flex home__region">
      <div class="w-50 d-flex align-center home__region__card">
        <div class="w-50 py-6 pl-6">
          <h2>L'avesnois</h2>
          <LongLineLeft />
          <p>
            L'Avesnois, niché au cœur des Hauts-de-France, est un véritable écrin de nature, où la
            forêt de Mormal offre un havre de paix. Au-delà de cette vaste étendue boisée, la région
            dévoile des trésors comme Maroilles, célèbre pour son fromage au goût inimitable, ou Le
            Quesnoy, charmante cité fortifiée. Entre bocages verdoyants, moulins pittoresques et
            rivières sinueuses, l'Avesnois invite à des balades paisibles dans un cadre bucolique,
            où authenticité et sérénité se rencontrent à chaque détour.
          </p>
          <ButtonInternal class="mt-6" buttonTitle="Découvrir la région" />
        </div>
        <div class="mx-3 home__region__card__separator"></div>
        <div></div>
      </div>
      <div class="w-50 home__region__image">
        <v-img :src="paysageHautsDeFrance" alt="Paysge des hauts-de-France" />
      </div>
    </article>
    <BottomIllustation />
    <FooterView />
  </main>
</template>

<style lang="scss">
.home {
  &__subtitle {
    font-family: Lora-MediumItalic, serif;
    font-size: 2rem;
  }

  &__long__line {
    width: 300px;
    height: 2px;
    background-color: var(--secondary--logo--color);
  }

  &__introduction {
    height: calc(100vh - 180px);
    max-width: 1560px;
    padding: 0 120px;
    margin: auto;

    &__titles {
      position: relative;
    }

    &__illustration {
      position: absolute;
      width: 16.67%;
      opacity: 0.75;
      right: 0px;
      top: 0px;
    }

    &__grow {
      margin: 20px;
      height: 0px;
      flex: 1 1 0;

      & img {
        max-height: 100%;
        width: auto;
        object-fit: cover;
      }
    }
  }

  &__presentation {
    max-width: 1560px;
    padding: 0 120px;
    margin: auto;

    &__paragraph {
      position: relative;

      &__decoration {
        position: absolute;
        width: 40%;
        left: -90px;
        top: -50px;
      }
    }
  }

  &__diaporama {
    height: 200px;
    overflow-x: auto;
    overflow-y: hidden;

    &__container {
      height: 200px;
      width: auto !important;
    }

    &__image {
      height: 200px;
      width: 300px;
    }
  }

  &__caracteristics {
    background-color: var(--secondary-clear-background-color);

    &__global {
      max-width: 1080px;
      padding: 0 120px;
      margin: auto;
    }

    &__container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__rooms {
    max-width: 1560px;
    padding: 0 120px;
    margin: auto;

    &__card {
      background-color: var(--secondary-clear-background-color);
    }

    &__inner {
      position: relative;

      &__decorative2 {
        z-index: -1;
        width: 125px;
        position: absolute;
        top: 0px;
        left: -120px;
      }

      &__decorative3 {
        z-index: -1;
        width: 125px;
        position: absolute;
        top: 0px;
        right: -120px;
      }

      &__decorative4 {
        z-index: -1;
        position: absolute;
        width: 50%;
        top: 10px;
        left: -150px;
      }

      &__decorative5 {
        z-index: -1;
        position: absolute;
        width: 50%;
        top: 10px;
        right: -150px;
      }
    }

    &__maincard {
      width: 42%;
    }

    &__secondcard {
      width: 25%;
    }
  }

  &__separator {
    width: 600px;
  }

  &__region {
    max-width: 1440px;
    margin: auto;

    &__card {
      border: 20px solid var(--tertiary-dark-background-color);
      position: relative;
      left: 120px;

      &__separator {
        height: 80%;
        width: 2px;
        background-color: var(--tertiary-dark-background-color);
      }
    }

    &__image {
      position: relative;
      right: 120px;
      top: 50px;
    }
  }
}

@media (max-width: 1600px) {
  .home {
    &__introduction {
      padding: 0 20px;
    }

    &__presentation {
      padding: 0 20px;

      &__paragraph {
        width: 75% !important;
      }
    }

    &__rooms {
      padding: 0 20px;
    }

    &__region {
      padding: 0 20px;
    }
  }
}

@media (max-width: 1024px) {
  .home {
    &__presentation {
      flex-direction: column-reverse;
    }
    &__paragraph {
      width: 100% !important;
    }

    &__caracteristics {
      &__container {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    &__rooms {
      flex-direction: column;
      gap: 30px;

      &__maincard {
        width: 80% !important;
      }

      &__secondcard {
        width: 80% !important;
      }
    }

    &__region {
      flex-direction: column;

      &__card {
        width: 100% !important;
      }

      &__image {
        width: 100% !important;
      }
    }
  }
}

@media (max-width: 768px) {
}
</style>
