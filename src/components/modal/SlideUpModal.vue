<template>
  <!-- data-bs-toggle="modal"
      data-bs-target="#exampleModal" -->
  <button data-bs-toggle="modal" data-bs-target="#slideUpModal">222</button>
  <div
    class="modal fade"
    id="slideUpModal"
    tabindex="-1"
    aria-labelledby="slideUpModalLabel"
    aria-hidden="true"
  >
    <!-- data-bs-dismiss="modal"
              aria-label="Close" -->
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="header">
          <h1 class="title" id="longModalLabel">할인권 교환</h1>
          <button
            class="close-btn"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img :src="require('@/assets/close.svg')" alt="할인권 닫기" />
          </button>
        </div>
        <div class="modal-body"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.modal-dialog {
  width: 100%;
  position: relative;
  animation: animatebottom 0.4s;
  margin: 0 auto;
}
.modal-content {
  width: 320px;
  min-height: 259px;
  text-align: center;
  margin: 0;
  padding: 18px 29px;
  border-radius: 20px 20px 0 0;
  background-color: var(--backGround);
  border: 2px solid var(--modal-yellow);
  box-sizing: border-box;
  position: relative;
}

.modal-body {
}

.modal-content .title {
  font-weight: 700;
  font-size: 20px;
  line-height: 29px;
  color: var(--text-white);
  margin-top: 24px;
  padding-bottom: 11px;
  border-bottom: 2px solid var(--text-white);
}
.modal-content .close-btn {
  position: absolute;
  right: 14px;
  top: 14px;
}
@keyframes animatebottom {
  from {
    bottom: -300px;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>
