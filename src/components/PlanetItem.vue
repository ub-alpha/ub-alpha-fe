<template>
  <div :class="`planet ${index === 0 ? 'active' : ''} carousel-item`">
    <div class="circle-wrap">
      <ve-progress
        id="#point-state-bar"
        color="#E3F4FD"
        empty-color="#394F7D"
        :thickness="border"
        :empty-thickness="`${border}`"
        :progress="70"
        :size="stateBarWidth"
      >
        <img
          class="space-img"
          :src="require('@/assets/space-type-1.png')"
          alt="행성 이미지"
        />
      </ve-progress>
    </div>
  </div>
</template>

<script>
import {veProgress} from "vue-ellipse-progress";

export default {
  props: ["planet", "index"],
  components: {veProgress},
  data() {
    return {
      stateBarWidth: 0,
      border: 0,
    };
  },
  watch() {},
  created() {
    this.stateBarWidth = ($("#app").innerWidth() * 250) / 320;
    this.border = parseInt($("html").css("fontSize")) * 0.8;
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

.circle-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
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
#bg {
  width: 100%;
  background-color: red;
  height: 100%;
}
</style>
