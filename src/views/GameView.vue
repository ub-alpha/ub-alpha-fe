<template>
  <div id="game">
    <HelpModal></HelpModal>
    <UserDataBar></UserDataBar>
    <PlanetList></PlanetList>
  </div>
</template>

<script>
import HelpModal from "@/components/HelpModal.vue";
import UserDataBar from "@/components/UserDataBar.vue";
import PlanetList from "@/components/PlanetList.vue";
export default {
  components: { HelpModal, UserDataBar, PlanetList },
};
</script>

<style scoped>
#game {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
