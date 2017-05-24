<template>
  <div class="about">
    <div class="about-info">
      <img src="../images/logo1.png" alt="">
      <p>Vue2.0 英雄联盟助手</p>
      <p>技术栈:vue-cli + axios + vuex + mint-ui</p>
      <p>version: 1.0</p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.about {
  height: 100%;
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
  &-info {
    img {
      width: 100px;
      height: 100px;
      display: block;
      margin: 0 auto;
    }
    p {
      text-align: center;
    }
  }
}
</style>
