<template>
    <nav>
      <el-menu mode="horizontal" router :default-active="defaultActive">
        <el-menu-item index="1" route="/">首页</el-menu-item>
        <el-menu-item index="2" route="order">我的订单</el-menu-item>
      </el-menu>
    </nav>
</template>

<script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router';
  const { meta: {index}} = useRoute()
  const router = useRouter()
  const defaultActive = ref(index)
</script>

<style lang="scss" scoped>
</style>