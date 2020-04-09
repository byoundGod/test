<template>
  <div>
    <Back type="BUTTON" title="新增文章" @preservation="preservation"></Back>
    <div class="edit-title">
      <span for>文章标题：</span>
      <input type="text"  v-model="title"/>
    </div>
    <span for>文章内容：</span>
    <Ue @catchData="catchData"></Ue>
  </div>
</template>

<script>
import Ue from "../../../components/ue";
import Back from "../../../components/bank";
export default {
  data() {
    return {
      title:'',
      text:''
    };
  },
  components: { Ue, Back },
  methods: {
    catchData(message) {
      this.text = message;
    },
    preservation(){
      console.log(this.title,this.text);
    }
  }
};
</script>

<style scoped>
.edit-title span {
  margin-right: 10px;
  line-height: auto;
}
.edit-title input {
  border: none;
  outline: none;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #aaaaaa;
  padding: 0 10px;
}
.edit-title input:focus {
  border: 1px solid #7b83ff;
}
span {
  line-height: 50px;
  font-size: 16px;
}
</style>