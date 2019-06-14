<template>
  <div class="city-box">
    <div class="city-h">
      <span :class="showProvince ? 'thisText': ''" @click="selecProvince">{{regionObj.provinceName || '选择省'}}</span>
      <span :class="showCity ? 'thisText': ''" @click="selecCity">{{regionObj.cityName || '选择市'}}</span>
      <span :class="showDistrict ? 'thisText': ''">{{regionObj.districtName || '选择区'}}</span>
    </div>
    <div class="city-content">
      <div v-show="showProvince">
        <div class="city-col" v-for="(item, i) in provincelist" :key="i" @click="provinceClick(item)">{{item.name}}</div>
      </div>
      <div v-show="showCity">
        <div class="city-col" v-for="(item, i) in cityArr" :key="i" @click="cityClick(item)">{{item.name}}</div>
      </div>
      <div v-show="showDistrict">
        <div class="city-col" v-for="(item, i) in district" :key="i" @click="districtClick(item)">{{item.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Citylist',
  data () {
    return {
      provincelist: [
        {
          id: '510000',
          name: '四川'
        },
        {
          id: '530000',
          name: '重庆'
        },
        {
          id: '520000',
          name: '贵州'
        },
        {
          id: '110000',
          name: '北京'
        }
      ],
      cityArr: [
        {
          id: '510000',
          name: '四川'
        },
        {
          id: '530000',
          name: '重庆'
        },
        {
          id: '520000',
          name: '贵州'
        },
        {
          id: '110000',
          name: '北京'
        }
      ],
      district: [
        {
          id: '510000',
          name: '四川'
        },
        {
          id: '530000',
          name: '重庆'
        },
        {
          id: '520000',
          name: '贵州'
        },
        {
          id: '110000',
          name: '北京'
        }
      ],
      regionObj: {
        province: null,
        provinceName: null,
        city: null,
        cityName: null,
        district: null,
        districtName: null
      },
      showProvince: true,
      showCity: false,
      showDistrict: false
    }
  },
  methods: {
    selecProvince () {
      this.showProvince = true
      this.showCity = false
      this.showDistrict = false
      Object.assign(this.$data.regionObj, this.$options.data().regionObj)
    },
    selecCity () {
      if (this.regionObj.province) {
        this.showProvince = false
        this.showCity = true
        this.showDistrict = false
        this.regionObj.city = null
        this.regionObj.cityName = null
        this.regionObj.district = null
        this.regionObj.districtName = null
      }
    },
    provinceClick (data) {
      this.regionObj.province = data.id
      this.regionObj.provinceName = data.name
      this.showProvince = false
      this.showCity = true
      this.showDistrict = false
    },
    cityClick (data) {
      this.regionObj.city = data.id
      this.regionObj.cityName = data.name
      this.showProvince = false
      this.showCity = false
      this.showDistrict = true
    },
    districtClick (data) {
      this.regionObj.district = data.id
      this.regionObj.districtName = data.name
      this.showProvince = false
      this.showCity = false
      this.showDistrict = true
    }
  }
}
</script>
<style scoped>
.city-box {
  width: 100%;
  height: calc(100% - 1.067rem);
  font-size: 0.373rem;
}
.city-h {
  box-sizing: border-box;
  width: 100%;
  height: 1.067rem;
  border: 1px solid #dddddd;
  display: flex;
  justify-content: start;
}
.city-h span {
  display: inline-block;
  padding: 0 0.32rem;
  line-height: 1.067rem;
}
.city-content {
  width: 100%;
  height: calc(100% - 1.067rem);
  overflow-y: auto;
}
.city-col {
  padding: 0.267rem 0.32rem;
  text-align: left;
  font-size: 0.373rem;
}
.thisText {
  color: #feb323;
}
</style>
