<template>
  <div id="login">
    <h1>아이디 로그인</h1>
    <div class="login-form">
      <input
        id="username"
        placeholder="아이디"
        class="borderless-input"
        v-model="username"
      />
      <input
        id="password"
        placeholder="비밀번호"
        class="borderless-input"
        type="password"
        v-model="password"
        @keyup.enter="login"
      />
      <button @click="login">로그인</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const data = {
        username: this.username,
        password: this.password,
      };
      this.$store.dispatch("GET_TOKEN", data).then((res) => {
        if (res) {
          localStorage.setItem("access_token", res.access);
          this.$router.push("/");
        }
        this.username = "";
        this.password = "";
      });
    },
  },
};
</script>

<style scoped>
#login {
  width: 100%;
  height: 100%;
  background-color: var(--modal-white);
}

h1 {
  padding: 5.4rem 0 2rem 5.1rem;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.9rem;
  color: var(--text-black);
}

button {
  color: var(--text-white);
  background-color: var(--mainColor);
  padding: 0.8rem 4.1rem;
  text-align: center;
  border-radius: 2rem;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
}

.login-form {
  display: flex;
  align-items: stretch;
  flex-direction: column;
  margin: 0 5.3rem;
}

.borderless-input {
  border: none;
  background: none;
  border-bottom: 0.13rem solid var(--text-grey);
  outline: none;
  margin: 2rem 0;
  font-size: 1.3rem;
}

.borderless-input:focus {
  border-bottom-color: var(--subColor);
}
</style>
