<template>
    <div class="modal fade" id="popUpModalTmp" tabindex="-1" aria-labelledby="popUpModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content" @click="getPoint">
                <div class="modal-body">
                    <div class="modal-top">
                        <img class="point" :src="require('@/assets/point.svg')" alt="포인트" />
                        <div class="title">미션 포인트 획득</div>
                    </div>
                    <div class="content">마이 데이터 접속하기</div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import {try_mission} from "@/api/mission.js"
export default {
    methods: {
        getPoint() {
            try_mission(1).then((res) => {
                $("#popUpModalTmp").modal("hide");
                this.$router.push("/mission");
            });
        }
    },
    mounted() {
    $("#popUpModalTmp").modal("show");
  },
};
</script>
  
<style scoped>
.modal-dialog {
    width: 100%;
    margin: 3.7rem 0 0;
    display: flex;
    align-items: top;
    justify-content: center;
}

.modal-content {
    width: 100%;
    text-align: center;

    border-radius: 20px;
    background-color: var(--backGround);
    box-sizing: content-box;
}

.modal-body {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 0;
    margin: 2rem;
}

.modal-top {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0;
    gap: 0.5rem;
}

.modal-body .title {
    font-weight: 500;
    font-size: 1.3rem;
    line-height: 1.9rem;
    text-align: center;
    color: var(--text-grey);
}

.modal-body .content {
    margin-top: 0.5rem;
    font-weight: 600;
    font-size: 1.6rem;
    color: var(--text-white);
    padding-left: 1.5rem;
}
</style>
  