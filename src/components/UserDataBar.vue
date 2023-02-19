<template>
  <div id="user-data-bar">
    <div class="item">
      <strong>{{ spaceName }}</strong>
      <span>스페이스</span>
      <button data-bs-toggle="modal" data-bs-target="#longModal-help">
        <img
          class="help"
          :src="require('@/assets/help.svg')"
          alt="도움말 열기"
        />
      </button>
    </div>

    <router-link to="/mission" class="item">
      <strong class="point">{{ pointNum }}</strong>
      <img class="point" :src="require('@/assets/point.svg')" alt="포인트" />
    </router-link>
  </div>
</template>

<script>
export default {
  computed: {
    spaceName() {
      return this.$store.state.member.spacename;
    },
    pointNum() {
      return this.$store.state.member.point;
    },
  },
};
</script>

<style scoped>
#user-data-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.3rem 2.2rem;
  width: 100%;
  /* height: calc(70 / 568 * 100vh); */
}
.item {
  display: flex;
  align-items: center;
  color: var(--text-white);
  gap: 0.5rem;
}
strong {
  font-weight: 700;
  font-size: 2rem;
}
span {
  font-size: 1rem;
}
strong.point {
  color: var(--point);
}

img.help {
  width: 1.6rem;
  vertical-align: bottom;
  margin-top: 0.2rem;
}
img.point {
  width: 2.4rem;
  vertical-align: bottom;
}
</style>
