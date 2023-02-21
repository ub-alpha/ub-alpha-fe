<template>
  <button @click="changeState" :class="`${status}`">
    {{ btnSet[status] }}
  </button>
</template>

<script>
export default {
  props: ["status"],
  data() {
    return {
      btnSet: {
        done: "보상받기",
        notready: "바로가기",
        ready: "보상받기",
      },
    };
  },
  methods: {
    changeState() {
    }
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
.done {
  color: var(--text-white);
  background-color: var(--text-grey);
}
.ready {
  color: var(--text-white);
  background-color: var(--mainColor);
}
.notready {
  border: 1px solid var(--mainColor);
  color: var(--mainColor);
}
</style>
