<template>
  <div class="socialList">
    <div
      class="modal fade"
      id="socialModal"
      tabindex="-1"
      aria-labelledby="socialModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="social-list">
            <ShareListItem
              v-for="social in socialList"
              :key="social.id"
              :socialName="social.name"
            ></ShareListItem>
          </div>
          <button data-bs-dismiss="modal" aria-label="Close" class="close-btn">
            <img
              :src="require('@/assets/double-arrow-down.svg')"
              alt="공유하기 닫기 버튼"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {uuid} from "vue-uuid";
import ShareListItem from "./ShareListItem.vue";
export default {
  components: {ShareListItem},
  data() {
    return {
      socialList: [
        {
          id: uuid.v1(),
          name: "트위터",
        },
        {
          id: uuid.v1(),
          name: "카카오톡",
        },
        {
          id: uuid.v1(),
          name: "인스타그램",
        },
        {
          id: uuid.v1(),
          name: "이미지저장",
        },
      ],
    };
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
}
.modal.fade .modal-dialog {
  transform: translate3d(-1rem, 0, 0);
}

.modal.show .modal-dialog {
  transform: translate3d(-1rem, -10rem, 0);
}
.modal .modal-dialog {
  width: fit-content;
  margin: 0;
  position: absolute;
  bottom: 0;
  right: 0;
}
.modal-content {
  width: fit-content;
  padding: 0.4rem;
  border-radius: 1rem;
  box-sizing: border-box;
  border: 0.1rem solid var(--modal-white);
  background-color: var(--backGround);
}
.social-list {
  /* position: absolute;
  top: 0;
  left: 0; */
  margin-bottom: 0.3rem;
}
.close-btn {
  width: 100%;
  height: fit-content;
}
</style>
