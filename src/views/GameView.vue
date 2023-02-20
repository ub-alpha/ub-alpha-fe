<template>
  <div id="game">
    <HelpModal></HelpModal>
    <UserDataBar></UserDataBar>
    <PlanetList></PlanetList>
    <BottomNav></BottomNav>
    <ExchangeModalVue></ExchangeModalVue>
  </div>
</template>

<script>
import HelpModal from "@/components/HelpModal.vue";
import UserDataBar from "@/components/UserDataBar.vue";
import PlanetList from "@/components/PlanetList.vue";
import BottomNav from "@/components/BottomNav.vue";
import ExchangeModalVue from "@/components/ExchangeModalVue.vue";
export default {
  components: {HelpModal, UserDataBar, PlanetList, BottomNav, ExchangeModalVue},
};
</script>

<style scoped>
#game {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
