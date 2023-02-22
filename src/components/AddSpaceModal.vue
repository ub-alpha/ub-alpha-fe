<template>
  <LongModalDepth
    @resetStep="resetStep"
    :modalName="'add'"
    :title="step == 1 ? '행성 선택' : '혜택 선택'"
  >
    <template v-if="step === 1">
      <div class="msg">생성하고 싶은 행성을 선택하세요 !</div>
      <div class="space-imgs">
        <template v-for="spaceType in spaceTypeList" :key="spaceType.id">
          <div
            :class="`item ${
              selectedSpace?.id === spaceType.id ? 'select' : ''
            }`"
            @click="selectSpace(spaceType)"
          >
            <img :src="require(`@/assets/${spaceType.image}`)" alt="" />
          </div>
        </template>
      </div>
      <div class="err-msg">
        <strong v-show="!isAvailable">1가지를 꼭 선택 해주세요</strong>
      </div>
      <MakeSpaceBtn
        @click="nextStep"
        class="btn"
        :btnMsg="'선택하기'"
      ></MakeSpaceBtn>
    </template>
    <template v-else>
      <div class="msg">
        해당 포인트를 모두 모으면 할인권을 드려요 <br />어떤 혜택을 얻고 싶은지
        선택하세요 !
      </div>

      <div class="reward-list">
        <div
          :class="`item ${selectedReward?.id == rewardType.id ? 'select' : ''}`"
          v-for="rewardType in rewardTypeList"
          :key="rewardType.id"
          @click="selectReward(rewardType)"
        >
          <img
            :src="require(`@/assets/${rewardType.image}`)"
            :alt="rewardType.image"
          />
          <div>
            <div class="origin">{{ rewardType.max_origin }}</div>
            <div>{{ rewardType.max_point }}</div>
          </div>
        </div>
      </div>
      <div class="btn-list">
        <MakeSpaceBtn @click="resetStep(1)" :btnMsg="'돌아가기'"></MakeSpaceBtn>
        <MakeSpaceBtn
          @click="confirmModalOpen"
          :btn-msg="'생성하기'"
        ></MakeSpaceBtn>
      </div>
    </template>
  </LongModalDepth>
  <PopUpModal
    :selectedSpace="selectedSpace"
    :selectedReward="selectedReward"
  ></PopUpModal>
</template>

<script>
import LongModalDepth from "@/components/modal/LongModalDepth.vue";
import MakeSpaceBtn from "@/components/button/MakeSpaceBtn.vue";
import PopUpModal from "./modal/PopUpModal.vue";
export default {
  data() {
    return {
      selectedSpace: null,
      selectedReward: null,
      step: 1,
      isAvailable: false,
    };
  },
  components: {LongModalDepth, MakeSpaceBtn, PopUpModal},
  watch: {
    selectedSpace(newData) {
      if (newData == null) {
        this.isAvailable = false;
      } else {
        this.isAvailable = true;
      }
    },
    selectedReward(newData) {
      if (newData == null) {
        this.isAvailable = false;
      } else {
        this.isAvailable = true;
      }
    },
  },
  computed: {
    spaceTypeList() {
      return this.$store.state.planetTypes;
    },
    rewardTypeList() {
      return this.$store.state.rewardTypes;
    },
  },
  created() {
    this.$store.dispatch("GET_PLANET_LIST").then((res) => {
      this.selectedSpace = res[0];
    });
    this.$store.dispatch("GET_REWARD_LIST").then((res) => {
      this.selectedReward = this.rewardTypeList[0];
    });
  },
  methods: {
    selectSpace(spaceType) {
      if (this.selectedSpace === spaceType) {
        this.selectedSpace = null;
      } else {
        this.selectedSpace = spaceType;
      }
    },
    selectReward(rewardType) {
      if (this.selectedReward === rewardType) {
        this.selectedReward = null;
      } else {
        this.selectedReward = rewardType;
      }
    },
    nextStep() {
      if (this.selectedSpace != null) {
        this.step = 2;
      } else {
        this.isAvailable = false;
      }
    },
    resetStep(num) {
      this.step = num;
    },
    confirmModalOpen() {
      if (this.isAvailable) {
        $("#popUpModal").modal("show");
      } else {
      }
    },
  },
};
</script>

<style scoped>
.msg {
  text-align: center;
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: var(--text-white);
  margin: 2.8rem 0 1.2rem;
}

.space-imgs {
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(3, 1fr);
  margin-bottom: 1.8rem;
  grid-row: 1;
}
.space-imgs .item {
  display: block;
  padding: 0.2rem;
}
.space-imgs .item.select img {
  border: 0.2rem solid var(--point);
  border-radius: 1rem;
  padding: 0;
}
.space-imgs .item img {
  width: 5.5rem;
}
.btn {
  margin-bottom: 1.1rem;
}
.err-msg {
  height: 1.3rem;
  font-weight: 700;
  font-size: 1.1rem;
  color: var(--point);
  margin-bottom: 0.7rem;
}
.reward-list {
  display: flex;
  align-items: center;
  flex-direction: column;
  color: var(--point);
  margin-top: 1rem;
}
.reward-list .item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-weight: 500;
  font-size: 1.3rem;
  line-height: 1.6rem;
  padding: 1rem 2.7rem;
}
.reward-list .item.select {
  border-radius: 1rem;
  border: 0.2rem solid var(--point);
  padding: 0.8rem 2.5rem;
}
.reward-list .item .origin {
  margin-right: 1.4rem;
  text-decoration: line-through;
  text-decoration-color: red;
  text-decoration-thickness: 0.2rem;
}
.reward-list .item img {
  width: calc(200 / 320 * 100%);
}
.btn-list {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 1.4rem 0 2.2rem;
}
</style>
