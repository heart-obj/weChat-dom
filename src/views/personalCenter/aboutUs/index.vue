<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-box">
        <div class="row-item">
          <mt-cell title="联系我们">
            <span style="color: #fc9a2b;font-size: 0.48rem;">028-98564126</span>
          </mt-cell>
        </div>
        <div class="row-item" @click.stop="handleClickFunc('Agreement')">
          <mt-cell title="协议及申明" is-link></mt-cell>
        </div>
        <div class="row-item" @click.stop="handleClickFunc('Problem')">
          <mt-cell title="常见问题" is-link></mt-cell>
        </div>
      </div>
      <div class="Qr-code-box">
        <div class="Qr-code-img"><img src="" alt="加载中..." srcset="" width="100%" height="100%"></div>
        <span style="font-size: 0.4rem;color: #333333;margin-top: 0.2rem;">长按保存二维码识别并关注公众号</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AboutUs', // 关于我们
  methods: {
    handleClickFunc (pushName) {
      this.$router.push({
        name: pushName,
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
}
.row-box {
  width: 100%;
  background: #ffffff;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;
  /* padding: 0 0.32rem; */
}
.row-box .row-item {
  border-bottom: 1px solid #f4f4f4;
  padding: 0.2rem;
}
.row-box >>> .mint-cell-title {
  text-align: left;
  font-size: 0.42rem;
  color: #000;
}

.row-box >>> .mint-cell-wrapper {
  background: none;
}
.row-box >>> .mint-cell:last-child {
  background: none;
}
.row-box >>> .mint-cell-allow-right::after{
  width: 0.25rem;
  height: 0.25rem;
}
.row-box >>> .mint-cell-value.is-link {
  margin-right: 0.5rem;
}
.Qr-code-box {
  width: 100%;
  display: inline-block;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
}
.Qr-code-img {
  width: 4.4rem;
  height: 4.4rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  display: inline-block;
  background: #ffffff;
  margin: auto;
}
.Qr-code-img img {
  width: 100%;
  height: 100%;
}
</style>
