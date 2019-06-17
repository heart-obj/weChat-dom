<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-Luckydraw">
        <div class="lucky-box">
          <Lucky></Lucky>
        </div>
        <div class="btn-box">
          <div class="query-btn">我的积分：133</div>
          <div class="query-btn" @click="myprize">我的奖品</div>
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
              <div class="goods-btn" @click="buyNowFunc">立即购买</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="tip-box" v-show="showTip">
      <div class="model-tip">
        <div class="model-h"></div>
        <div class="model-tip-content" v-if="tipType === 'exchange'">
          <div class="model-tip-text">确认使用560积分兑换该商品吗？</div>
          <div class="model-tip-btns">
            <span class="btn" @click="exchangeFunc">确定</span>
            <span class="text-btn" @click="showTip = false">暂不兑换</span>
          </div>
        </div>
        <div class="model-tip-content" v-if="tipType === 'location'">
          <div class="model-tip-text">为了方便快速的将商品送到您手上,请填写<br/>准确的联系方式与收获地址</div>
          <div class="from-box">
            <div class="from-item">
              <span class="item-lable">姓名</span>
              <span class="item-input"><input type="text" placeholder="请输入收货人姓名"></span>
            </div>
            <div class="from-item">
              <span class="item-lable">电话</span>
              <span class="item-input"><input type="text" placeholder="请输入收货人电话号码"></span>
            </div>
            <div class="from-item">
              <span class="item-lable">收货地址</span>
              <span class="item-input location-box"><input type="text" placeholder="请选择所在地区" readonly @click="selectRegion(true)"></span>
            </div>
            <div class="from-item">
              <span class="item-lable"></span>
              <span class="item-textarea"><textarea class="textarea" placeholder="请填写详细地址，如道路、门牌号、 小区、楼牌号等"></textarea></span>
            </div>
          </div>
          <div class="model-tip-btns">
            <span class="btn" @click="locationFunc">确定</span>
            <span class="text-btn" @click="showTip = false">暂不兑换</span>
          </div>
        </div>
        <div class="model-tip-content" v-if="tipType === 'exchangeSuccess'">
          <div class="model-tip-text">奖品将在7-15个工作日寄出，如有问题请联系客服2222222</div>
          <div class="model-tip-btns">
            <span class="btn" @click="showTip = false">继续兑换</span>
            <span class="text-btn" @click="myprize">我的奖品</span>
          </div>
        </div>
      </div>
      <div class="city-pupop-box" v-show="cityPupop">
        <div :class="cityPupop ? 'showCity-pupop' : 'city-pupop'">
          <div class="city-title">所在城市（省市区）<span class="close-btn" @click="selectRegion(false)"></span></div>
          <Citylist></Citylist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Lucky from '@/components/lucky'
import Citylist from '@/components/cityPupop'
export default {
  name: 'IntegralMall', // 积分商城
  components: {
    Lucky,
    Citylist
  },
  data () {
    return {
      tipType: 'exchange',
      showTip: false,
      cityPupop: false
    }
  },
  methods: {
    exchangeFunc () {
      this.tipType = 'location'
    },
    locationFunc () {
      this.tipType = 'exchangeSuccess'
    },
    buyNowFunc () {
      this.showTip = true
      this.tipType = 'exchange'
    },
    selectRegion (type) {
      this.cityPupop = type
    },
    myprize () {
      this.$router.push({
        name: 'MyPrize',
        params: ''
      })
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
  display: flex;
  justify-content: space-between;
}
.integral-box .integral-num {
  font-size: 0.373rem;
  color: #f54b34;
  display: inline-block;
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
  overflow: auto;
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
  font-size: 0.373rem;
  color: #333333;
}
.model-tip-btns {
  display: flex;
  justify-content: center;
  margin: 0.267rem 0;
}
.model-tip-btns .btn {
  padding: 0.08rem 0.6rem;
  background: url('./img/btn_sure.png') no-repeat center;
  background-size: 100% 100%;
  border-radius: 7px;
  color: #ae760a;
  font-size: 0.32rem;
}
.model-tip-btns .text-btn {
  font-size: 0.32rem;
  color: #999999;
  margin-left: 0.263rem;
  padding: 0.16rem 0;
}
.from-box {
  margin-top: 0.26rem;
}
.from-box .from-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  margin-top: 0.26rem;
}
.from-item .item-lable {
  display: inline-block;
  height: 0.88rem;
  line-height: 0.88rem;
  width: 1.5rem;
  text-align: right;
  font-size: 0.32rem;
}
.from-item .item-input {
  display: inline-block;
  width: 5.333rem;
  height: 0.88rem;
  padding-left: 0.26rem;
  position: relative;
}
.item-input input {
  width: 100%;
  height: 100%;
  border: 1px solid #dddddd;
  border-radius: 7px;
  outline: none;
  box-sizing: border-box;
  padding-left: 0.2rem;
  font-size: 0.32rem;
  color: #999999;
  float: left;
}
.from-item .item-textarea {
  display: inline-block;
  width: 5.333rem;
  padding-left: 0.26rem;
}
.item-textarea .textarea {
  width: 100% !important;
  height: 1.8rem !important;
  display: inline-block;
  border: 1px solid #dddddd;
  border-radius: 7px;
  outline: none;
  box-sizing: border-box;
  padding: 0.2rem;
  font-size: 0.32rem;
  color: #999999;
  resize: none;
}
.city-pupop-box {
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .5);
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}
.location-box::after {
  content: '';
  display: inline-block;
  width: 0.307rem;
  height: 0.453rem;
  background: url('./img/location_icon.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  right: 0.1rem;
  top: 0;
  bottom: 0;
  margin: auto;
}
@keyframes myfirst {
  0%   {bottom: -60%}
  100% {bottom: -0%}
}
@keyframes hidemyfirst {
  0%   {bottom: 0%}
  100% {bottom: -60%}
}
.city-pupop {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  animation: hidemyfirst 500ms;
  -moz-animation: hidemyfirst 500ms; /* Firefox */
  -webkit-animation: hidemyfirst 500ms; /* Safari and Chrome */
  -o-animation: hidemyfirst 500ms; /* Opera */
  bottom: -60%;
}
.showCity-pupop {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 0;
  background: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  animation: myfirst 500ms;
  -moz-animation: myfirst 500ms; /* Firefox */
  -webkit-animation: myfirst 500ms; /* Safari and Chrome */
  -o-animation: myfirst 500ms; /* Opera */
  bottom: 0%;
}
.city-title {
  box-sizing: border-box;
  height: 1.067rem;
  width: 100%;
  text-align: center;
  font-size: 0.43rem;
  color: #000;
  line-height: 1.067rem;
  border: 1px solid #dddddd;
  border-bottom: none;
  position: relative;
}
.close-btn {
  width: 0.453rem;
  height: 0.453rem;
  position: absolute;
  right: 0.133rem;
  top: 0;
  bottom: 0;
  margin: auto;
  background: url('./img/close_icon.png') no-repeat center;
  background-size: 100% 100%;
}
</style>
