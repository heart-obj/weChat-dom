<template>
  <div class="box">
    <div  class="date-box">
      <div id="date-test"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SignIn', // 签到
  mounted () {
    this.loadLaydate()
  },
  methods: {
    loadLaydate () {
      laydate.render({
        elem: '#date-test',
        position: 'static'
      })
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
}
.box .date-box {
  width: 8.36rem;
  display: inline-block;
}
.box>>>.layui-laydate-main {
  width: 8.36rem;
  height: 7.747rem;
}
.date-box>>>.layui-laydate-content td, .layui-laydate-content th {
  width: 1.5rem;
  height: 1.06rem;
}
.date-box>>>.layui-this {
  background: url('./img/datecol_bg.png') no-repeat center;
  background-size: 100% 100%;
}
</style>
