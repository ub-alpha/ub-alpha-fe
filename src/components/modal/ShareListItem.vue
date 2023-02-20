<template>
  <div class="socialItem">
    <img
      :src="require(`@/assets/${socialName}.svg`)"
      :alt="`${socialName} 공유하기`"
    />
    <strong>{{ socialName }}</strong>
  </div>
</template>

<script>
export default {
  props: ["socialName"],
};
</script>

<style scoped>
.socialItem {
  width: fit-content;
  text-align: center;
  margin: 0 auto;
}
.socialItem img {
  width: 4.2rem;
  display: block;
  margin: 0 auto 3px;
}
.socialItem strong {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;
  color: var(--point);
}
</style>
