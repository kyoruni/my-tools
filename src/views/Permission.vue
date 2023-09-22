<script setup lang="ts">
import { ref } from "vue";
const owner = ref({ read: true, write: true, exec: true });
const group = ref({ read: true, write: true, exec: true });
const other = ref({ read: true, write: true, exec: true });
</script>

<template>
  <p>owner: {{ owner }}</p>
  <p>group: {{ group }}</p>
  <p>other: {{ other }}</p>
  <div class="permission flex justify-center">
    <table>
      <tr class="text-center">
        <td class="w-16"></td>
        <td class="w-20">
          <span class="label-text">読み込み</span>
        </td>
        <td class="w-20">
          <span class="label-text">書き込み</span>
        </td>
        <td class="w-20">
          <span class="label-text">実行</span>
        </td>
      </tr>
      <tr class="text-center">
        <td class="w-16 label-text text-left">所有者</td>
        <td class="w-20">
          <input type="checkbox" v-model="owner.read" class="checkbox checkbox-error" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="owner.write" class="checkbox checkbox-error" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="owner.exec" class="checkbox checkbox-error" />
        </td>
      </tr>
      <tr class="text-center">
        <td class="w-16 label-text text-left">グループ</td>
        <td class="w-20">
          <input type="checkbox" v-model="group.read" class="checkbox checkbox-warning" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="group.write" class="checkbox checkbox-warning" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="group.exec" class="checkbox checkbox-warning" />
        </td>
      </tr>
      <tr class="text-center">
        <td class="w-16 label-text text-left">その他</td>
        <td class="w-20">
          <input type="checkbox" v-model="other.read" class="checkbox checkbox-info" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="other.write" class="checkbox checkbox-info" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="other.exec" class="checkbox checkbox-info" />
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
#customCheckbox {
  display: none;
}

/* 疑似要素を使用してチェックマークを表示 */
.custom-checkbox::before {
  content: "\2713";
  display: inline-block;
  font-size: 20px; /* フォントサイズを調整 */
  /* その他のスタイルを追加 */
}
</style>