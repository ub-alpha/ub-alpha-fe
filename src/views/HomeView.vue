<template>
  <div id="home">
    <button @click="gotoGame()" class="space-btn">
      <img src="@/assets/planet_icon.png" alt="행성 아이콘" />
      <strong>나만의 행성</strong>
    </button>
  </div>
</template>

<script>
export default {
  computed: {
    member() {
      return this.$store.state.member;
    },
  },
  methods: {
    gotoGame() {
      const token = localStorage.getItem("access_token");
      if (token) {
        this.$store.dispatch("GET_MEMBER").then((res) => {
          if (this.member.spacename != null) {
            this.$router.push("/game");
          } else {
            this.$router.push("/start");
          }
        });
      } else {
        this.$router.push("/login");
      }
    },
  },
  created() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.$store.dispatch("GET_MEMBER");
    }
  },
};
</script>

<style scoped>
#home {
  width: 100%;
  height: 100%;
  position: relative;
  background: no-repeat top url("@/assets/알파홈.png");
  background-size: cover;
}

.space-btn {
  width: calc(84 * 100% / 320);
  position: absolute;
  right: 9px;
  top: calc(39% + 0.2rem);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  text-decoration: none;

  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;

  padding-top: calc(14 / 320 * 100%);
  padding-bottom: calc(14 / 320 * 100%);
  padding-right: calc(9 / 320 * 100%);
  padding-left: calc(9 / 320 * 100%);

  color: var(--text-white);
  background-color: var(--backGround);

  border-radius: 1rem;
}
.space-btn img {
  width: 1rem;
}
</style>
