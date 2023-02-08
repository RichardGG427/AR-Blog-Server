<template>
  <header>
    <div class="wraper">
      <el-row>
        <el-col :span="4">
          <div class="logo">AR Blog</div>
        </el-col>
        <el-col :span="20">
          <el-menu
            mode="horizontal"
            class="nav"
            :default-active="activeIndex"
            @select="handleSelect"
            background-color="#2d2d2d"
            text-color="#9d9d9d"
            active-text-color="#fff"
          >
            <el-menu-item index="1">
              <router-link to="/"
                ><i class="iconfont icon-home"></i>Homepage</router-link
              >
            </el-menu-item>
            <el-menu-item index="2" v-if="isSignIn === 1">
              <router-link to="/article">MyBlog</router-link>
            </el-menu-item>
            <el-menu-item index="3" v-if="isSignIn === 0">
              <router-link class="signBtn" to="/login">Login</router-link>
            </el-menu-item>
            <el-menu-item index="3" v-else-if="isSignIn === 1">
              <router-link class="signBtn" to="/personal">Richard</router-link>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
    };
  },
  methods: {
    handleSelect(index) {
      this.activeIndex = index + "";
    },
  },
  computed: {
    isSignIn() {
      return this.$store.state.isSignIn;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: #2d2d2d;
  color: #9d9d9d;
  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  .logo {
    line-height: 60px;
    font-size: 18px;
    margin-left: 20px;
  }
  .nav {
    float: right;
    border-radius: none;
    li {
      padding: 0;
      a {
        display: inline-block;
        padding: 0 20px;
        .iconfont {
          vertical-align: top;
          margin: 0 5px 0 0;
        }
      }
    }
  }
}
.signBtn {
  background: #3b99fc !important;
  color: #fff !important;
  line-height: 60px;
}
</style>
