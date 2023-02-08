<template>
  <div class="wrapper">
    <h1 class="title">Blog List</h1>
    <div class="article">
      <el-button class="addBtn" @click="handleAdd">Add+</el-button>
      <el-table :data="articleList" border stripe>
        <el-table-column prop="title" label="Title" width="180">
        </el-table-column>
        <el-table-column label="Date" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ scope.row.create_time }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Activity">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleLook(scope.row)"
              >View</el-button
            >
            <el-button size="mini" type="success" @click="handleEdit(scope.row)"
              >Edit</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articleList: [
        {
          id: 1,
          title: "The First Blog",
          create_time: "2.2.2023",
        },
        {
          id: 2,
          title: "The Second Blog",
          create_time: "2.2.2023",
        },
        {
          id: 3,
          title: "The Third Blog",
          create_time: "2.2.2023",
        },
      ],
    };
  },
  methods: {
    handleAdd() {
      this.$router.push({ name: "editArticle" });
    },
    handleLook(row) {
      let id = row.id;
      window.open("#/detail/" + id);
    },
    handleEdit(row) {
      let id = row.id;
      this.$router.push({ path: `/article/edit/${id}` });
    },
    handleDelete(row) {
      let id = row.id;
      this.$confirm("This blog will be deleted, continue?", "tip", {
        confirmButtonText: "Confirm",
        cancelButtonText: "Cancel",
        type: "warning",
      })
        .then(() => {
          //request delete
          this.$message({
            type: "success",
            message: `${id}` + " " + `Blog Delete success!`,
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "Delete cancelled",
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  margin: 30px 0;
  text-align: center;
  font-weight: bold;
  font-size: 28px;
}
.article {
  .addBtn {
    float: right;
    margin-bottom: 20px;
  }
}
::v-deep .el-table .cell {
  text-align: center;
}
</style>
