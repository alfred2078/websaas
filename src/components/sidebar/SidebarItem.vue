<template >
  <div>
    <template v-for="itemSub in item.children">
      <el-menu-item  v-if="hasOneShowingChild(itemSub)" :key="itemSub.name" :index="itemSub.path">
        <svg-icon class="svg-container" v-if="itemSub.meta.icon" :icon-class="itemSub.meta.icon" />
        <span slot="title">{{itemSub.meta.title}}</span>
      </el-menu-item>  
       <el-submenu v-else :key="itemSub.name" :index="itemSub.name||itemSub.path">
      <template slot="title">
        <svg-icon class="svg-container" v-if="itemSub.meta&&itemSub.meta.icon" :icon-class="itemSub.meta.icon" />
        <span>{{itemSub.meta.title}}</span>
      </template>
      <el-menu-item v-for="child in itemSub.children" 
      :key="child.name"
      :index="child.path">
      <svg-icon class="svg-container" v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon" />
      {{child.meta.title}}</el-menu-item>      
    </el-submenu>
    </template>
    <!-- <router-link class="dash" v-if="hasOneShowingChild(itemSub.children) && !onlyOneChild.children"  :to="onlyOneChild.path">
      <el-menu-item  :index="onlyOneChild.path">
      <svg-icon class="svg-container" v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon" />
      <span slot="title">{{onlyOneChild.meta.title}}</span>
    </el-menu-item>
    </router-link>-->
    <!-- <el-menu v-else :default-active="$route.path" router>
      <el-submenu  :index="item.name||item.path">
      <template slot="title">
        <svg-icon class="svg-container" v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon" />
        <span>{{item.meta.title}}</span>
      </template>
      <el-menu-item v-for="child in item.children" 
      :key="child.name"
      :index="child.path">
      <svg-icon class="svg-container" v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon" />
      {{child.meta.title}}</el-menu-item>      
    </el-submenu>
    </el-menu>-->
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  data() {
    return {
      onlyOneChild: null
    };
  },
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ""
    }
  },
  methods: {
    /* 判断有没有子菜单 */
    // hasOneShowingChild(children) {
    //   if(children===undefined || children===null)
    //   {
    //     this.onlyOneChild = children
    //     return true        
    //   }
    //   const showingChildren = children.filter(item => {
    //     if (item.hidden) {
    //       return false;
    //     } else {
    //       // temp set(will be used if only has one showing child )
    //       this.onlyOneChild = item;
    //       return true;
    //     }
    //   });
    //   if (showingChildren.length === 1) {
    //     return true;
    //   }
    //   return false;
    // }
    hasOneShowingChild(child) {
      let showingChildren;
      if (child.children === undefined || child.children === null) {
        return true
      } else {
        return false;
      }
    }
  }
};
</script>

<style lang="scss">
.dash {
  text-decoration: none;
  color: #1890ff;
}

.svg-container {
  font-size: 16px;
}
</style>