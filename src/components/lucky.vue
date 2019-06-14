<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-col-btn" @click="activedLucky">
        <span class="btn-text">开始</span>
        <span style="font-size: 0.26rem;">剩余<span style="color: #fde305;">{{0}}</span>积分</span>
      </div>
      <div class="row">
        <div class="row-col" :class="luckyObj.activedID === luckylist[0].id ? 'actived-col' : ''">
          <img :src="luckylist[0].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
        <div class="row-col" :class="luckyObj.activedID === luckylist[1].id ? 'actived-col' : ''">
          <img :src="luckylist[1].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
        <div class="row-col" :class="luckyObj.activedID === luckylist[2].id ? 'actived-col' : ''">
          <img :src="luckylist[2].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
      </div>
      <div class="row">
        <div class="row-col" :class="luckyObj.activedID === luckylist[7].id ? 'actived-col' : ''">
          <img :src="luckylist[7].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
        <div class="row-col" :class="luckyObj.activedID === luckylist[3].id ? 'actived-col' : ''">
          <img :src="luckylist[3].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
      </div>
      <div class="row">
        <div class="row-col" :class="luckyObj.activedID === luckylist[6].id ? 'actived-col' : ''">
          <img :src="luckylist[6].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
        <div class="row-col" :class="luckyObj.activedID === luckylist[5].id ? 'actived-col' : ''">
          <img :src="luckylist[5].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
        <div class="row-col" :class="luckyObj.activedID === luckylist[4].id ? 'actived-col' : ''">
          <img :src="luckylist[4].imgsrc" alt="" class="img-icon">
          <div class="col-text">手机优惠券</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { setInterval, clearInterval } from 'timers'
export default {
  name: 'Lucky', // 幸运抽奖
  data () {
    return {
      num: 0,
      luckylist: [
        {
          id: 0
        },
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
        {
          id: 7
        }
      ],
      luckyObj: {
        luckyID: 1,
        times: null,
        activedID: '',
        activednum: null,
        activedtime: null
      },
      clickLucky: false
    }
  },
  created () {},
  methods: {
    activedLucky () {
      if (!this.clickLucky) {
        Object.assign(this.$data.luckyObj, this.$options.data().luckyObj)
        this.handlePlay()
      }
    },
    handlePlay () {
      const _this = this
      _this.luckyObj.luckyID = this.luckylist[Math.floor(Math.random() * 7)].id
      this.luckyObj.times = this.luckylist.length * Math.floor(Math.random() * 5 + 4)
      let loopTime = setInterval(() => {
        _this.clickLucky = true
        if (_this.luckyObj.activedID === _this.luckyObj.luckyID && _this.luckyObj.activedtime > _this.luckyObj.times) {
          clearInterval(loopTime)
          _this.clickLucky = false
          return
        }
        if (_this.luckyObj.activedID === '') {
          _this.num = 0
          _this.luckyObj.activedID = _this.luckylist[_this.num].id
          _this.luckyObj.activednum = _this.num
        } else {
          _this.num = _this.luckyObj.activednum
          if (_this.num >= 8) {
            _this.num = 0
            _this.luckyObj.activedID = _this.luckylist[_this.num].id
            _this.luckyObj.activednum = _this.num
          } else {
            _this.num = _this.num + 1
            _this.luckyObj.activedID = _this.luckylist[_this.num - 1].id
            _this.luckyObj.activednum = _this.num
          }
        }
        _this.luckyObj.activedtime = _this.luckyObj.activedtime + 1
      }, 40)
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background: url('./img/lucky_bg.png') no-repeat center;
  background-size: 100% 100%;
  padding: 0.6rem;
}
.rows-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
}
.rows-box .row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.row .row-col {
  width: 2.533rem;
  height: 2.213rem;
  background: url('./img/box_nomal.png') no-repeat center;
  background-size: 100% 100%;
  box-sizing: border-box;
  padding-top: 0.333rem;
}
.row-col .img-icon {
  display: inline-block;
  width: 2.2933rem;
  height: 0.88rem;
  border: none;
}
.row-col .col-text {
  font-size: 0.32rem;
  color: #e6483c;
}
.row .actived-col {
  background: url('./img/box_select.png') no-repeat center;
  background-size: 100% 100%;
}
.rows-box .row-col-btn {
  width: 2.533rem;
  height: 2.213rem;
  box-sizing: border-box;
  padding: 0.2rem;
  background: url('./img/btn_start.png') no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.row-col-btn span {
  display: inline-block;
  color: #ffffff;
}
.btn-text {
  font-size: 0.75rem;
  color: #ffffff;
}
</style>
