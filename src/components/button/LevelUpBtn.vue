<template>
  <button
    v-if="planet.point != planet.max_point"
    class="level-up-wrap"
    @click="levelUpSpace"
  >
    <div class="level-up">
      <img :src="require('@/assets/level-up.svg')" alt="레벨업 버튼" />
    </div>
    <div class="num">
      <span>10</span
      ><img :src="require('@/assets/point.svg')" alt="레벨업코인" />
    </div>
  </button>
</template>

<script>
export default {
  props: ["planet"],
  data() {
    return {};
  },

  methods: {
    levelUpSpace() {
      this.$store.dispatch("ADD_POINT", this.planet.id).then(() => {});
    },
  },
};
</script>

<style scoped>
.level-up-wrap {
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--point);
  position: absolute;
  bottom: -6.5rem;
  left: calc(50% - 2.25rem);
}
.level-up-wrap .num {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  justify-content: center;
}
.level-up-wrap .num img {
  width: 1rem;
}
.level-up {
  width: 4.5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--modal-white);
  border-radius: 1rem;
}
.level-up img {
  width: 2rem;
}
</style>
