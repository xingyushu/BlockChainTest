<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div style="position:relative;">
      <mallki class-name="mallki-text" text="区块链测试进度" />
      <div style="padding-top:35px;" class="progress-item">
        <span>Test1</span>
        <el-progress :percentage="70" />
      </div>
      <div class="progress-item">
        <span>Test2</span>
        <el-progress :percentage="18" />
      </div>
      <div class="progress-item">
        <span>Test3</span>
        <el-progress :percentage="65" />
      </div>
      <div class="progress-item">
        <span>Test4</span>
        <el-progress :percentage="92" />
      </div>
      <div class="progress-item">
        <span>Test5</span>
        <el-progress :percentage="80" />
      </div>
      <div class="progress-item">
        <span>Test6</span>
        <el-progress :percentage="48" />
      </div>
      <div class="progress-item">
        <span>Test7</span>
        <el-progress :percentage="100" status="success" />
      </div>
      <div class="progress-item">
        <span>Test8</span>
        <el-progress :percentage="80" />
      </div>
      <div class="progress-item">
        <span>Test9</span>
        <el-progress :percentage="100" status="success" />
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import Mallki from '@/components/TextHoverEffect/Mallki'

export default {
  components: { Mallki },

  filters: {
    statusFilter(status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      statisticsData: {
        article_count: 1024,
        pageviews_count: 1024
      }
    }
  },
  computed: {
    ...mapGetters([
      'name',
      'avatar',
      'roles'
    ])
  }
}
</script>

<style lang="scss" >
.box-card-component{
  .el-card__header {
    padding: 0px!important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }
  .mallki-text {
    position: absolute;
    top: 0px;
    right: 0px;
    font-size: 20px;
    font-weight: bold;
  }
  .panThumb {
    z-index: 100;
    height: 70px!important;
    width: 70px!important;
    position: absolute!important;
    top: -45px;
    left: 0px;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none!important;
    /deep/ .pan-info {
      box-shadow: none!important;
    }
  }
  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }
  @media only screen and (max-width: 1510px){
    .mallki-text{
      display: none;
    }
  }
}
</style>
