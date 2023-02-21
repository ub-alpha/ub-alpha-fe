<template>
  <div class="bottom-nav">
    <router-link to="/" class="item exit">
      <img :src="require('@/assets/exit.svg')" alt="행성 나가기 버튼" />
      <span>떠나기</span>
    </router-link>
    <div
      class="item share"
      data-bs-toggle="modal"
      data-bs-target="#socialModal"
    >
      <img :src="require('@/assets/share.svg')" alt="공유하기 버튼" />
      <span>공유</span>
    </div>
  </div>
  <ShareList></ShareList>
</template>

<script>
import ShareList from "./modal/ShareList.vue";
export default {
  components: {ShareList},
};
</script>

<style scoped>
.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2.5rem 2.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--point);
  text-align: center;
  font-weight: 700;
  font-size: 1.2rem;
}
.item img {
  display: block;
  width: 4.5rem;
  margin-bottom: 0.7rem;
}
.item.share {
  cursor: pointer;
}
</style>
