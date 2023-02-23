<template>
  <div
    class="modal fade"
    id="popUpModal"
    tabindex="-1"
    aria-labelledby="popUpModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-body">
          <div class="text">해당 행성을 생성하시겠습니까?</div>
          <div class="btnList">
            <ConfrimBtn
              :btn-msg="'취소'"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></ConfrimBtn>
            <ConfrimBtn @click="makePlanet" :btn-msg="'확인'"></ConfrimBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfrimBtn from "@/components/button/ConfrimBtn.vue";
export default {
  props: ["selectedSpace", "selectedReward"],
  components: {ConfrimBtn},
  methods: {
    makePlanet() {
      const payload = {
        planet: this.selectedSpace.id,
        character: this.selectedReward.id,
      };

      this.$store.dispatch("ADD_PLANET", payload).then(() => {
        $("#popUpModal").modal("hide");
        $("#longModalDepth-add").modal("hide");
      });

      this.$router.go(0);

      // .then(() => {

      //   $("#popUpModal").modal("hide");
      //   $("#longModalDepth-add").modal("hide");
      // });
    },
  },
};
</script>

<style scoped>
.modal-dialog {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: fit-content;
  text-align: center;
  padding: 0 0.5rem;
  border-radius: 2rem;
  background-color: var(--backGround);
  border: 0.2rem solid var(--modal-yellow);
  box-sizing: content-box;
}

.modal-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 4rem 2.6rem;
}
.modal-body .text {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2.2rem;
  color: var(--text-white);
  margin-bottom: 1.5rem;
}

.modal-body .btnList {
  display: flex;
  gap: 2rem;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 100%;
  }
}
</style>
