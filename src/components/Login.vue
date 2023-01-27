<template>
  <div class="loginBody">
    <div class="loginDiv">
      <div class="login-content">
        <h1 class="login-title">
          user login page
        </h1>
        <el-form :model="formData" :rules="formRules"
                 ref="formRef" label-width="100px" >
          <el-form-item label="account" prop="no">
            <el-input v-model="formData.no" type="text" auto-complete="false" size="small" style="width: 150px"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-input v-model="formData.password" type="password"
                      auto-complete="false" size="small" show-password
                      style="width: 150px" @keyup.enter.native="confirm"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :disabled="confirm_disabled" @click="confirm" type="primary">confirm</el-button>
          </el-form-item>
        </el-form>


      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return {
      confirm_disabled: false,
      formData:{
        no: '',
        password: '',
      },
      formRules: {
        no: {
          request: true,
          message: "please input you account",
          //trigger的值选blur，即失去焦点时进行验证。
          trigger: 'blur'
        },
        password: {
          request: true,
          message: 'please input you password',
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    confirm(){
      this.confirm_disabled=true
      this.$refs.formRef.validate((valid)=>{
        if(valid){
          this.$axios.post(this.$httpUrl+'/user/login',this.formData)
              .then(res=>res.data).then(res=>{
            console.log(res)
            if(res.code===200){
              sessionStorage.setItem('user',res.data.user)
              this.$store.commit('setMenu',res.data.menuList)
              this.$router.replace('/Index')
            }else{
              this.confirm_disabled = false
              alert("confirm failed, username or password is wrong")
              return false
            }
          })
        }else{
          alert('confirm failed')
          this.confirm_disabled = false
          return false;
        }
      })
    }
  }
}
</script>

<style scoped>
.loginBody{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: antiquewhite;

}
.loginDiv{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -200px;
  margin-left: -200px;
  width: 400px;
  height: 400px;
  border-radius: 5%;
  background-color: aqua;
}
.login-content{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -150px;
  width: 300px;
  height: 300px;
  background-color: cadetblue;
  border-radius: 5%;
}
.login-title{
  /*text-align 属性规定元素中的文本的水平对齐方式。*/
  text-align: center;
}
</style>