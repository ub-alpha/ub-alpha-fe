<template>
  <div id="shop">
    <div class="code-box">
      <input type="text" />
      <router-link to="/">확인</router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#shop {
  width: 100%;
  height: 100%;
  position: relative;
  background: no-repeat top url("@/assets/11번가.png");
  background-size: cover;
}
.code-box {
  width: 100%;
  position: absolute;
  top: 65%;
  left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10%;
  font-weight: 500;
  font-size: 1.6rem;
  height: 4rem;
}
.code-box input {
  width: 60%;
  border-radius: 1rem;
  padding: 1rem;
  height: 100%;
}
.code-box a {
  width: 20%;
  height: 100%;
  color: var(--text-white);
  display: block;
  background-color: var(--mainColor);
  padding: 1rem;
  border-radius: 1rem;
  text-align: center;
}
</style>
