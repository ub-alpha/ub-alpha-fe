<template>
  <div id="planet-list">
    <div
      id="carouselExampleControls"
      class="carousel slide"
      data-bs-ride="false"
    >
      <div class="carousel-inner">
        <PlanetItem
          v-for="(planet, index) in planets"
          :index="index"
          :key="planet.id"
          :planet="planet"
        ></PlanetItem>
        <AddPlanetItem
          :class="`${planets.length == 0 ? 'active' : ''}`"
        ></AddPlanetItem>
      </div>
      <template v-if="planets.length > 0">
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </template>
    </div>
  </div>
</template>

<script>
import PlanetItem from "@/components/PlanetItem.vue";
import AddPlanetItem from "./AddPlanetItem.vue";
export default {
  components: {PlanetItem, AddPlanetItem},
  computed: {
    planets() {
      return this.$store.state.planets;
    },
  },
};
</script>

<style scoped>
#planet-list {
  width: 100%;
  padding-bottom: 100%;
  margin: 1rem 0 3.9rem;
  position: relative;
}
.carousel.slide {
  position: absolute;
  width: 100%;
  height: 100%;
}

.carousel-inner {
  height: 100%;
  overflow: visible;
}
</style>
