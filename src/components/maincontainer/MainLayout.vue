<template>
  <div>
    <el-container  direction="horizontal">    
    <side-bar></side-bar> 
    <el-container class="mainContainer">
      <main-header></main-header>
      <el-main>
        <main-tab></main-tab>        
      </el-main>
      <!-- <el-footer>Footer</el-footer> -->
    </el-container>
  </el-container>
  </div>
</template>

<script>
import SideBar from "@/components/sidebar";
import MainHeader from "./MainHeader";
import MainTab from "@/components/maintab";

export default {
  name: "MainLayout",
  components: { SideBar, MainHeader ,MainTab}
};
</script>

<style lang="scss" scoped>
div{
  height: 100%;
  .mainContainer{
    flex-direction: column;
  }
}


</style>
