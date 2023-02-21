<template>
    <point-help-modal></point-help-modal>
    <point-title-bar></point-title-bar>
    <div class="scroll content">
        <mission-category :category="welcomeMission"></mission-category>
        <ul>
            <li v-for="mission in welcome">
                <point-mission :mission="mission"></point-mission>
            </li>
        </ul>
        <mission-category :category="dailyMission"></mission-category>
        <ul>
            <li v-for="mission in daily">
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
export default {
    data() {
        return {
            welcome: [{
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            ],
            daily: [{
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            {
                point: 10,
                mission: "계좌 개설",
            },
            ],
            dailyMission: "데일리 미션",
            welcomeMission: "웰컴 미션",
        };
    },
    components: {
        PointTitleBar,
        MissionCategory,
        PointMission,
        PointHelpModal,
    }
};
</script>

<style scoped>
.content {
    height: 45rem;
}
</style>
