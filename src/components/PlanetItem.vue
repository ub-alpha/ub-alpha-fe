<template>
  <div :class="`planet ${index === 0 ? `active` : ''} carousel-item`">
    <div
      :class="`circle-wrap ${planet.point == planet.max_point ? 'max' : ''}`"
    >
      <template v-if="planet.point != planet.max_point">
        <div class="point-num">{{ planet.point }}/{{ planet.max_point }}</div>
      </template>
      <template v-else>
        <div class="point-num">MAX</div>
      </template>
      <ve-progress
        :process="[-100, 100]"
        id="#point-state-bar"
        color="#E3F4FD"
        empty-color="#394F7D"
        :thickness="border"
        :empty-thickness="`${border}`"
        :progress="(planet.point / planet.max_point) * 100"
        :size="stateBarWidth"
      >
        <img
          class="space-img"
          :src="require(`@/assets/${planet.planet_img}`)"
          alt="행성 이미지"
        />
      </ve-progress>
    </div>
    <LevelUpBtn :planet="planet"></LevelUpBtn>

    <button
      data-bs-toggle="modal"
      data-bs-target="#slideUpModal"
      v-if="planet.point == planet.max_point"
      :class="`exchange ${planet.status === 'used' ? 'used' : ''}`"
      @click="saveTargetId"
      :disabled="planet.status === 'used'"
    >
      {{ planet.status == "used" ? "교환완료" : "교환하기" }}
    </button>
    <img class="bgimg" :src="require('@/assets/background-image.png')" alt="" />
  </div>
</template>

<script>
import {veProgress} from "vue-ellipse-progress";
import LevelUpBtn from "./button/LevelUpBtn.vue";

export default {
  props: ["planet", "index"],
  components: {veProgress, LevelUpBtn},
  data() {
    return {
      stateBarWidth: 0,
      border: 0,
    };
  },
  created() {
    this.stateBarWidth = ($("#app").innerWidth() * 250) / 320;
    this.border = parseInt($("html").css("fontSize")) * 0.8;
  },
  methods: {
    saveTargetId() {
      const data = {
        id: this.planet.id,
        rewardImg: this.planet.character_img,
      };
      this.$store.dispatch("SAVE_TARGET", data);
    },
  },
};
</script>

<style>
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.carousel-item .bgimg {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  opacity: 0;
  z-index: -10;
}

.circle-wrap {
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  color: var(--modal-white);
  font-weight: 900;
  font-size: 2.7rem;
}
.circle-wrap.max {
  opacity: 0.5;
}
.circle-wrap .point-num {
  margin-bottom: 1rem;
}
.circle-wrap img {
  display: block;
  margin: 0 auto;
  width: 20.5rem;
}
#point-state-bar {
  width: 25rem;
  height: 25rem;
}
.ep-content .ep-legend--container {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ep-content .ep-legend--value {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  align-items: center;
  justify-content: center;
}
.exchange {
  position: absolute;
  top: 50%;
  left: calc(50% - 5.5rem);
  padding: 0.5rem 2.1rem;
  font-weight: 700;
  font-size: 1.8rem;
  line-height: 2.6rem;
  color: var(--backGround);
  border-radius: 1rem;
  background-color: var(--point);
}
.exchange.used {
  background-color: var(--backGround);
  color: var(--modal-white);
}
</style>
