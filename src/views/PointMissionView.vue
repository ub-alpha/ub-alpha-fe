<template>
  <div id="point">
    <point-help-modal></point-help-modal>
    <point-title-bar></point-title-bar>
    <div class="scroll content">
      <mission-category :category="welcomeMission"></mission-category>
      <ul>
        <li v-for="mission in welcome" :key="mission.id">
          <point-mission :mission="mission"></point-mission>
        </li>
      </ul>
      <mission-category :category="dailyMission"></mission-category>
      <ul>
        <li v-for="mission in daily" :key="mission.id">
          <point-mission :mission="mission"></point-mission>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import PointTitleBar from "@/components/PointTitleBar.vue";
import MissionCategory from "@/components/MissionCategory.vue";
import PointMission from "@/components/PointMission.vue";
import PointHelpModal from "@/components/PointHelpModal.vue";
export default {
  data() {
    return {
      dailyMission: "데일리 미션",
      welcomeMission: "웰컴 미션",
    };
  },
  computed: {
    welcome() {
      return this.$store.state.missions.welcome;
    },
    daily() {
      return this.$store.state.missions.daily;
    },
  },
  components: {
    PointTitleBar,
    MissionCategory,
    PointMission,
    PointHelpModal,
  },
  created() {
    this.$store.dispatch("GET_MISSION");
  },
};
</script>

<style scoped>
#point {
  width: 100%;
  height: 100%;
  position: relative;
}
.content {
  height: 45rem;
}
</style>
