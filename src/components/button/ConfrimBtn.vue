<template>
  <button :class="`${btnSet[btnMsg]}`">{{ btnMsg }}</button>
</template>

<script>
export default {
  props: ["btnMsg"],
  data() {
    return {
      btnSet: {
        확인: "confirm",
        취소: "cancel",
      },
    };
  },
};
</script>

<style scoped>
button {
  padding: 0.4rem 1.85rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 1rem;
  box-sizing: content-box;
  line-height: 1.7rem;
}
.confirm {
  background: var(--point);
  color: var(--text-white);
}
.cancel {
  background: var(--modal-yellow);
  color: var(--text-black);
}
</style>
