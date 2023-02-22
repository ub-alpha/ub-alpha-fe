<template>
    <point-help-modal></point-help-modal>
    <point-title-bar></point-title-bar>
    <div class="scroll content">
        <mission-category :category="welcomeMission"></mission-category>
        <ul>
            <li v-for="mission in welcome" :key="mission.id">
                <point-mission :mission="mission"></point-mission>
            </li>
        </ul>
        <mission-category :category="dailyMission"></mission-category>
        <ul>
            <li v-for="mission in daily" :key="mission.id">
                <point-mission :mission="mission"></point-mission>
            </li>
        </ul>
    </div>
</template>

<script>
import PointTitleBar from '@/components/PointTitleBar.vue';
import MissionCategory from '@/components/MissionCategory.vue';
import PointMission from '@/components/PointMission.vue';
import PointHelpModal from '@/components/PointHelpModal.vue';
import { get_mission } from '@/api/mission.js';
export default {
    data() {
        return {
            welcome: [],
            daily: [],
            dailyMission: "데일리 미션",
            welcomeMission: "웰컴 미션",
        };
    },
    components: {
        PointTitleBar,
        MissionCategory,
        PointMission,
        PointHelpModal,
    },
    mounted() {
        get_mission().then((res) => {
            this.welcome = res.filter(mission => mission.category === "welcome");
            this.daily = res.filter(mission => mission.category === "daily");
        })
    }
};
</script>

<style scoped>
.content {
    height: 45rem;
}
</style>
