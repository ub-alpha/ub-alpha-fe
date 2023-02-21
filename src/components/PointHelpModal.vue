<template>
  <LongModal :modalName="'help'" :title="'도움말'">
    <div class="text-content">
      <div class="text">
        <p class="summary">웰컴 미션</p>
        <div class="description">
          웰컴미션은 최초 한 번만 참여할 수 있어요<br />
          신한투자증권의 서비스를 이용해보세요<br />
        </div>
      </div>
      <div class="text">
        <p class="summary">데일리 미션</p>
        <div class="description">
          데일리미션은 하루 한 번만 참여할 수 있어요<br />
          신한 알파의 다양한 기능을 이용해보세요<br />
        </div>
      </div>
      <div class="text">
        <div class="description">
          포인트로 행성을 레벨업해보세요<br />
          다양한 혜택이 기다리고 있습니다!<br />
        </div>
      </div>
    </div>
  </LongModal>
</template>

<script>
import LongModal from "@/components/modal/LongModal.vue";
export default {
  components: {LongModal},

  mounted() {
    $("#longModal-help").modal("show");
  },
};
</script>

<style scoped>
.text-content {
  color: var(--text-white);
  display: flex;
  align-content: center;
  justify-content: space-around;
  flex-direction: column;
  gap: 5rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
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

.description {
  font-weight: 400;
  font-size: 1.1rem;
  line-height: 1.6rem;
  color: var(--modal-white);
}
</style>
