<template>
  <el-menu
      default-active="/Home"
      background-color="pink"
      text-color="#303133"
      active-text-color="#409eff"
      style="height: 100%"
      :collapse="isCollapsed"
      :collapse-transition="false"
      class="el-menu-demo"
      mode="vertical"
      router>
    <el-menu-item index="1">
      <i class="el-icon-s-home"/>
      <span slot="title">首页</span>
    </el-menu-item>
<!--index 指的是点击后访问的路径-->
    <el-menu-item :index="'/'+item.menuclick" v-for="(item,i) in menu" :key="i">
      <i :class="item.menuicon"/>
      <span slot="title">{{item.menuname}}</span>
    </el-menu-item>
  </el-menu>
</template>
<script>
  export default {
    name: "Aside",
    computed: {
      menu(){
        return this.$store.state.menu
      }
    },
    props: {
      isCollapsed: Boolean
    }
  }
</script>
<style scoped>

</style>