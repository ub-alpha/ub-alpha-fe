<template>
  <header>
    <img :src="require('@/assets/status-bar.png')" alt="상태바" />
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
}
header img {
  width: 100%;
}
</style>
