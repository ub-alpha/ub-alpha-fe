<template>
  <button @click="login">로그인</button>
</template>

<script>
export default {
  data() {
    return {
      username: "username",
      password: "password",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("GET_TOKEN").then((res) => {
        if (res) {
          localStorage.setItem("access_token", res.access);
          this.$router.push("/");
        }
      });
    },
  },
};
</script>

<style scoped>
button {
  padding: 60px;
  color: var(--text-white);
}
</style>
