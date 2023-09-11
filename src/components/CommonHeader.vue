<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        style="margin-right: 20px"
        @click="handleMenu"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in tags" :key="item.path" @click.native="handleBreadcrumbClick(item)">{{item.label}}</el-breadcrumb-item>
        
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="user" src="../assets/images/user.png" alt="" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Cookie from 'js-cookie'
export default {
  data() {
    return {};
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    handleBreadcrumbClick(item) {
      // :to="{ path: item.path }"
      // console.log(this.$route.path+' '+item.path);
      if (this.$route.path !== item.path) {
        this.$router.push(item.path);
      }
    },
    logout() {
      // 清除cookie中的token
      Cookie.remove('token')
      // 清除cookie中的menu
      Cookie.remove('menu')
      // this.$router.matcher = router.matcher
      this.$message({
            type: 'success',
            message: '退出成功!'
      });
      setTimeout(()=>{
        this.$router.push('/login')
      },500)
    }
  },
  computed: {
    ...mapState({
        tags: state => state.tab.tabsList
    })
  },
  
};
</script>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .r-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
  .l-content {
    display: flex;
    align-items: center;
    /deep/.el-breadcrumb__item {
        .el-breadcrumb__inner {
            font-weight: normal;
            &.is-link {
                color: #666;
            }
        }
        &:last-child {
            .el-breadcrumb__inner {
                color: #fff;
            }
        }
    }
  }
}
</style>
