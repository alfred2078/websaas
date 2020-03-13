<template>
  <el-header>
    <div class="header">
      <div class="headeritem1">
        <i class="el-icon-s-fold"></i>
        <span>{{$t('header.iconMessage')}}</span>
      </div>
      <div class="headeritem2">
        <main-menu></main-menu>
      </div>
    </div>
  </el-header>
</template>

<script>
import MainMenu from "@/components/maincontainer/MainMenu";

export default {
  name: "MainHeader",
  components: { MainMenu },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-around;
  height: 100%;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);

  .headeritem1 {
    width: 100%;
    display: flex;
    color: #ffffff;
    font-size: 14px;

    // background-color: red;
    align-items: center;
    i {
      font-size: 24px;
      padding: 10px 15px;
      cursor: pointer;
      transition: 0.38s;
    }
    i:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  .headeritem2 {
    width: 100%;
    display: flex;
    // background-color: aqua;
    align-items: center;
    justify-content: flex-end;
    padding-right: 3%;
  }
}

// .iconmenu {
//   width: 58px;
//   height: 40px;
//   text-align: center;
//   // margin: 10px auto 10px 0;
//   display: inline-block;
//   color: white;
//   background-color: red;
// }
// .hamburger {
//   cursor: pointer;
//   transition: 0.38s;
//   transform-origin: 50% 50%;
// }

// .iconmenu:hover {
//   background-color: rgba(0, 0, 0, 0.05);
// }
</style>
