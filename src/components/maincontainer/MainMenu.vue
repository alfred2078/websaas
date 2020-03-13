<template>
  <div>
    <el-link class="linkHelp mainMenu" icon="el-icon-question" ref="/">帮助</el-link>
    <el-dropdown>
      <span class="el-dropdown-link mainMenu">
        欢迎您,admin
        <i class="el-icon-arrow-down el-icon--right "></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><i class="el-icon-user"></i>个人中心</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-setting"></i>账户设置</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-monitor"></i>系统设置</el-dropdown-item>
        <el-dropdown-item><i class="el-icon-lollipop"></i>密码修改</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-link class="linkHelp mainMenu" icon="el-icon-right" ref="/">退出登录</el-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scope>
.mainMenu{
    padding: 10px 5px;
}
.linkHelp {  
  color: #ffffff !important;
  // color:#ffffff;
}
.linkHelp:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
.el-dropdown-link {
  cursor: pointer;
  color: #ffffff;
}
.el-dropdown-link:hover{
    background-color: rgba(255, 255, 255, 0.2);
}
</style>