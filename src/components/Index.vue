<template>
  <el-container style="border: 1px solid red;height: 100%;">
    <el-aside :width="aside_width" style="height: 100vh; background-color:red;border-right: 1px solid pink">
      <Aside :isCollapsed="isCollapsed"></Aside>
    </el-aside>
    <el-container>
      <el-header :height="header_height" style="background-color: cadetblue">

      </el-header>
      <el-main >

      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './Aside'
import Header from './Header'
export default {
  name: "Index",
  components:{Header,Aside},
  data(){
    return {
      aside_width: '200px',
      header_height: '100px',
      isCollapsed: false,
      icon: 'el-icon-s-fold',
    }
  },
  methods: {
    do_Collapse(){
      this.isCollapsed = !this.isCollapsed;
      if(!this.isCollapsed){
        this.aside_width = '200px'
        this.icon = 'el-icon-s-fold'
      }else{
        this.aside_width = '64px'
        this.icon = 'el-icon-s-unfold'
      }
    }
  }
}
</script>

<style scoped>

</style>