<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
button {
  color: var(--text-white);
  background-color: var(--mainColor);
  padding: 1rem 4.1rem;
  text-align: center;
  border-radius: 1rem;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.7rem;
}
</style>
