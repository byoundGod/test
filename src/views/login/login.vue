<template>
  <div class="login">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="clearfix">
        <span>登 录</span>
      </div>
      <div class="from">
        <div class="input">
          <i class="el-icon-user-solid">:</i>
          <input type="text" placeholder="请输入账号" v-model="fromData.account" />
        </div>
        <div class="input">
          <i class="el-icon-key">:</i>
          <input type="text" placeholder="请输入密码" v-model="fromData.password" />
        </div>
        <el-button type="primary" @click="login">登 录</el-button>
        <router-link to="/register">没有账号？注册账号 ></router-link>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      fromData: {
        account: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.fromData.account == "123" && this.fromData.password == "123") {
        this.$router.push({ path: "/home" });
      }else{
        this.$message.error('账号或者密码错误！');
      }
    }
  }
};
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/login.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  font-size: 14px;
}

a{
  line-height: 40px;

}
a:hover{
  background-color: transparent;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix {
  font-size: 1.2rem;
  font-weight: bold;
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
  background-color: rgba(255, 255, 255, 0.7);
}

.from {
  display: flex;
  flex-direction: column;
}
.input {
  width: 70%;
  margin: 10px auto;
  height: 40px;
  display: flex;
  border: 1px solid #fff;
  border-radius: 10px;
}
input {
  flex: 1;
  background-color: transparent;
  outline: none;
  border: none;
  line-height: 38px;
}
i {
  margin: 0 5px;
  line-height: 38px;
  font-size: 18px;
}
button {
  margin: 10px auto;
  width: 70%;
}
</style>
