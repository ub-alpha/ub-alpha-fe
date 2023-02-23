<template>
  <SlideUpModal>
    <template v-if="step === 1">
      <div class="content step-1">
        <div class="name">
          <img :src="require('@/assets/planet_icon.png')" alt="행성 아이콘" />
          <span>행성을 할인권으로 교환하세요!</span>
        </div>

        <img
          class="coupon"
          :src="require(`@/assets/${targetImg ? targetImg : '100.png'}`)"
          alt="금융투자상품권 3000원 할인권"
        />
        <ExChangeBtn @click="nextStep">교환하기</ExChangeBtn>
      </div>
    </template>
    <template v-else>
      <div class="content step-2">
        <div class="name">
          <img :src="require('@/assets/planet_icon.png')" alt="행성 아이콘" />
          <span>교환이 완료되었습니다</span>
        </div>
        <div class="codeNum">
          <span>할인권 번호:</span>
          <input disabled type="text" id="code" :value="coupon" />
          <span @click="copyText" class="under">복사하기</span>
        </div>
        <ExChangeBtn @click="gotoShop"> 상품권 구매히기 </ExChangeBtn>
      </div>
    </template>
  </SlideUpModal>
</template>

<script>
import SlideUpModal from "@/components/modal/SlideUpModal.vue";
import ExChangeBtn from "@/components/button/ExChangeBtn.vue";
export default {
  data() {
    return {
      step: 1,
      coupon: "",
    };
  },
  computed: {
    targetId() {
      return this.$store.state.targetId;
    },
    targetImg() {
      return this.$store.state.targetImg;
    },
  },
  components: {SlideUpModal, ExChangeBtn},
  methods: {
    nextStep() {
      this.$store.dispatch("EXCHANGE_PLANET", this.targetId).then((res) => {
        this.step = 2;
        this.coupon = res.coupon;
      });
    },
    gotoShop() {
      $("#slideUpModal").modal("hide");
      this.$router.push("/shop");
    },
    copyText() {
      window.navigator.clipboard.writeText(code.value).then(() => {
        alert(`쿠폰 번호  : ${code.value} 복사되었습니다`);
      });
    },
  },
};
</script>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  color: var(--text-white);
}
.content.step-1 {
  gap: 1.4rem;
}
.content.step-2 {
  gap: 1.4rem;
}
.content .name {
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.6rem;
}
.content .name img {
  width: 1.1rem;
  margin-right: 0.6rem;
}
.content img.coupon {
  width: calc(150 / 320 * 100%);
}
.content.step-2 .codeNum {
  width: calc(245 / 320 * 100%);
  padding: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 1rem;
  color: var(--text-black);
  background-color: #d7d1f2;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.9rem;
}

.content.step-2 button a {
  color: var(--text-black);
}
.content.step-2 .codeNum .under {
  text-decoration: underline;
  cursor: pointer;
}
.content.step-2 .codeNum #code {
  width: 30%;
  background-color: transparent;
  flex-grow: 0;
  border: none;
}
</style>
