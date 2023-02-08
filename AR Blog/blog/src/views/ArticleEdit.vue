<template>
  <div class="edit_wrap wrapper">
    <div class="backBtn">
      <el-button @click="goBack">Back</el-button>
    </div>
    <div class="edit_title">Title</div>
    <el-input v-model="title" placeholder="Please input title"></el-input>
    <div class="edit_title">Article Content (Markdown Editor)</div>
    <div class="markdown">
      <mavon-editor v-model="content" language="en" />
    </div>
    <div class="save_btn">
      <el-button type="primary" @click="save">Save</el-button>
    </div>
  </div>
</template>

<script>
export default {

    methods:{
        goBack(){
            this.$router.go(-1)
        }
    }
};
</script>

<style lang="scss" scoped>
.edit_wrap {
  margin: 30px auto;
  background: #fff;
  padding: 40px;
  font-size: 16px;
  .backBtn {
    text-align: right;
    margin-bottom: 40px;
  }
  .edit_title {
    margin: 20px 0;
    font-weight: 700;
  }
  .save_btn {
    margin: 40px 0;
  }
}
</style>
