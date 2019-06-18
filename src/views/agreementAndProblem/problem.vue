<template>
  <div class="box">
    <div class="rows-box">
      <div class="row-item" v-for="(item, i) in problemData" :key="i">
        <div class="header-title" :class="item.showContent ? 'show-text-content' : ''" @click="handleClick(item)">{{ item.title }}</div>
        <div class="text-content" v-show="item.showContent">{{ item.contentText }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Problem',
  data () {
    return {
      problemData: [
        {
          title: '电子合同受法律保护吗？',
          contentText: '通过网站审核的借款方向出借方方借贷，双方通过平台的电子借贷协议，明确双方的债务与债权关系。依据中华人民共和国合同法第十一条规定：“书面形式是指合同书、信件和数据电文（包括电报、电传、传真、电子数据交换和电子邮件）等可以有形地表现所载内容的形式”，网站上电子合同与传统合同具有同等的法律效力，网站服务仅向符合中华人民共和国有关法律法规及本公司相关规定的合格出借者和借款人提供。',
          showContent: false
        },
        {
          title: '电子合同受法律保护吗？',
          contentText: '通过网站审核的借款方向出借方方借贷，双方通过平台的电子借贷协议，明确双方的债务与债权关系。依据中华人民共和国合同法第十一条规定：“书面形式是指合同书、信件和数据电文（包括电报、电传、传真、电子数据交换和电子邮件）等可以有形地表现所载内容的形式”，网站上电子合同与传统合同具有同等的法律效力，网站服务仅向符合中华人民共和国有关法律法规及本公司相关规定的合格出借者和借款人提供。',
          showContent: false
        },
        {
          title: '电子合同受法律保护吗？',
          contentText: '通过网站审核的借款方向出借方方借贷，双方通过平台的电子借贷协议，明确双方的债务与债权关系。依据中华人民共和国合同法第十一条规定：“书面形式是指合同书、信件和数据电文（包括电报、电传、传真、电子数据交换和电子邮件）等可以有形地表现所载内容的形式”，网站上电子合同与传统合同具有同等的法律效力，网站服务仅向符合中华人民共和国有关法律法规及本公司相关规定的合格出借者和借款人提供。',
          showContent: false
        }
      ]
    }
  },
  methods: {
    handleClick (item) {
      item.showContent = !item.showContent
    }
  }
}
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 100%;
  box-sizing: border-box;
}
.rows-box {
  width: 100%;
}
.rows-box .row-item {
  width: 100%;
}
.row-item .header-title {
  font-size: 0.373rem;
  color: #333333;
  text-align: left;
  border-bottom: 1px solid #dddddd;
  box-sizing: border-box;
  padding: 0.35rem 0.32rem;
  position: relative;
}
.row-item .header-title::after {
  content: '';
  display: inline-block;
  width: 0.173rem;
  height: 0.32rem;
  position: absolute;
  right: 0.55rem;
  top: 0;
  bottom: 0;
  margin: auto;
  background: url('./img/detail-icon.png') no-repeat center;
  background-size: 100% 100%;
  transform: rotate(-90deg)
}
.row-item .show-text-content::after {
  transform: rotate(90deg)
}
.row-item .text-content {
  box-sizing: border-box;
  font-size: 0.373rem;
  color: #999999;
  text-align: left;
  line-height: 0.65rem;
  padding: 0.2rem 0.32rem;
}
</style>
