<template>
  <el-scrollbar wrapClass="scrollbar-wrapper">
    <el-aside width="200px">
      <logo></logo>
      <el-menu
        background-color="#001529"
        text-color="#ffffffa8"
        active-text-color="#fff"
        mode="vertical"
        :default-active="$route.path"
        :collapse="isCollapse"
        :show-timeout="200"
        router
      >
        <sidebar-item
          v-for="route in addRouters"
          :key="route.name"
          :item="route"
          :base-path="route.path"
        ></sidebar-item>
      </el-menu>
    </el-aside>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "@/components/logo";
import SidebarItem from "./SidebarItem";

export default {
  components: { Logo, SidebarItem },
  name: "SideBar",
  data() {
    return {
      isCollapse: false
    };
  },
  computed: {    
    ...mapGetters(["addRouters"])
  }
};
</script>

<style lang="scss">
.scrollbar-wrapper {
  overflow-x: hidden !important;
  .el-scrollbar__view {
    height: 100%;
    
  }
}
</style>
