<template>
  <div id="game">
    <HelpModal></HelpModal>
    <UserDataBar></UserDataBar>
  </div>
</template>

<script>
import HelpModal from "@/components/HelpModal.vue";
import UserDataBar from "@/components/UserDataBar.vue";
export default {
  components: { HelpModal, UserDataBar },
};
</script>

<style scoped>
#game {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
