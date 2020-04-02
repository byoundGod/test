<template>
  <div id="app">
    <div class="nav" :style="'width:'+navWidth+'px'">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
      <div class="title">导航栏</div>
      <div class="website">
        <div class="website-name">
          <i class="el-icon-s-tools"></i>
          <div>网站管理</div>
        </div>
        <i class="el-icon-arrow-down"></i>
      </div>
    </div>
    <div class="content">
      <div class="header">
        <div>
          <i @click="setNav()" class="el-icon-s-fold"></i>
        </div>
        <div>个人网站管理系统</div>
        <div>登陆</div>
      </div>
      <div class="middle">
        <router-view />
      </div>
      <div class="footer"></div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      navWidth: 0,
      navStatic: false,
      navList:[
        {
          title:'网站管理',
          icon:'el-icon-s-tools',
          isOpen:false,
          list:[
            {
              title:'文章管理',
              link:''
            }
          ]
        }
      ]
    };
  },
  methods: {
    setNav() {
      if (this.navStatic) {
        this.navWidth = 0;
      } else {
        this.navWidth = 200;
      }
      this.navStatic = !this.navStatic;
    }
  }
};
</script>

<style>
@import "assets/css/reset.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  overflow: auto;
  display: flex;
}

.nav {
  height: 100%;
  width: 200px;
  background-color: #2c3e50;
  transition: all 0.5s;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.header {
  height: 60px;
  background-color: #2c3e50;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  color: #fff;
}
.header div {
  margin: auto 0;
  font-size: 1.2rem;
}

.header div:first-child {
  font-size: 2rem;
  cursor: pointer;
}
.middle {
  flex: 1;
}
.footer {
  height: 60px;
  background-color: #2c3e50;
}

.title {
  color: #fff;
  line-height: 60px;
}

.website {
  color: #fff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
}

.website:hover{
  background-color: rgb(67, 74, 80);
}

.website-name{
  display: flex;
  align-items: center;
}
.website-name div{
  margin-left: 10px;
}
</style>
