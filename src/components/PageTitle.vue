<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: 'ページタイトル',
  }
});
</script>

<template>
  <div class="prose mx-auto text-center mb-4">
    <h2>{{ props.title }}</h2>
  </div>
</template>