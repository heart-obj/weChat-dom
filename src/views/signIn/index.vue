<template>
  <div class="box">
    <div class="header-box">
      <div style="font-size: 0.553rem;color: #ffffff;">我的积分：135</div>
      <div style="font-size: 0.32rem;color: #ffffff;">每天签到得积分，可用来兑换商城商品和转盘抽奖</div>
    </div>
    <div  class="date-box">
      <div id="date-test"></div>
    </div>
    <div class="row-item">
      <div class="item-text">已签到9天，已获得135积分</div>
    </div>
    <div class="footer-box">
      <div><div class="footer-btn" @click="signInHandle"></div></div>
      <span style="font-size: 0.48rem;color: #eba100;">点击签到</span>
    </div>
    <div class="model-alert-tip" v-show="showModel">
      <div class="model-content">
        <div class="content-h"></div>
        <div class="content-box"></div>
        <div class="content-text">
          <div class="signin-alert">签到成功</div>
          <div class="signin-text">已签到10天，获得积分137</div>
        </div>
        <div class="close-btn" @click="showModel = false"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignIn', // 签到
  data () {
    return {
      showModel: false
    }
  },
  mounted () {
    this.loadLaydate()
  },
  methods: {
    loadLaydate () {
      laydate.render({
        elem: '#date-test',
        position: 'static',
        showBottom: false,
        mark: {
          '2019-06-18': '18'
        }
      })
    },
    signInHandle () {
      this.showModel = true
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  background: #ffffff;
}
.box .header-box {
  width: 100%;
  height: 8.507rem;
  background: url('./img/header_bg.png') no-repeat center;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 0.8rem;
}
.header-box div {
  padding-top: 0.02rem;
}
.box .date-box {
  display: inline-block;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  margin-top: -6rem;
}
.box>>>.layui-laydate-main {
  width: 7rem;
  /* height: 8rem; */
}
.date-box>>>.layui-laydate-content td, .layui-laydate-content th {
  width: 0.8rem;
  height: 0.8rem;
}
.date-box>>>.layui-this {
  background: url('./img/datecol_bg.png') no-repeat center;
  background-size: 70% 70%;
}
.date-box>>>.layui-laydate, .layui-laydate-hint {
  border: none;
}
.box .row-item {
  width: 7rem;
  display: inline-block;
  padding: 0.4rem 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  border-radius: 7px;
  margin-top: 0.5rem;
  background: #ffffff;
}
.row-item .item-text {
  display: inline-block;
  font-size: 0.32rem;
  color: #333333;
  position: relative;
}
.row-item .item-text::after {
  position: absolute;
  content: '';
  left: -0.5rem;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 50%;
  background: url('./img/mark_icon.png') no-repeat center;
  background-size: 100% 100%;
}
.box .footer-box {
  padding: 0.8rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer-box .footer-btn {
  width: 2.613rem;
  height: 2.613rem;
  border-radius: 50%;
  background: url('./img/Signin_btn_icon.png') no-repeat center;
  background-size: 100% 100%;
  display: inline-block;
}
.box .model-alert-tip {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
}
.model-alert-tip .model-content {
  width: 6.813rem;
  height: 5.067rem;
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.model-content .content-box {
  width: 100%;
  height: 100%;
  background: url('./img/bottom_bg.png') no-repeat center;
  background-size: 100% 100%;
}
.model-content .content-h {
  width: 100%;
  height: 100%;
  background: url('./img/top_bg.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  top: -50%;
  left: 0;
}
.model-content .content-text {
  height: 1.2rem;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  z-index: 11;
  display: inline-block;
}
.content-text .signin-alert {
  font-size: 0.84rem;
  color: #ffffff;
  text-shadow: 0.06rem 0.06rem 0px rgba(0, 0, 0, .5)
}
.content-text .signin-text {
  font-size: 0.4rem;
  color: #ffffff;
  text-shadow: 0.03rem 0.03rem 0px rgba(0, 0, 0, .5)
}
.model-content .close-btn {
  width: 0.587rem;
  height: 0.587rem;
  background: url('./img/close_icon.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  right: -0.2rem;
  top: -2.467rem;
}
</style>
