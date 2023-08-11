<template>
  <div class="menu-container">
    <el-menu
      :default-active="defaultValue"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      background-color="#0e2235"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <template v-for="item in menus" :key="item.id">
        <!-- 判断是否有子目录 -->
        <template v-if="item.type === 1">
          <el-sub-menu :index="item.id + ''">
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="parseIconName(item.icon)"></component>
              </el-icon>
              <span>{{ item.name }}</span>
            </template>
            <template v-for="subItem in item.children" :key="subItem.id">
              <el-menu-item-group>
                <el-menu-item :index="subItem.id + ''" @click="handleSubItemClick(subItem)">{{
                  subItem.name
                }}</el-menu-item>
              </el-menu-item-group>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item>
            <el-icon v-if="item.icon">
              <component :is="parseIconName(item.icon)"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useLoginStore } from '@/store/login/loginStore'
import { useRouter, useRoute } from 'vue-router'
import { mapPathToMenu } from '@/utils/map-menu'
// 是否收缩
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

// 默认选中
const loginStore = useLoginStore()
const menus = loginStore.userMenus
const route = useRoute()
const currentPath = route.fullPath
const currentMenu = mapPathToMenu(loginStore.userMenus, currentPath)
const defaultValue = ref<string>(currentMenu.id + '')

const parseIconName = (iconName: string) => {
  const arr = iconName.split('-')
  if (arr.length === 3) {
    return arr[2]
  } else {
    return arr[2] + '-' + arr[3] + '-' + arr[4]
  }
}
const router = useRouter()
const handleSubItemClick = (subItem: any) => {
  router.push({
    path: subItem.url
  })
}
</script>

<style lang="less" scoped>
.menu-container {
  background-color: #001529;
}
:deep(.el-menu) {
  background-color: #001529;
  border-right: none;
}
:deep(.el-sub-menu__title) {
  color: #fff;
}
:deep(.el-sub-menu__title):hover {
  background-color: #1161b4;
}
:deep(.el-menu-item-group__title) {
  padding: 0;
}
:deep(.el-menu-item) {
  color: #fff;
}
:deep(.el-menu-item.is-active) {
  background-color: #1161b4;
}
:deep(.el-menu-item):hover {
  background-color: #1161b4;
}
</style>
