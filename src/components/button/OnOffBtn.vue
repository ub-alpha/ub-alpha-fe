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
    changeState() {},
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
.done {
  color: var(--text-white);
  background-color: var(--text-grey);
}
.ready {
  color: var(--text-white);
  background-color: var(--mainColor);
}
.notready {
  border: 0.1rem solid var(--mainColor);
  color: var(--mainColor);
}
</style>
