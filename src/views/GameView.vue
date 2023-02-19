<template>
  <div id="game">
    <HelpModal></HelpModal>
  </div>
</template>

<script>
import HelpModal from "@/components/HelpModal.vue";
export default {
  components: { HelpModal },
};
</script>

<style scoped>
#game {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
