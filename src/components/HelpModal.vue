<template>
  <LongModal :modalName="'help'" :title="'도움말'">
    <div class="text-content">
      <div class="text">
        <div class="summary">
          <img :src="require('@/assets/moon.svg')" alt="행성" />
          <p>나만의 행성 만들기</p>
        </div>
        <div class="description">
          홈화면에서 나만의 행성을 생성해보세요<br />
          행성 생성 시, 교환권 특성을 지정하세요<br />
          MAX 레벨 달성 시 교환권 구매가 가능해요
        </div>
      </div>
      <div class="text">
        <div class="summary">
          <img :src="require('@/assets/coin.svg')" alt="포인트" />
          <p>포인트 적립하기</p>
        </div>
        <div class="description">다양한 활동을 통해 포인트를 적립해보세요</div>
      </div>
      <div class="text">
        <div class="summary">
          <img :src="require('@/assets/diamonds.svg')" alt="레벨업" />
          <p>행성 레벨업하기</p>
        </div>
        <div class="description">행성 하단의 레벨업 버튼을 클릭하세요</div>
      </div>
      <div class="text">
        <div class="summary">
          <img :src="require('@/assets/exchange.svg')" alt="교환" />
          <p>행성 교환하기</p>
        </div>
        <div class="description">
          MAX 레벨을 달성한 행성을 클릭하세요<br />
          행성을 이용해 할인권으로 교환하세요
        </div>
      </div>
    </div>
  </LongModal>
</template>

<script>
import LongModal from "@/components/modal/LongModal.vue";
export default {
  components: {LongModal},
};
</script>

<style scoped>
.text-content {
  color: var(--text-white);
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;
  gap: 3.7rem;
  margin: 2.3rem 0 1rem;
}
.summary {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.7rem;
  gap: 0.6rem;
  margin-bottom: 0.7rem;
}
.summary img {
  width: 1.7rem;
}
.description {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: var(--modal-white);
}
</style>
