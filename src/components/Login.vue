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
            <el-input v-model="formData.no" type="text" auto-complete="false" size="small" style="width: 200px"></el-input>
          </el-form-item>
          <el-form-item label="password" prop="password">
            <el-input v-model="formData.password" type="password"
                      auto-complete="false" size="small" show-password
                      style="width: 200px" @keyup.enter.native="confirm"></el-input>
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
      this.$refs.formRef.validate((valid)=>{
        
      })
    }
  }
}
</script>

<style scoped>

</style>