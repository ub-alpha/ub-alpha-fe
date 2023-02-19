<template>
  <div class="planet active carousel-item"></div>
</template>

<script>
export default {
  props: ["planet"],
};
</script>

<style>
.carousel-item {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>
