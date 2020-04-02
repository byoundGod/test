<template>
  <div>
    <div v-for="(item,index) in navList" :key="index">
      <div class="website" @click="setStatic(index)">
        <div class="website-name">
          <i :class="item.icon"></i>
          <div>{{item.title}}</div>
        </div>
        <i class="el-icon-arrow-down"></i>
      </div>
      <div class="website-list" :style="'display:' + item.static">
        <router-link :to="link.link" v-for="(link,i) in item.list" :key="i">{{link.title}}</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data: function() {
    return {
      navList: [
        {
          title: "网站管理",
          icon: "el-icon-s-tools",
          static: "none",
          list: [
            {
              title: "视频管理",
              link: "/about"
            }
          ]
        }
      ]
    };
  },
  methods: {
    setStatic(i) {
      if (this.navList[i].static == "none") {
        this.navList[i].static = "flex";
      } else {
        this.navList[i].static = "none";
      }
    }
  }
};
</script>

<style>
.website {
  color: #fff;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  cursor: pointer;
  align-items: center;
}

.website:hover {
  background-color: rgb(67, 74, 80);
}

.website-name {
  display: flex;
  align-items: center;
}
.website-name div {
  margin-left: 10px;
}

.website-list {
  display: flex;
  flex-direction: column;
}
a {
  line-height: 60px;
  color: #fff;
  text-decoration: none;
}
a:hover {
  background-color: rgb(67, 74, 80);
}
</style>
