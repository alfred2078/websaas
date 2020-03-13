<template>
  <div class="dash-main">
    <div class="dash-header">
      <chart-card class="dash-header-item" :total="`${recPercentage}%`" title="收货效率">
        <el-tooltip
          slot="cardTitle"
          class="item"
          effect="dark"
          content="指标说明"
          placement="right-start"
        >
          <i class="el-icon-chat-dot-round"></i>
        </el-tooltip>
        <div>
          <el-progress :text-inside="true" :stroke-width="26" :percentage="recPercentage"></el-progress>
        </div>
        <span slot="footerSlot">{{ `当日订单总数：${recOrderQty}`}}</span>
      </chart-card>
      <chart-card class="dash-header-item" :total="`${shefPercentage}%`" title="上架效率">
        <el-tooltip
          slot="cardTitle"
          class="item"
          effect="dark"
          content="指标说明"
          placement="right-start"
        >
          <i class="el-icon-chat-dot-round"></i>
        </el-tooltip>
        <div>
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="shefPercentage"
            status="success"
          ></el-progress>
        </div>
        <span slot="footerSlot">{{ `当日订单总数：${shefOrderQty}`}}</span>
      </chart-card>
      <chart-card class="dash-header-item" :total="`${pickPercentage}%`" title="拣货效率">
        <el-tooltip
          slot="cardTitle"
          class="item"
          effect="dark"
          content="指标说明"
          placement="right-start"
        >
          <i class="el-icon-chat-dot-round"></i>
        </el-tooltip>
        <div>
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="pickPercentage"
            status="warning"
          ></el-progress>
        </div>
        <span slot="footerSlot">{{ `当日订单总数：${pickOrderQty}`}}</span>
      </chart-card>
      <chart-card class="dash-header-item" :total="`${reviPercentage}%`" title="复核效率">
        <el-tooltip
          slot="cardTitle"
          class="item"
          effect="dark"
          content="指标说明"
          placement="right-start"
        >
          <i class="el-icon-chat-dot-round"></i>
        </el-tooltip>
        <div>
          <el-progress
            :text-inside="true"
            :stroke-width="26"
            :percentage="reviPercentage"
            status="exception"
          ></el-progress>
        </div>
        <span slot="footerSlot">{{ `当日订单总数：${reviOrderQty}`}}</span>
      </chart-card>
    </div>

    <div class="dash-main">
      <el-card shadow="hover">
        <el-tabs v-model="outStockSumQty">
          <el-tab-pane label="发货总量" name="outStockSumQty">
            <outstock-chart title="发货总量" :dataSource="outStockData"></outstock-chart>
          </el-tab-pane>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>

<script>
import chartCard from "@/components/card";
import OutstockChart from '@/components/chart/OutstockChart.vue'

const outStockData = []
  for (let i = 0; i < 12; i += 1) {
    outStockData.push({
      x: `${i + 1}月`,
      y: Math.floor(Math.random() * 1000) + 200
    })
  }

export default {
  components: {
    chartCard,
    OutstockChart
  },
  data() {
    return {
      outStockSumQty:'outStockSumQty',
      outStockData
    }
  },
  props: {
    recPercentage: {
      type: String,
      default: "100"
    },
    recOrderQty: {
      type: String,
      default: "0"
    },
    shefPercentage: {
      type: String,
      default: "9"
    },
    shefOrderQty: {
      type: String,
      default: "0"
    },
    pickPercentage: {
      type: String,
      default: "12"
    },
    pickOrderQty: {
      type: String,
      default: "19"
    },
    reviPercentage: {
      type: String,
      default: "100"
    },
    reviOrderQty: {
      type: String,
      default: "2222220"
    }
  }
};
</script>

<style lang="scss">
.dash-main {
  .dash-header {
    display: flex;
    .dash-header-item {
      flex-grow: 1;
      margin: 0 8px;
    }
  }
  .dash-main {
    margin: 10px 8px;
  }
}
</style>