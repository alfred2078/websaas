<template>
  <div class="logo">
    <router-link to>
      <img src="@/assets/img/mainlayout/logo.png" alt="logo" />
      <h1>{{titleMessage}}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "logo",
  props: {
    titleMessage: {
      type: String,
      required: false,
      default: function () {
        return this.$t('logo.titleMessage')
      }
    }
  },  
};
</script>

<style lang="scss" scope>
.logo {
  height: 60px !important;
  line-height: 60px !important;
  padding: 0 0 0 24px;
  background-color: rgba(59, 155, 245, 0.9); //#1890ff; //#1890ff;
  a {
    color: white;
    &:hover {
      color: rgba(199, 193, 193, 0.8);
    }
  }

  a {
    text-decoration: none;
    outline: none;
    img {
      display: inline-block;
      vertical-align: middle;
      height: 32px;
    }
    h1 {
      display: inline-block;
    }
  }
}
</style>