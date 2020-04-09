<template>
  <div>
    <div class="back" v-if="type=='BUTTON'">
      <i class="el-icon-back" @click="goBack"></i>
      <span>{{title}}</span>
      <div class="button">
        <div @click="preservation">
          <i class="el-icon-check"></i>
        </div>
        <div @click="goBack">
          <i class="el-icon-close"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["type","title"],
  mounted() {
    console.log(this.type);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    preservation(){
      this.$emit('preservation');
    }
  }
};
</script>

<style scoped>
.back {
  height: 60px;
  border-bottom: 1px solid #cccccc;
  margin-bottom: 20px;
  font-size: 30px;
  line-height: 60px;
  margin-top: -20px;
  display: flex;
  justify-content: space-between;
}
.back i:hover {
  color: darkcyan;
  cursor: pointer;
}
.back i {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.back span{
  margin: auto 0;
  font-size: 1rem;
  font-weight: bold;
}
span {
  margin-left: 20px;
}
.button {
  display: flex;
}
.button div {
  width: 40px;
  height: 40px;
  margin: auto 10px;
  font-size: 16px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
}
.button div:hover {
  opacity: 0.8;
}
.button div i:hover {
  color: #fff;
}
.button div:first-child {
  background-color: #67c23a;
}
.button div:last-child {
  background-color: #f56c6c;
}
</style>