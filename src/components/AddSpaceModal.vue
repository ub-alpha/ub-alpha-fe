<template>
  <LongModal :modalName="'add'" :title="step == 1 ? '행성 선택' : '혜택 선택'">
    <template v-if="step === 1">
      <div class="msg">생성하고 싶은 행성을 선택하세요 !</div>
      <div class="space-imgs">
        <template v-for="spaceType in spaceTypeList" :key="spaceType.planet_id">
          <div
            :class="`item ${
              selected.planet_id === spaceType.planet_id ? 'select' : ''
            }`"
            @click="selectedSpace(spaceType)"
          >
            <img :src="require(`@/assets/${spaceType.image}`)" alt="" />
          </div>
        </template>
      </div>
      <MakeSpaceBtn
        @click="nextStep"
        class="btn"
        :btnMsg="'선택하기'"
      ></MakeSpaceBtn>
    </template>
  </LongModal>
</template>

<script>
import LongModal from "@/components/modal/LongModal.vue";
import MakeSpaceBtn from "@/components/button/MakeSpaceBtn.vue";
export default {
  data() {
    return {
      selected: {},
      step: 1,
    };
  },
  components: {LongModal, MakeSpaceBtn},
  computed: {
    spaceTypeList() {
      return this.$store.state.planetTypes;
    },
  },
  mounted() {
    this.selected = this.spaceTypeList[0];
  },
  methods: {
    selectedSpace(spaceType) {
      if (this.selected === spaceType) {
        this.selected = {};
      } else {
        this.selected = spaceType;
      }
    },
    nextStep() {
      this.step = 2;
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
  margin-bottom: 3.8rem;
}
.space-imgs .item {
  padding: 0.2rem;
}
.space-imgs .item.select {
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
</style>
