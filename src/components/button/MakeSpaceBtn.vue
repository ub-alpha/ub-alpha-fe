<template>
  <button :class="`${btnSet[btnMsg]}`">
    {{ btnMsg }}
  </button>
</template>

<script>
export default {
  props: ["btnMsg"],
  data() {
    return {
      btnSet: {
        선택하기: "full",
        생성하기: "full",
        돌아가기: " border",
      },
    };
  },
};
</script>

<style scoped>
button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.7rem;
  box-sizing: content-box;
  border-radius: 1rem;
}
.full {
  color: var(--text-white);

  background-color: var(--mainColor);
}

.border {
  border: 1px solid var(--mainColor);
  color: var(--mainColor);
}
</style>
