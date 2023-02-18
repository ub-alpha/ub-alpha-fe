<template>
  <DeviceStatusBar></DeviceStatusBar>
  <router-view />
</template>
<script>
import DeviceStatusBar from "@/components/DeviceStatusBar.vue";
export default {
  components: { DeviceStatusBar },
};
</script>
<style>
@import "../src/css/main.css";
</style>
