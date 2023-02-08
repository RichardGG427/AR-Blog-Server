<template>
  <div class="wrapper">
    <div class="content">
      <el-form
        :model="form"
        ref="form"
        label-width="80px"
        :inline="false"
        size="normal"
      >
        <el-form-item label="Nickname">
          <el-input v-model="form.nickname" class="nickname"></el-input>
        </el-form-item>
        <el-form-item label="Avatar">
          <el-upload
            class="avatar-uploader"
            action=""
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img :src="imageUrl" class="avatar" />
          </el-upload>
          <p class="tips">Please upload JPG file (Less than 2 MB)</p>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="Save">Save</el-button>
          <el-button>Logout</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import imgDefault from "../assets/font/logo.png";
export default {
  data() {
    return {
      form: {
        nickname: "",
      },
      imageUrl: imgDefault,
    };
  },
  methods: {
    Save() {},
    handleAvatarSuccess(res, file) {
      console.log(res, file);

      //   this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("Avatar image only can be JPG file!");
      }
      if (!isLt2M) {
        this.$message.error("Avatar image size should less than 2MB!");
      }
      return isJPG && isLt2M;
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: calc(100vh - 262px);
  .content {
    width: 40%;
    margin: 0 auto;
    padding: 50px 0;
  }
}

.nickname {
  width: 70%;
}
::v-deep .avatar-uploader {
  .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    &:hover {
      border-color: #409eff;
    }
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
.tips {
  font-size: 12px;
  color: #999;
}
</style>
