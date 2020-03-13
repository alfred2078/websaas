<template>
  <el-dropdown trigger="click" @command="handleCommand">
    <div>
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="zh" :disabled="setLanguage==='zh'">中文</el-dropdown-item>
      <el-dropdown-item command="en" :disabled="setLanguage==='en'">英文</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
import {
  SYS_LANGUAGE
} from "@/store/mutation-types"

export default {  
  computed: {
    setLanguage() {        
      return this.$store.getters.language;
    }
  },
  methods: {
    handleCommand(lang) {
        this.$i18n.locale = lang        
        this.$store.dispatch('getLange', lang)
        this.$message({
        message: this.$t('login.language'),
        type: 'success'
      })
    }
  }
};
</script>

<style lang="">
.international-icon {
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  vertical-align: -5px !important;
}
</style>