<template>
  <div class="sign_box">
    <div class="signIn" v-if="status == 1">
      <el-form
        :model="loginForm"
        ref="loginForm"
        :rules="loginRules"
        label-width="0px"
        :inline="false"
        size="normal"
        key="login"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            placeholder="Please input username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="Please input password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="signBtn" type="primary" @click="signIn"
            >Login</el-button
          >
        </el-form-item>
      </el-form>
      <span class="signText" @click="toSignUp">Create Account</span>
    </div>
    <div class="signUp" v-else>
      <el-form
        :model="regForm"
        ref="regForm"
        :rules="regRules"
        label-width="0px"
        :inline="false"
        size="normal"
        key="register"
      >
        <el-form-item prop="username">
          <el-input
            v-model="regForm.username"
            placeholder="Please input username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            type="password"
            v-model="regForm.password"
            placeholder="Please input password"
          ></el-input>
        </el-form-item>
        <!-- <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="regForm.checkPass"
            placeholder="Please input password again"
          ></el-input>
        </el-form-item> -->
        <el-form-item prop="nickname">
          <el-input
            v-model="regForm.nickname"
            placeholder="Please input nickname"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="signBtn" type="primary" @click="signUp"
            >signUp</el-button
          >
        </el-form-item>
      </el-form>
      <span class="signText" @click="toSignIn">Back to Login</span>
    </div>
    <div v-loading.fullscreen.lock="loading"></div>
  </div>
</template>

<script>
export default {
  data() {
    // var validatePass = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("Please input password"));
    //   } else {
    //     if (this.regForm.checkPass !== "") {
    //       this.$refs.regForm.validateField("checkPass");
    //     }
    //     callback();
    //   }
    // };
    // var validatePass2 = (rule, value, callback) => {
    //   if (value === "") {
    //     callback(new Error("Please input password again"));
    //   } else if (value !== this.regForm.password) {
    //     callback(new Error("The two passwords do not match!"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      loading: false,
      status: 1,
      loginForm: {
        username: "",
        password: "",
      },
      loginRules: {
        username: [
          { required: true, message: "Please input username", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Please input password", trigger: "blur" },
        ],
      },
      regForm: {
        username: "",
        password: "",
        nickname: "",
      },
      regRules: {
        username: [
          { required: true, message: "Please input username", trigger: "blur" },
        ],
        password: [
          { required: true, message: "Please input password", trigger: "blur" },
        ],
        nickname: [
          { required: true, message: "Please input nickname", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    signIn() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$axios.post("/api/user/login", this.loginForm )
          .then(res => {
            console.log(res);
            
          })
          setTimeout(() => {
            this.loading = false;
            // this.$store.commit("changeIsSignIn", 1);
            // this.$router.push({ name: "home" });
          }, 1500);
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },
    signUp() {
      this.$refs["regForm"].validate((valid) => {
        if (valid) {
          this.$axios
            .post("/api/user/register", this.regForm)
            .then((res) => {
              console.log(res);
            });
        } else {
          console.log("error submit!");
          return false;
        }
      });
    },

    toSignUp() {
      this.status = 2;
    },
    toSignIn() {
      this.status = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
.sign_box {
  width: 300px;
  margin: 200px auto 0;
  text-align: center;
  .signText {
    color: #3878dd;
    cursor: pointer;
    &:hover {
      color: #1760d7;
    }
  }
}
.signBtn {
  width: 100%;
  font-size: 18px;
}
</style>
