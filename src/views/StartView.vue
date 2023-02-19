<template>
  <div id="start" :class="`step-${step}`">
    <div class="step step-1" v-if="step == 1">
      <div class="text">
        <span>안녕하세요, 전 우주 탐험가 SOL이에요 </span>
        <span>행성 만들기에 오신 걸 환영합니다 ! </span>
      </div>
      <NextBtn @click="nextStep" :msg="'다음'"></NextBtn>
    </div>
    <!-- 스페이스 이름 설정 -->
    <div class="step step-2" v-if="step === 2">
      <div class="text">
        <span>본인만의 스페이스 이름을 정해주세요</span>
        <span v-if="isAvailable" class="small"
          >이름은 다시 변경할 수 없으니 유의해주세요!</span
        >
        <span v-else class="small error">스페이스 이름은 필수 입력입니다</span>
      </div>
      <div class="input-wrap">
        <input
          @keyup.enter="checkSpaceName"
          type="text"
          v-model="userSpaceName"
        />
        <NextBtn @click="checkSpaceName" :msg="'입력'"></NextBtn>
      </div>
    </div>
  </div>
</template>

<script>
import NextBtn from "@/components/button/NextBtn.vue";
export default {
  components: { NextBtn },
  data() {
    return {
      step: 1,
      userSpaceName: "",
      isAvailable: false,
    };
  },
  watch: {
    userSpaceName() {
      if (this.userSpaceName === "") {
        this.isAvailable = false;
      } else {
        this.isAvailable = true;
      }
    },
  },
  methods: {
    nextStep() {
      this.step = 2;
    },
    checkSpaceName() {
      if (this.isAvailable) {
        this.$store.dispatch("MAKE_SPACE", this.userSpaceName);
        this.$router.push("/game");
      }
    },
  },
};
</script>

<style scoped>
#start {
  width: 100%;
  height: 100%;
  position: relative;
  animation: change 0.4s ease-out;
}
@keyframes change {
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
}
#start.step-1 {
  width: 100%;
  height: 100%;
  background: no-repeat top url("../assets/게임시작인사.png");
  background-size: cover;
}
#start.step-2 {
  width: 100%;
  height: 100%;
  background: no-repeat top url("../assets/게임이름설정.png");
  background-size: cover;
}
.step {
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.3rem;
  color: var(--text-white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.text {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.step-1 .text {
  gap: 2rem;
  margin-top: calc(65 / 320 * 100%);
  margin-bottom: calc(37 / 320 * 100%);
}
.step-1 > button {
  align-self: flex-end;
  margin-right: calc(32 / 320 * 100%);
}
.step-2 .text {
  gap: 1.1rem;
  margin-top: calc(90 / 320 * 100%);
  margin-bottom: calc(21 / 320 * 100%);
}
.step-2 .text .small {
  font-size: 1.1rem;
  line-height: 1.6rem;
}
.step-2 .text .small.error {
  color: var(--point);
}
.step-2 .input-wrap {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: calc(24 / 320 * 100%);
}
.step-2 input {
  width: calc(175 / 320 * 100%);
  height: calc(36 / 568 * 100vh);

  border: 0.3rem solid var(--text-white);
  background-color: transparent;
  border-radius: calc(10 / 568 * 100vh);
  padding-left: calc(13 / 320 * 100%);
  color: var(--text-white);
  font-weight: 700;
  font-size: 1.7rem;
}
.step-2 input:focus {
  outline: none;
}
</style>
