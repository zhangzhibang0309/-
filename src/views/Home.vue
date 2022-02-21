<template>
  <div>
    <div>
      <!-- 照片 -->
      <div class="img-box">
        <img src="http://video.qlu.edu.cn/images/photo/202085010011.jpg" alt="" />
      </div>

      <n-table :bordered="false" :single-line="false">
        <thead>
          <tr>
            <th>属性</th>
            <th>值</th>
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
          <tr>
            <td>时间：</td>
            <td>27号 -- 13:59:59</td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { NTable } from "naive-ui";

import { requestPostToken, requestGetMe, requestGetBackCheck } from "../service/index";

// 拿到url里面的code
let url = window.location.href;
const resUrl = url.split("?code=")[1];

// 存放需要展示的学生数据
let backDatas = ref({
  id: 201903010116,
});

// 一堆请求
let token = requestPostToken(resUrl)
  .then((res) => {
    let token = res.data.access_token;
    // 22222 这里 这个接口不能调用 总是报错请求类型
    return requestGetMe(token);
  })
  .then((res) => {
    // 11111这里 要在后端改接口
    let id = res.data.yiban_id;
    return requestGetBackCheck(201903010118);
  })
  .then((res) => {
    backDatas.value = res.data.data;
    console.log(backDatas.value);
  });
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
</style>
