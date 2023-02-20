<template>
  <SlideUpModal>
    <template v-if="step === 1">
      <div class="content">
        <div class="name">
          <img :src="require('@/assets/planet_icon.png')" alt="행성 아이콘" />
          <span>행성을 할인권으로 교환하세요!</span>
        </div>
        <img
          class="coupon"
          :src="require('@/assets/discount3000.png')"
          alt="금융투자상품권 3000원 할인권"
        />
        <ExChangeBtn></ExChangeBtn>
      </div>
    </template>
  </SlideUpModal>
</template>

<script>
import SlideUpModal from "@/components/modal/SlideUpModal.vue";
import ExChangeBtn from "./button/ExChangeBtn.vue";
export default {
  data() {
    return {
      step: 1,
    };
  },
  components: {SlideUpModal, ExChangeBtn},
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.4rem;
  color: var(--text-white);
}
.content .name {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
}
.content .name img {
  margin-right: 0.6rem;
}
.content img.coupon {
  width: calc(150 / 320 * 100%);
}
</style>
