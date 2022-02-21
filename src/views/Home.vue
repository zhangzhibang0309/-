<template>
  <n-config-provider :theme="darkTheme">
    <div>
      <!-- 照片 -->
      <div class="img-box">
        <img src="http://video.qlu.edu.cn/images/photo/202085010011.jpg" alt="" />
      </div>
      <br />
      <n-grid class="start" x-gap="12" :cols="1">
        <n-gi>
          <n-space class="test">
            <n-alert title="欢迎回校" type="default" closable>
              <template #icon>
                <n-icon>
                  <ios-airplane />
                </n-icon>
              </template>
              欢迎回到齐鲁工业大学（山东省科学院）
            </n-alert>
          </n-space>
        </n-gi>
      </n-grid>
      <br />
      <n-grid class="end" x-gap="12" :cols="1">
        <n-gi>
          <n-space class="test">
            <n-alert title="返校时间" type="info" closable>
              张治邦同学,您应于27号返校。
              <n-time-picker
                disabled
                default-formatted-value="00:12:13"
                :theme="darkTheme"
              />
            </n-alert>
          </n-space>
        </n-gi>
      </n-grid>
      <br />

      <n-grid class="start" :x-gap="12" :y-gap="10" :cols="1">
        <n-grid-item>
          <n-tag closable size="large"> 姓名：张治邦 </n-tag>
        </n-grid-item>

        <n-grid-item>
          <n-tag closable size="large" type="success"> 学号：201903010116 </n-tag>
        </n-grid-item>

        <n-grid-item>
          <n-tag closable size="large" type="error"> 学院：计算机科学与技术学院 </n-tag>
        </n-grid-item>

        <n-grid-item>
          <n-tag closable size="large" type="warning"> 班级：计科19 </n-tag>
        </n-grid-item>

        <n-grid-item>
          <n-tag closable size="large" type="info"> 类型：本科生 </n-tag>
        </n-grid-item>
      </n-grid>
    </div>
  </n-config-provider>
</template>

<script setup>
import { NSpace } from "naive-ui";
import { NTag } from "naive-ui";
import { NIcon } from "naive-ui";
import { NAlert } from "naive-ui";
import { NGrid } from "naive-ui";
import { NGi } from "naive-ui";
import { NGridItem } from "naive-ui";
import { NTimePicker } from "naive-ui";
import { NConfigProvider } from "naive-ui";
import { darkTheme } from "naive-ui";
import { IosAirplane } from "@vicons/ionicons4";

import { requestJava,requestPostToken } from "../service/index";

let url = window.location.href;
const resUrl = url.split("?code=")[1]
requestPostToken(resUrl)


requestJava()
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
</style>
