<script setup lang="ts">
</script>

<template>
  <div class="flex justify-center">
    <RouterLink to="/permission">
      <div class="chat chat-start">
        <div class="chat-image avatar">
          <div class="w-10 rounded-full">
            <span class="i-tabler-file w-10 h-10"></span>
          </div>
        </div>
        <div class="chat-bubble">
          パーミッションの数値と記号表記を作るやつ
        </div>
        <div class="chat-footer opacity-50">
          chmod 777 hoge.txt
        </div>
      </div>
    </RouterLink>
  </div>
</template>
