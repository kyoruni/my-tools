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
    <div>
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text block w-16">所有者</span>
          <input type="checkbox" v-model="owner.read" class="checkbox checkbox-error" />
          <input type="checkbox" v-model="owner.write" class="checkbox checkbox-warning" />
          <input type="checkbox" v-model="owner.exec" class="checkbox checkbox-info" />
        </label>
      </div>
      <div class="form-control w-52">
        <label class="label cursor-pointer w-50">
          <span class="label-text block w-16">グループ</span>
          <input type="checkbox" v-model="group.read" class="checkbox checkbox-error" />
          <input type="checkbox" v-model="group.write" class="checkbox checkbox-warning" />
          <input type="checkbox" v-model="group.exec" class="checkbox checkbox-info" />
        </label>
      </div>
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text block w-16">その他</span>
          <input type="checkbox" v-model="other.read" class="checkbox checkbox-error" />
          <input type="checkbox" v-model="other.write" class="checkbox checkbox-warning" />
          <input type="checkbox" v-model="other.exec" class="checkbox checkbox-info" />
        </label>
      </div>
    </div>
  </div>
</template>