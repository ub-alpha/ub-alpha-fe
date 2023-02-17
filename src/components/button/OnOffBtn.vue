<template>
  <button @click="changeState" :class="`${btnSet[btnMsg]} ${this.state}`">
    {{ btnMsg }}
  </button>
</template>

<script>
export default {
  props: ["btnMsg"],
  data() {
    return {
      state: "off",
      btnSet: {
        보상받기: "getReward",
        바로가기: "goToReward",
      },
    };
  },
  methods: {
    changeState() {
      if (this.state === "on") {
        this.state = "off";
      } else {
        this.state = "on";
      }
    },
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
.getReward {
  color: var(--text-white);

  background-color: var(--text-grey);
}
.getReward.on {
  background-color: var(--mainColor);
}
.goToReward {
  border: 1px solid var(--mainColor);
  color: var(--mainColor);
}
</style>
