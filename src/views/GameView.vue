<template>
  <div id="game">
    <LongModal :modalName="'help'"></LongModal>
  </div>
</template>

<script>
import LongModal from "@/components/modal/LongModal.vue";
export default {
  components: { LongModal },

  mounted() {
    $("#longModal-help").modal("show");
  },
};
</script>

<style>
#game {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
