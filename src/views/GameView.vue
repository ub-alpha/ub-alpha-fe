<template>
  <div id="game">
    <HelpModal></HelpModal>
    <UserDataBar></UserDataBar>
    <PlanetList></PlanetList>
    <BottomNav></BottomNav>
    <ExchangeModalVue></ExchangeModalVue>
    <AddSpaceModal></AddSpaceModal>
  </div>
</template>

<script>
import HelpModal from "@/components/HelpModal.vue";
import UserDataBar from "@/components/UserDataBar.vue";
import PlanetList from "@/components/PlanetList.vue";
import BottomNav from "@/components/BottomNav.vue";
import ExchangeModalVue from "@/components/ExchangeModalVue.vue";
import AddSpaceModal from "@/components/AddSpaceModal.vue";
export default {
  components: {
    HelpModal,
    UserDataBar,
    PlanetList,
    BottomNav,
    ExchangeModalVue,
    AddSpaceModal,
  },
  mounted() {
    const token = localStorage.getItem("access_token");
    if (token) {
      this.$store.dispatch("GET_MEMBER").then(() => {
        this.$store.dispatch("GET_PLANETS").then((res) => {
          if (res.length == 0) {
            $("#longModal-help").modal("show");
          }
        });
      });
    }
  },
};
</script>

<style scoped>
#game {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
