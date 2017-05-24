<template>
<div style="height:100%">
  <div class="landing-page">
    <div class="landing-page-content">
      <p class="landing-page-content_tip">Vue2.0-英雄联盟助手</p>
      <p class="landing-page-content_enter">
        <el-button type="primary" @click="enter">WELCOME</el-button>
        <!-- <mu-raised-button label="Welcome" class="demo-raised-button" @click="enter" primary/> -->
      </p>
    </div>
  </div>
</div>
</template>
<script>
export default {
  methods: {
    enter() {
      // visible = true
      this.$router.push('/News')
    }
  }
}
</script>

<style lang="less" scoped>
.landing-page {
    width: 100%;
    height: 100%;
    background: url('http://o9xap42x4.bkt.clouddn.com/landing.jpeg') no-repeat;
    background-size: cover;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    &-content {
        &_tip {
            width: 100%;
            height: 100%;
            font-size: 24px;
            color: #fff;
            font-weight: bold;
        }
        &_enter {
            width: 100%;
            text-align: center;
            margin-top: 100px;
        }
    }
}
.el-button{
  width:104px;
  color:#FFF !important;
  span{
   color:#FFF !important;
 }
}
</style>
