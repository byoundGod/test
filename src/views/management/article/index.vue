<template>
  <div class="article">
    <div class="article-header">
      <el-button type="primary" style="margin-right:20px" @click="add">新 增</el-button>
      <el-input v-model="search" placeholder="请输入内容" style="width:300px"></el-input>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
    </div>

    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="创建日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="标题" width="280">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="操作"  width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="tableData.length" :page-size="5"></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "第一篇",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "第二篇",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "第三篇",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "第四篇",
          address: "上海市普陀区金沙江路 1516 弄"
        },{
          date: "2016-05-02",
          name: "第一篇",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "第二篇",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "第三篇",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "第四篇",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push({ path: "/management/edit" });
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    add(){
        this.$router.push({ path: "/management/edit" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-header {
  display: flex;
  margin-bottom: 20px;
}
</style>
