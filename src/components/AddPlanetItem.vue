<template>
  <div class="planet carousel-item">
    <div class="circle-wrap">
      <img
        class="add_planet"
        data-bs-toggle="modal"
        data-bs-target="#longModalDepth-add"
        :src="require('@/assets/add-space.svg')"
        alt="행성 생성하기"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["planet"],
};
</script>

<style scoped>
.carousel-item {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.circle-wrap img {
  display: block;
  margin: 0 auto;
  width: calc(250 / 320 * 100%);
}
.add_planet {
  cursor: pointer;
}
</style>
