<template>
    <div class="login-page">
        <div class="login-box">
            <h1>欢迎登陆</h1>
            <el-form :model="loginForm" ref="loginForm" label-width="100px" >
                <el-form-item prop="phone" label='账号' :rules="[ { required: true, message: '请输入手机号', trigger: 'blur' } ]">
                    <el-input v-model="loginForm.phone"></el-input>
                </el-form-item>
                <el-form-item prop="passward" label='密码'  :rules="[ { required: true, message: '请输入密码', trigger: 'blur' } ]" >
                    <el-input v-model="loginForm.passward"></el-input>
                </el-form-item>
            </el-form>
            <div style="margin-left:100px;">
                <el-button type="primary" @click="loginBtn" >登陆</el-button>
                <el-button type="success">注册</el-button>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loginForm: {
                phone:'',
                passward: ''
            }
        }
    },
    methods: {
        loginBtn(){
            this.$router.push({
                name: 'Main'
            })
        }
    }
}
</script>
<style lang="less" scoped>
    .login-page{
        .login-box{
            width: 500px;
            box-sizing: border-box;
            padding: 20px 40px;
            margin : 100px auto;
            border: 1px solid #e2e2e2;
            h1{
                text-align: center;
                margin-bottom:20px;
                font-size: 24px;
            }
        }
    }
</style>

