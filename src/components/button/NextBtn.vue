<template>
  <button>{{ msg }}</button>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style scoped>
button {
  color: var(--text-white);
  width: calc(59 / 320 * 100%);
  height: calc(36 / 568 * 100vh);
  border: calc(3 / 568 * 100vh) solid var(--text-white);
  font-size: 1.7rem;
  text-align: center;
  border-radius: calc(10 / 568 * 100vh);
}
</style>
