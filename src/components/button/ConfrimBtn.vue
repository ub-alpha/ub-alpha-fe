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
  padding: 4px 18.5px;
  font-size: 12px;
  font-weight: 400;
  border-radius: 10px;
  box-sizing: content-box;
  line-height: 17px;
}
.confirm {
  background: var(--point);
  color: var(--text-white);
}
.cancle {
  background: var(--modal-yellow);
  color: var(--text-black);
}
</style>
