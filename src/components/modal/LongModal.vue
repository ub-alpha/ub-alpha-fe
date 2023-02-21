<template>
  <div
    class="modal fade"
    :id="`longModal-${modalName}`"
    tabindex="-1"
    aria-labelledby="longModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="header">
          <h1 class="title" id="longModalLabel">{{ modalType[modalName] }}</h1>
          <button
            class="close-btn"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img :src="require('@/assets/close.svg')" alt="도움말 닫기" />
          </button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["modalName"],
  data() {
    return {
      modalType: {
        help: "도움말",
        add: "행성 선택",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.modal {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.modal-dialog {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: calc(234 / 320 * 100%);
  text-align: center;
  padding: calc(10 / 320 * 100%);
  border-radius: 2rem;
  background-color: var(--backGround);
  border: 0.2rem solid var(--modal-yellow);
  box-sizing: border-box;
  position: relative;

  /* margin: auto; */
}
.modal-content .title {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.9rem;
  color: var(--point);
  margin-top: 2.4rem;
  padding-bottom: 1.1rem;
  border-bottom: 0.2rem solid var(--modal-yellow);
}
.modal-content .close-btn {
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;
}
.modal-content .close-btn img {
  width: 2.4rem;
}
.modal-body {
  padding: 0;
  text-align: center;
}

@media (min-width: 576px) {
  .modal-dialog {
    max-width: 100%;
  }
}
</style>
