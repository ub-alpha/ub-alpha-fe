<template>
  <DeviceStatusBar></DeviceStatusBar>
  <div id="main">
    <router-view :key="$route.fullPath" />
  </div>
</template>
<script>
import DeviceStatusBar from "@/components/DeviceStatusBar.vue";
export default {
  components: {DeviceStatusBar},
};
</script>
<style>
@import "../src/css/main.css";
#main {
  height: 100%;
  flex-grow: 1;
}
</style>
