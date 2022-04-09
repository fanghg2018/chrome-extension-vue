<template>
  <el-card class="box-card">
    <div class="clearfix">
      <span>
        <el-image style="width: 16px; height: 16px" :src="url"></el-image
      ></span>
      <span>Chrome扩展程序选项 </span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ "列表内容 " + o }}
    </div>
    <div class="btn">
      <el-button size="medium" type="primary">保存</el-button
      ><el-button size="medium" class="reset">重置</el-button>
    </div>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      url: require("../assets/logo.png"),
    };
  },
};
</script>

<style>
body {
  background-color: #eeeeee;
  display: flex;
  justify-content: center;
}
span {
  margin-left: 10px;
}
.text {
  margin: 20px 20px;
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix {
  font-size: 20px;
  text-align: center;
  font-weight: bold;
}
.reset {
  margin-left: 20px !important;
}

.btn {
  display: flex;
  justify-content: flex-end;
}

.box-card {
  margin-top: 40px;
  width: 650px;
}
</style>
