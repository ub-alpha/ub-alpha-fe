<template>
  <div id="point-title-bar" class="item">
    <strong>포인트 적립</strong>
    <button data-bs-toggle="modal" data-bs-target="#longModal-help">
      <img class="help" :src="require('@/assets/help.svg')" alt="도움말 열기" />
    </button>
    <router-link to="/game" class="close-btn">
      <button type="button" aria-label="Close">
        <img :src="require('@/assets/close-white.svg')" alt="포인트창 닫기" />
      </button>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#point-title-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.3rem 1.2rem;
  width: 100%;
  flex-direction: row;
  position: relative;
}

.item {
  display: flex;
  align-items: center;
  color: var(--text-white);
  gap: 0.5rem;
}

.close-btn {
  position: absolute;
  right: 0;
  margin: 1.5rem;
}
.close-btn img {
  width: 2.4rem;
}
img.help {
  width: 1.6rem;
}
strong {
  font-weight: 700;
  font-size: 2rem;
}
</style>
