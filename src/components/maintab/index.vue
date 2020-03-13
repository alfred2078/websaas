<template>
  <div>
    <el-tabs v-model="activePage"  closable @tab-click="clickTab" @tab-remove="removeTab">
      <el-tab-pane
        v-for="(item, index) in pageList"
        :key="item.fullPath"
        :label="item.meta.title"
        :name="item.fullPath"
      ></el-tab-pane>
    </el-tabs>
    <div style="margin: 12px 12px 0;">
      <el-collapse-transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-collapse-transition>      
    </div>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
const indexKey = "/dashboard/dashmain";

export default {
  name: "MainTab",
  data() {
    return {
      // editableTabsValue:'',
      pageList: [],
      linkList: [],
      activePage: ""
    };
  },
  created() {
    if (this.$route.path != indexKey) {
      this.pageList.push({
        name: "dashboard-dashmain",
        path: indexKey,
        fullPath: indexKey,
        meta: {
          icon: "dashboard",
          title: "首页"
        }
      });
      this.linkList.push(indexKey);
    }
    this.pageList.push(this.$route);
    this.linkList.push(this.$route.fullPath);
    this.activePage = this.$route.fullPath;
  },
  computed: {},
  methods: {
    clickTab(key) {
      this.activePage = key.name;
    },
    removeTab(key) {
        if (key == indexKey) {
          this.$message.warning('首页不能关闭!')
          return
        }
        if (this.pageList.length === 1) {
          this.$message.warning('这是最后一页，不能再关闭了啦')
          return
        }
        this.pageList = this.pageList.filter(item => item.fullPath !== key)
        let index = this.linkList.indexOf(key)
        this.linkList = this.linkList.filter(item => item !== key)
        index = index >= this.linkList.length ? this.linkList.length - 1 : index
        this.activePage = this.linkList[index]
      },
  },
  watch: {
    $route: function(newRoute) {
      this.activePage = newRoute.fullPath;
      if (this.linkList.indexOf(newRoute.fullPath) < 0) {
        this.linkList.push(newRoute.fullPath);
        this.pageList.push(Object.assign({}, newRoute));
      } else if (this.linkList.indexOf(newRoute.fullPath) >= 0) {
        let oldIndex = this.linkList.indexOf(newRoute.fullPath);
        let oldPositionRoute = this.pageList[oldIndex];
        this.pageList.splice(
          oldIndex,
          1,
          Object.assign({}, newRoute, { meta: oldPositionRoute.meta })
        );
      }
    },
    activePage: function(key) {
      let index = this.linkList.lastIndexOf(key);
      let waitRouter = this.pageList[index];
      this.$router.push(Object.assign({}, waitRouter)).catch(err => {
        err;
      });
    }
  }
};
</script>

<style lang="scss">

</style>