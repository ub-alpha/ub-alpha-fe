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
        생성하기: "full",
        돌아가기: " border",
      },
    };
  },
};
</script>

<style scoped>
button {
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  box-sizing: content-box;
  border-radius: 10px;
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
