<template>
  <div class="bottom-nav">
    <router-link to="/" class="item exit">
      <img :src="require('@/assets/exit.svg')" alt="행성 나가기 버튼" />
      <span>떠나기</span>
    </router-link>
    <button class="level-up-wrap">
      <div class="level-up">
        <img :src="require('@/assets/level-up.svg')" alt="레벨업 버튼" />
      </div>
      <div class="num">
        <span>10</span
        ><img :src="require('@/assets/point.svg')" alt="레벨업코인" />
      </div>
    </button>
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
  top: -2.5rem;
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
</style>
