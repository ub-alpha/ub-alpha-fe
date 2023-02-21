<template>
  <LongModal :modalName="'add'">
    <div class="msg">생성하고 싶은 행성을 선택하세요 !</div>
    <div class="space-imgs">
      <template v-for="spaceType in spaceTypeList" :key="spaceType.planet_id">
        <div class="item">
          <img :src="require(`@/assets/${spaceType.image}`)" alt="" />
        </div>
      </template>
    </div>
    <MakeSpaceBtn class="btn" :btnMsg="'생성하기'"></MakeSpaceBtn>
  </LongModal>
</template>

<script>
import LongModal from "@/components/modal/LongModal.vue";
import MakeSpaceBtn from "@/components/button/MakeSpaceBtn.vue";
export default {
  data() {
    return {
      spaceTypeList: [],
    };
  },
  components: {LongModal, MakeSpaceBtn},
  computed: {
    spaceTypeList() {
      return this.$store.state.planetTypes;
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
}
.space-imgs .item.select {
  border: 0.2rem solid var(--point);
  border-radius: 1rem;
}
.space-imgs .item img {
  width: 5.5rem;
}
.btn {
  margin-bottom: 1.1rem;
}
</style>
