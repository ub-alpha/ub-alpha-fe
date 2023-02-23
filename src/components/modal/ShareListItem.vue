<template>
  <div class="socialItem" @click="shareCapture">
    <img
      :src="require(`@/assets/${socialName}.svg`)"
      :alt="`${socialName} 공유하기`"
    />
    <strong>{{ socialName }}</strong>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  props: ["socialName", "capture"],
  data() {
    return {
      output: "",
    };
  },
  methods: {
    shareCapture() {
      $("#socialModal").modal("hide");
      $("#levelUpBtn").css("display", "none");
      const captureEl = document.querySelector(".planet.carousel-item.active");
      $(".carousel-item .bgimg").css("opacity", "1");
      setTimeout(() => {
        html2canvas(captureEl).then((canvas) => {
          $("#levelUpBtn").css("display", "flex");
          const imgData = canvas.toDataURL("image/jpeg");
          if (this.socialName === "이미지저장") {
            this.saveImg(imgData);
            $(".carousel-item .bgimg").css("opacity", "0");
          }
        });
      }, 1);
    },
    saveImg(imgData) {
      let el = document.createElement("a");
      el.href = imgData;
      el.download = "my-solar.jpeg";
      el.click();
    },
  },
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
  margin: 0 auto 0.3rem;
}
.socialItem strong {
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.4rem;
  color: var(--point);
}
</style>
