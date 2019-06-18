<template>
  <div class="box">
    <div class="header-title">欢迎使用农信贷！农信贷是一款面向移动互联网贷款需求人群的移动应用，致力于让借款变成高效、低息、安全的生活方式。</div>
    <div class="rows-box">
      <div class="row-item">
        <div class="header-title">一、农信贷平台服务条款的确认和接纳</div>
        <div class="text-content">农信贷平台是指由河北锦享网络科技有限公司（以下简称E贷款）运营的公众号，包括以平台以及其他通过电子形式提供的操作环境）以下统称“E贷款平台”，本协议中凡提及E贷款平台，所指向的权利义务主体均系E贷款。E贷款按照其发布的章程、服务条款和操作规则提供服务。您使用或接受服务，即视为其已了解并完全同意本服务条款的各项内容，包括E贷款就服务条款随时作出的任何增加、删减或修改。请您务必仔细阅读并充分理解本协议包含的各个条款，特别是有关免责条款，以及对您权利限制条款。若您不同意接受或无法理解本协议任何条款的，请立即停止注册操作。您通过点击确认、勾选、电子签章或其他类似方式确认同意本协议后，即视为您在充分阅读并理解本协议的内容基础上确认接受并以电子合同形式签署本协议，并同意遵守本协议的约定，亦视为您确认自己具有享受E贷款服务相应的权利能力和行为能力，能够独立承担法律责任。</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Agreement'
}
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
  padding: 0.32rem;
}
.box .header-title {
  font-size: 0.373rem;
  color: #333333;
  text-align: left;
}
.rows-box {
  width: 100%;
}
.rows-box .row-item {
  width: 100%;
  margin-top: 0.64rem;
}
.row-item .text-content {
  font-size: 0.373rem;
  color: #999999;
  text-align: left;
  line-height: 0.65rem;
  padding-top: 0.2rem;
}
</style>
