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
  width: 42px;
  display: block;
  margin: 0 auto 3px;
}
.socialItem strong {
  font-weight: 700;
  font-size: 10px;
  line-height: 14px;
  color: var(--point);
}
</style>
