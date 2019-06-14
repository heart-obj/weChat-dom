<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-Luckydraw">
        <div class="lucky-box">
          <Lucky></Lucky>
        </div>
        <div class="btn-box">
          <div class="query-btn">我的积分：133</div>
          <div class="query-btn">我的奖品</div>
        </div>
      </div>
      <div class="row-goodslist">
        <div class="goods-row">
          <div class="goods-col1"><img src="" alt="" srcset=""></div>
          <div class="goods-col2">
            <div class="goods-title">Redmi 红米7 续航小霸王</div>
            <div class="goods-detail">
              <div></div>
              <div class="goods-btn">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Lucky from '@/components/lucky'
export default {
  name: 'IntegralMall', // 积分商城
  components: {
    Lucky
  },
  data () {
    return {}
  }
}
</script>
<style scoped>
.row-Luckydraw {
  width: 100%;
  height: 14.773rem;
  box-sizing: border-box;
  padding: 4.52rem 0 0 0;
  background: url('./img/bg_img_h.png') no-repeat center;
  background-size: 100% 100%;
  position: relative;
}
.row-Luckydraw .btn-box {
  width: 100%;
  box-sizing: border-box;
  padding:  0 1rem;
  position: absolute;
  bottom: 0.453rem;
  display: flex;
  justify-content: space-between;
}
.query-btn {
  width: 3.733rem;
  padding: 0.34rem 0;
  background: url('./img/query_btn.png') no-repeat center;
  background-size: 100% 100%;
  color: #ffffff;
  font-size: 0.373rem;
}
.lucky-box {
  width: 8.933rem;
  height: 8.04rem;
  display: inline-block;
}
.row-goodslist {
  width: 100%;
}
.goods-row {
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.32rem;
  display: flex;
  justify-content: space-between;
}
.goods-row .goods-col1 {
  width: 3.013rem;
  height: 3.013rem;
  display: inline-block;
  background: red;
}
.goods-col1 img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.goods-row .goods-col2 {
  width: calc(100% - 3.013rem);
  height: 3.013rem;
  background: gold;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding-bottom: 0.32rem;
}
.goods-col2 .goods-title {
  font-size: 0.427rem;
  color: #333333;
  font-weight: 500;
  padding-top: 0.2rem;
}
.goods-col2 .goods-detail {
  display: flex;
  justify-content: space-between;
}
.goods-detail .goods-btn {
  padding: 0.16rem 0.29rem;
  background: #4174ef;
  border-radius: 7px;
  color: #ffffff;
  font-size: 0.32rem;
}
</style>
