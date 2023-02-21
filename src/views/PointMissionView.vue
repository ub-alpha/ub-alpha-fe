<template>
    <point-help-modal></point-help-modal>
    <point-title-bar></point-title-bar>
    <mission-category></mission-category>
    <point-mission></point-mission>
</template>

<script>
import PointTitleBar from '@/components/PointTitleBar.vue';
import MissionCategory from '@/components/MissionCategory.vue';
import PointMission from '@/components/PointMission.vue';
import PointHelpModal from '@/components/PointHelpModal.vue';
export default {
    components: {
        PointTitleBar,
        MissionCategory,
        PointMission,
        PointHelpModal,
    }
};
</script>

<style>

</style>
