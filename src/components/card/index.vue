<template>
  <el-card shadow="hover">
    <div class="card-header">
      <div class="meta">
        <span class="card-title">{{ title }}</span>
        <span class="card-action">          
          <slot name="cardTitle"></slot>
        </span>
      </div>
      <div class="total">
        <span>{{ total }}</span>
      </div>
    </div>
    <div class="card-content">
      <div class="content-fix">
        <slot></slot>
      </div>
    </div>
    <div class="card-footer">
      <div class="footer-fix">
        <slot name = "footerSlot"></slot>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    total: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss">
.card-header {
  .meta {
    display: flex;
    justify-content: space-between;    
    .card-title {
      color: rgba(0, 0, 0, 0.45);
      font-size: 14px;
      line-height: 22px;
    }
  }
  .total {
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    white-space: nowrap;
    color: #000;
    margin-top: 4px;
    margin-bottom: 0;
    font-size: 30px;
    line-height: 38px;
    height: 38px;
  }
}

.card-content {
  margin-bottom: 12px;
  position: relative;
  height: 46px;
  width: 100%;  
  .content-fix {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}

.card-footer {
  border-top: 1px solid #e8e8e8;
  padding-top: 9px;
  margin-top: 8px;
  position: relative;
  margin-bottom: 8px;
  .footer-fix {
      position: absolute;
      left: 0;      
      width: 100%;
    }
}
</style>