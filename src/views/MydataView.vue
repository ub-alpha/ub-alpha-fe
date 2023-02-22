<template>
  <div id="mydata">
    <alarm-modal></alarm-modal>
  </div>
</template>

<script>
import AlarmModal from '@/components/AlarmModal.vue'
export default {
    components: {
        AlarmModal,
    },
}
</script>

<style scope
AlarmModald>
#mydata {
  width: 100%;
  height: 100%;
  position: relative;
  background: no-repeat top url("@/assets/마이데이터.png");
  background-size: cover;
}
</style>