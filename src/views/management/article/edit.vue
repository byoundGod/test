<template>
  <div>
    <Ue @childFn="catchData(message)"></Ue>
  </div>
</template>

<script>
import Ue from "../../../components/ue";
export default {
  components: { Ue },
  methods:{
      catchData(message){
          console.log(message);
      }
  }
};
</script>

<style>
</style>