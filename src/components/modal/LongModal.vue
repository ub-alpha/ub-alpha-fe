<template>
  <!-- data-bs-toggle="modal"
    data-bs-target="#exampleModal" -->
  <button data-bs-toggle="modal" data-bs-target="#longModal">test</button>
  <div
    class="modal fade"
    id="longModal"
    tabindex="-1"
    aria-labelledby="longModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="header">
          <h1 class="title" id="longModalLabel">도움말</h1>
          <button
            class="close-btn"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img :src="require('@/assets/close.svg')" alt="도움말 닫기" />
          </button>
        </div>
        <div class="modal-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style scoped>
.modal-dialog {
  width: 100%;
  height: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  width: 234px;
  height: 418px;
  text-align: center;
  padding: 10px;
  border-radius: 20px;
  background-color: var(--backGround);
  border: 2px solid var(--modal-yellow);
  box-sizing: border-box;
  position: relative;

  /* margin: auto; */
}
.modal-content .title {
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: var(--point);
  margin-top: 24px;
  padding-bottom: 11px;
  border-bottom: 2px solid var(--modal-yellow);
}
.modal-content .close-btn {
  position: absolute;
  right: 14px;
  top: 14px;
}
.modal-body {
  margin: 24px 10px 10px;
  background-color: var(--modal-yellow);
  text-align: center;
}
</style>
