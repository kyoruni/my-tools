<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header/>
  <div class="md:container md:mx-auto py-4">
    <RouterView/>
  </div>
  <!-- コンテンツ増えたら表示する -->
  <!-- <Footer /> -->
</template>
