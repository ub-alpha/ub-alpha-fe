<template>
  <div
    class="modal fade scroll"
    id="slideUpModal"
    tabindex="-1"
    aria-labelledby="slideUpModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="header">
          <h1 class="title" id="slideUpModalLabel">할인권 교환</h1>
          <button
            class="close-btn"
            type="button"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img :src="require('@/assets/close.svg')" alt="할인권 닫기" />
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
export default {};
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
  width: 100%;
  position: absolute;
  bottom: 0;
  animation: animatebottom linear 0.4s;
  margin: 0 auto;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 100%;
  }
}
.modal-content {
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 1.8rem 2.9rem;
  border-radius: 2rem 2rem 0 0;
  background-color: var(--backGround);
  border: 0.2rem solid var(--modal-yellow);
  box-sizing: border-box;
  position: relative;
}

.modal-body {
}

.modal-content .title {
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.9rem;
  color: var(--text-white);
  margin-top: 2.4rem;
  padding-bottom: 1.1rem;
  border-bottom: 0.2rem solid var(--text-white);
}
.modal-content .close-btn {
  position: absolute;
  right: 1.4rem;
  top: 1.4rem;
}
.modal-content .close-btn img {
  width: 2.4rem;
}
@keyframes animatebottom {
  from {
    bottom: -1000px;
    opacity: 0;
  }

  to {
    bottom: 0;
    opacity: 1;
  }
}
</style>
