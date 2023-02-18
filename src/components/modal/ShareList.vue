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
import { uuid } from "vue-uuid";
import ShareListItem from "./ShareListItem.vue";
export default {
  components: { ShareListItem },
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
      ],
    };
  },
};
</script>

<style>
.modal.fade .modal-dialog {
  transform: translate3d(100px, 100px, 0);
}

.modal.show .modal-dialog {
  transform: translate3d(100px, 50px, 0);
}
.modal .modal-dialog {
  width: fit-content;
  margin: 0;
}
.modal-content {
  width: fit-content;
  padding: 4px;
  border-radius: 10px;
  box-sizing: border-box;
  border: 1px solid var(--modal-white);
  background-color: var(--backGround);
}
.social-list {
  margin-bottom: 3px;
}
.close-btn {
  width: 100%;
  height: fit-content;
}
@keyframes animateUp {
  0% {
    bottom: -500px;
    opacity: 0;
  }

  100% {
    bottom: 0;
    opacity: 1;
  }
}
</style>
