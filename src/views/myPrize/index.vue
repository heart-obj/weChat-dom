<template>
  <div class="box">
    <div class="rows-box">
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
              <div class="goods-btn" @click="buyNowFunc">再次兑换</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MyPrize', // 我的奖品
  data () {
    return {
      tipType: 'exchange',
      showTip: true,
      cityPupop: false
    }
  },
  methods: {
    buyNowFunc () {
      this.$router.push({
        name: 'IntegralMall',
        params: ''
      })
    }
  }
}
</script>
<style scoped>

.row-goodslist {
  width: 100%;
  padding-top: 0.5rem;
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

</style>
