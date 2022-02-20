<template>
  <div>
    <h2></h2>
    <div class="text">
      <n-gradient-text :theme="darkTheme" :size="24" type="success"
        >欢迎来到齐鲁工业大学</n-gradient-text
      >
    </div>

    <n-image
      width="350"
      src="https://catalinazzz.oss-cn-beijing.aliyuncs.com/image/20220220225515.png"
      fallback-src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    />
    <div class="block-box">
      <div class="block-back">
        <span class="block-back-text">返校日期</span>
      </div>
      <div class="block-back">
        <span class="block-back-text">返校日期</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui";
import { NImage } from "naive-ui";
import { NGradientText } from "naive-ui";
import { darkTheme } from "naive-ui";
import { NCard } from "naive-ui";
</script>

<style scoped>

.text {
  text-align: center;
}
.n-image {
  display: block;
  text-align: center;
}

.block-box {
  text-align: center;
}
.block-back {
  display: inline-block;
  width: 43.2vw;
  max-width: 164px;
  height: 9.2vh;
  min-height: 85px;
  background-color: rgb(24, 24, 28);
  border: 1px dashed #9a9a9a;
  margin: 0 10px;
}
.block-back-text {
    color: white;
    position: relative;
    top: 20px;
}
</style>
