
<template>
  <div id="container">
    <el-container>
      <el-header>
          <Header></Header>
      </el-header>
      <el-main>
          <router-view/>
      </el-main>
      <el-footer>
          <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
</style>