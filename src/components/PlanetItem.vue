<template>
  <div :class="`planet ${index === 0 ? 'active' : ''} carousel-item`">
    <div class="circle-wrap">
      <img :src="require('@/assets/space-type-1.png')" alt="행성 생성하기" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["planet", "index"],
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

.circle-wrap img {
  display: block;
  margin: 0 auto;
  width: calc(250 / 320 * 100%);
}
</style>
