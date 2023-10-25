<template>
  <div class="common-layout">
    <el-container class="page-container">
      <el-aside :width="isCollapse ? '60px' : '210px'" class="page-aside">
        <div class="title">
          <img src="@/assets/img/logo.svg" alt="" />
          <span v-show="!isCollapse">管理系统</span>
        </div>
        <nav-menu :isCollapse="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header class="page-header">
          <nav-header @handle-switch="handleCollapse"></nav-header>
        </el-header>
        <el-main class="page-content">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavMenu from '@/components/nav-menu/NavMenu.vue'
import NavHeader from '@/components/nav-header/NavHeader.vue'
import { ref } from 'vue'
const isCollapse = ref(false)
const handleCollapse = (state: boolean) => {
  isCollapse.value = state
}
</script>

<style scoped lang="less">
.common-layout {
  width: 100%;
  height: 100vh;
  .page-container {
    height: 100%;
    background-color: #efefef;
    .page-aside {
      background-color: #001529;
      overflow-x: hidden;
      .title {
        margin: 6px 10px 14px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 65px;
          height: 40px;
        }
        span {
          font-size: 21px;
          color: #fff;
        }
      }
    }
    .page-aside::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    .page-header {
      background-color: #fff;
    }
    .page-content {
      // background-color: #fff;
      margin-top: 10px;
    }
  }
}
</style>
