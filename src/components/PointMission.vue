<template>
  <div class="mission">
    <div class="mission-with-point">
      <div class="mission-point">
        <strong class="point">{{ mission.point }}</strong>
        <img class="point" :src="require('@/assets/point.svg')" alt="포인트" />
      </div>
      <span class="mission-content">{{ mission.mission }}</span>
    </div>
    <on-off-btn :status="mission.status" @click="doMission"></on-off-btn>
  </div>
</template>

<script>
import OnOffBtn from "./button/OnOffBtn.vue";
export default {
  props: ["mission"],
  components: {OnOffBtn},
  methods: {
    doMission() {
      if (this.mission.status === "notready") {
        this.$router.push("/");
      } else if (this.mission.status === "ready") {
        this.$store
          .dispatch("DONE_MISSION", this.mission.log_id)
          .then((res) => {
            this.$router.go("/mission");
          });
      }
    },
  },
};
</script>

<style>
.mission {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1.3rem 2.2rem;
  gap: 1rem;
}

.mission-with-point {
  display: flex;
  gap: 1rem;
}

.mission-point {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  gap: 0.5rem;

  width: 3.3rem;
  height: 1.8rem;
}

strong.point {
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.5rem;
  line-height: 2.2rem;
  display: flex;
  align-items: center;
  text-align: right;
  color: var(--point);
}

img.point {
  width: 1rem;
  vertical-align: bottom;
}

.mission-content {
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
  display: flex;
  align-items: center;
  color: var(--text-white);
}
</style>
