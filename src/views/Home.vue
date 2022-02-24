<template>
  <div>
    <!-- 页面加载 -->
    <div :class="{ box: isTrueSpin }" class="load">
      <n-space>
        <n-spin :size="70" />
      </n-space>
    </div>

    <!-- 成功返回页面 -->
    <div :class="{ box: isTrue }">
      <!-- 照片 -->
      <div class="img-box">
        <img :src="imgSrc" alt="" />
      </div>

      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th style="font-weight: 600">防截屏：</th>
            <th style="font-weight: 600">{{ hour }}:{{ min }}:{{ sed }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="font-size: 25px">返校时间</td>
            <td style="font-size: 25px; color: red">{{ backDatas.date }}</td>
          </tr>
          <tr>
            <td>姓名</td>
            <td>{{ backDatas.name }}</td>
          </tr>
          <tr>
            <td>学号：</td>
            <td>{{ backDatas.id }}</td>
          </tr>
          <tr>
            <td>学院：</td>
            <td>{{ backDatas.college }}</td>
          </tr>
          <tr>
            <td>班级：</td>
            <td>{{ backDatas.studentClass }}</td>
          </tr>
          <tr>
            <td>类型：</td>
            <td>{{ backDatas.type }}</td>
          </tr>
        </tbody>
      </n-table>
    </div>

    <!-- 失败返回 -->
    <h1>{{ error }}</h1>

    <div class="record-box" :class="{ box: !isTrueSpin }">
      <a data-v-4b5f2e30="" href="https://beian.miit.gov.cn/" class="record"
        >鲁ICP备2021036451号</a
      >
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { NTable } from "naive-ui";
import { NSpin } from "naive-ui";

import { requestGetData } from "../service/index";

// 拿到url里面的code
let url = window.location.href;
const resUrl = url.split("?code=")[1];
console.log(resUrl);
// 存放需要展示的学生数据
let backDatas = ref({});
let imgSrc = ref("");
let error = ref("");
let isTrue = ref(true);
let isTrueSpin = ref(false);

// 一堆请求
requestGetData(resUrl)
  .then((res) => {
    isTrue.value = false;
    isTrueSpin.value = true;

    backDatas.value = res.data.data;
    imgSrc.value = `http://video.qlu.edu.cn/images/photo/${backDatas.value.id}.jpg`;
  })
  .catch((err) => {
    isTrue.value = true;
    isTrueSpin.value = true;

    error.value = "未查到您的当日返校许可，请勿返校，如有问题请与辅导员联系。";
  });

let hour = ref(0);
let min = ref(0);
let sed = ref(0);
setInterval(() => {
  let date = new Date();
  sed.value =
    date.getSeconds() < 10 ? "0" + String(date.getSeconds()) : String(date.getSeconds());
  hour.value =
    date.getHours() < 10 ? "0" + String(date.getHours()) : String(date.getHours());
  min.value =
    date.getMinutes() < 10 ? "0" + String(date.getMinutes()) : String(date.getMinutes());
}, 1000);
</script>

<style scoped>
.text {
  text-align: center;
}
.img-box {
  text-align: center;
}
.block-left {
  margin-left: 50px;
  margin-right: 6px;
}
.test {
  justify-content: center !important;
}
.end {
  justify-items: end;
}
.start {
  justify-items: start;
}

.n-table {
  font-size: 20px;
  font-weight: 600;
}

.box {
  display: none;
}
.record {
  text-decoration: none;
  display: block;
  font-weight: 800;
  color: black;
  text-align: center;
}

.load {
  position: fixed;
  top: 45vh;
  left: 43vw;
}
</style>
