<script setup lang="ts">
import { ref, computed } from "vue";
const READ_NUM = 4;
const WRITE_NUM = 2;
const EXEC_NUM = 1;
const DEFAULT_NUM = 0;

const owner = ref({ read: true, write: true, exec: true, num: 7, sym: "-" });
const group = ref({ read: true, write: true, exec: true, num: 7, sym: "-" });
const other = ref({ read: true, write: true, exec: true, num: 7, sym: "-" });

const resultOwnerNum = computed(() => {
  return "hoge";
});

const changeOwnerCheck = () => {
  const readNum = owner.value.read ? READ_NUM : DEFAULT_NUM;
  const writeNum = owner.value.write ? WRITE_NUM : DEFAULT_NUM;
  const execNum = owner.value.exec ? EXEC_NUM : DEFAULT_NUM;
  owner.value.num = readNum + writeNum + execNum;
};

const changeGroupCheck = () => {
  const readNum = group.value.read ? READ_NUM : DEFAULT_NUM;
  const writeNum = group.value.write ? WRITE_NUM : DEFAULT_NUM;
  const execNum = group.value.exec ? EXEC_NUM : DEFAULT_NUM;
  group.value.num = readNum + writeNum + execNum;
};

const changeOtherCheck = () => {
  const readNum = other.value.read ? READ_NUM : DEFAULT_NUM;
  const writeNum = other.value.write ? WRITE_NUM : DEFAULT_NUM;
  const execNum = other.value.exec ? EXEC_NUM : DEFAULT_NUM;
  other.value.num = readNum + writeNum + execNum;
};

const resultNum = computed(() => {
  return owner.value.num.toString() + group.value.num.toString() + other.value.num.toString()
});

const resultSym = computed(() => {
  return "記号！";
});
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
          <input type="checkbox" v-model="owner.read" class="checkbox checkbox-error" @change="changeOwnerCheck"/>
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="owner.write" class="checkbox checkbox-error" @change="changeOwnerCheck"/>
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="owner.exec" class="checkbox checkbox-error" @change="changeOwnerCheck"/>
        </td>
      </tr>
      <tr class="text-center">
        <td class="w-16 label-text text-left">グループ</td>
        <td class="w-20">
          <input type="checkbox" v-model="group.read" class="checkbox checkbox-warning" @change="changeGroupCheck" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="group.write" class="checkbox checkbox-warning" @change="changeGroupCheck" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="group.exec" class="checkbox checkbox-warning" @change="changeGroupCheck" />
        </td>
      </tr>
      <tr class="text-center">
        <td class="w-16 label-text text-left">その他</td>
        <td class="w-20">
          <input type="checkbox" v-model="other.read" class="checkbox checkbox-info" @change="changeOtherCheck" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="other.write" class="checkbox checkbox-info" @change="changeOtherCheck" />
        </td>
        <td class="w-20">
          <input type="checkbox" v-model="other.exec" class="checkbox checkbox-info" @change="changeOtherCheck" />
        </td>
      </tr>
    </table>
  </div>
  <div class="text-center mt-4">
    <span class="label-text inline-block w-16">数値</span>
    <input type="text" v-model="resultNum" class="input input-bordered w-20 max-w-xs" />
  </div>
  <div class="text-center mt-4">
    <span class="label-text inline-block w-16">記号</span>
    <input type="text" v-model="resultSym" class="input input-bordered w-20 max-w-xs" />
  </div>
</template>
