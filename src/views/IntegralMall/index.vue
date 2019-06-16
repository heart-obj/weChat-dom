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
              <div class="integral-box">
                <span class="original-price">原价999</span>
                <span class="integral-num">5660积分兑换</span>
              </div>
              <div class="goods-btn">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tip-box" v-show="showTip">
      <div class="model-tip">
        <div class="model-h"></div>
        <div class="model-tip-content">
          <div class="model-tip-text">确认使用560积分兑换该商品吗？</div>
          <div class="model-tip-btns">
            <span class="btn">确定</span>
            <span class="text-btn">暂不兑换</span>
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
    return {
      showTip: false
    }
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
  padding-bottom: 0.507rem;
  display: flex;
  justify-content: space-between;
}
.goods-row .goods-col1 {
  width: 3.013rem;
  height: 3.013rem;
  display: inline-block;
  background: #e1e1e1;
  border-radius: 9px;
}
.goods-col1 img {
  display: inline-block;
  width: 100%;
  height: 100%;
}
.goods-row .goods-col2 {
  width: calc(100% - 3.013rem);
  height: 3.013rem;
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
  box-sizing: border-box;
  padding-left: 0.3rem;
}
.goods-detail .goods-btn {
  padding: 0.16rem 0.29rem;
  background: #4174ef;
  border-radius: 7px;
  color: #ffffff;
  font-size: 0.32rem;
}
.goods-detail .integral-box {
  position: relative;
}
.integral-box .integral-num {
  font-size: 0.373rem;
  color: #f54b34;
  display: inline-block;
  line-height: 0.733rem;
}
.integral-box .original-price {
  position: absolute;
  top: -0.5rem;
  font-size: 0.373rem;
  color: #999999;
  text-decoration: line-through;
}
.tip-box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
}
.model-tip {
  width: 8.027rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: #ffffff;
  border-radius: 7px;
  box-sizing: border-box;
  padding: 3.26rem 10px 10px 10px;
}
.model-tip .model-h {
  height: 3.84rem;
  width: 100%;
  position: absolute;
  top: -0.68rem;
  left: 0;
  background: url('./img/window_design.png') no-repeat center;
  background-size: 100% 100%;
}
.model-tip .model-tip-text {
  font-size: 0.48rem;
  color: #333333;
}
.model-tip-btns {
  display: flex;
  justify-content: center;
  margin: 0.267rem 0;
}
.model-tip-btns .btn {
  padding: 0.16rem 1.173rem;
  background: url('./img/btn_sure.png') no-repeat center;
  background-size: 100% 100%;
  border-radius: 7px;
  color: #999999;
  font-size: 0.32rem;
}
.model-tip-btns .text-btn {
  font-size: 0.32rem;
  color: #999999;
  margin-left: 0.263rem;
  padding: 0.16rem 0;
}
</style>
