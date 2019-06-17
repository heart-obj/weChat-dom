<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-box">
        <div class="row-item">
          <div class="user-icon"></div>
          <div class="nickname">
            <span>尘夏</span>
            <span>积分：136</span>
          </div>
          <div class="item-btn">签到得积分</div>
        </div>
      </div>
      <div class="row-box2">
        <div class="row-item" @click.stop="handleClickFunc">
          <mt-cell title="个人资料" is-link></mt-cell>
        </div>
        <div class="row-item">
          <mt-cell title="优惠劵" is-link>
            <span style="color: #fc9a2b;font-size: 0.36rem;">5</span>
            <span style="color: #999999;font-size: 0.36rem;">张</span>
          </mt-cell>
        </div>
        <div class="row-item">
          <mt-cell title="我们的贷款" is-link></mt-cell>
        </div>
        <div class="row-item">
          <mt-cell title="关于我们" is-link></mt-cell>
        </div>
        <div class="row-item">
          <mt-cell title="联系我们">
            <span style="color: #fc9a2b;font-size: 0.48rem;">028-98564126</span>
          </mt-cell>
        </div>
      </div>
    </div>
    <div class="close-btn">退出登录</div>
  </div>
</template>
<script>
export default {
  name: 'PersonalCenter', // 个人中心
  methods: {
    handleClickFunc () {
      this.$router.push({
        name: 'PersonalData',
        query: ''
      })
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  background: #f5f5f5;
}
.rows-box {
  width: 100%;
  box-sizing: border-box;
  padding: 0.32rem 0.32rem 0 0.32rem;
}
.rows-box .row-box {
  width: 100%;
  background: #ffffff;
  border-radius: 7px;
  margin-top: 0.32rem;
  overflow: hidden;
}
.row-box .row-item {
  position: relative;
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  padding: 0.32rem;
}
.row-item div {
  display: inline-block;
}
.row-item .user-icon {
  width: 1.707rem;
  height: 1.707rem;
  border-radius: 50%;
  background: #f5f5f5;
  overflow: hidden;
}
.row-item .nickname {
  padding-left: 0.32rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.nickname span {
  display: block;
  text-align: left;
  font-size: 0.427rem;
  color: #000;
}
.nickname span:nth-child(2) {
  color: #868b91;
}
.item-btn {
  width: 2.827rem;
  height: 0.96rem;
  border-radius: 0.96rem;
  background: #ffb831;
  font-size: 0.427rem;
  color: #ffffff;
  line-height: 0.96rem;
  position: absolute;
  right: 0.32rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
.row-box2 {
  width: 100%;
  background: #ffffff;
  border-radius: 7px;
  box-sizing: border-box;
  margin-top: 0.32rem;
  overflow: hidden;
  position: relative;
  /* padding: 0 0.32rem; */
}
.row-box2 .row-item {
  border-bottom: 1px solid #f4f4f4;
  padding: 0.2rem;
}
.row-box2 >>> .mint-cell-title {
  text-align: left;
  font-size: 0.42rem;
  color: #000;
}

.row-box2 >>> .mint-cell-wrapper {
  background: none;
}
.row-box2 >>> .mint-cell:last-child {
  background: none;
}
.row-box2 >>> .mint-cell-allow-right::after{
  width: 0.25rem;
  height: 0.25rem;
}
.row-box2 >>> .mint-cell-value.is-link {
  margin-right: 0.5rem;
}
.close-btn {
  display: inline-block;
  width: 9.36rem;
  height: 1.2rem;
  background: #ff4747;
  border-radius: 7px;
  color: #ffffff;
  font-size: 0.48rem;
  line-height: 1.2rem;
  margin: 0.32rem 0;
}
</style>
