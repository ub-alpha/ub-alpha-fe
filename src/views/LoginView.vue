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
      const userData = {
        username: "username",
        password: "password",
      };
      fetch("/token", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response.data);
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
