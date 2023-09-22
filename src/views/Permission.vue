<script setup lang="ts">
import { ref, computed } from "vue";
import useClipboard from 'vue-clipboard3';

const { toClipboard } = useClipboard();

const READ_NUM = 4;
const READ_SYM = 'r';

const WRITE_NUM = 2;
const WRITE_SYM = 'w';

const EXEC_NUM = 1;
const EXEC_SYM = 'x';

const DEFAULT_NUM = 0;
const DEFAULT_SYM = '-';

const owner = ref({ read: true, write: true, exec: true, num: 7, sym: "rwx" });
const group = ref({ read: true, write: true, exec: true, num: 7, sym: "rwx" });
const other = ref({ read: true, write: true, exec: true, num: 7, sym: "rwx" });
const isNumHover = ref(false);
const isSymHover = ref(false);

const changeOwnerCheck = () => {
  let readNum = DEFAULT_NUM;
  let readSym = DEFAULT_SYM;
  if (owner.value.read) {
    readNum = READ_NUM;
    readSym = READ_SYM;
  }

  let writeNum = DEFAULT_NUM;
  let writeSym = DEFAULT_SYM;
  if (owner.value.write) {
    writeNum = WRITE_NUM;
    writeSym = WRITE_SYM;
  }

  let execNum = DEFAULT_NUM;
  let execSym = DEFAULT_SYM;
  if (owner.value.exec) {
    execNum = EXEC_NUM;
    execSym = EXEC_SYM;
  }
  owner.value.num = readNum + writeNum + execNum;
  owner.value.sym = readSym + writeSym + execSym;
};

const changeGroupCheck = () => {
  let readNum = DEFAULT_NUM;
  let readSym = DEFAULT_SYM;
  if (group.value.read) {
    readNum = READ_NUM;
    readSym = READ_SYM;
  }

  let writeNum = DEFAULT_NUM;
  let writeSym = DEFAULT_SYM;
  if (group.value.write) {
    writeNum = WRITE_NUM;
    writeSym = WRITE_SYM;
  }

  let execNum = DEFAULT_NUM;
  let execSym = DEFAULT_SYM;
  if (group.value.exec) {
    execNum = EXEC_NUM;
    execSym = EXEC_SYM;
  }
  group.value.num = readNum + writeNum + execNum;
  group.value.sym = readSym + writeSym + execSym;
};

const changeOtherCheck = () => {
  let readNum = DEFAULT_NUM;
  let readSym = DEFAULT_SYM;
  if (other.value.read) {
    readNum = READ_NUM;
    readSym = READ_SYM;
  }

  let writeNum = DEFAULT_NUM;
  let writeSym = DEFAULT_SYM;
  if (other.value.write) {
    writeNum = WRITE_NUM;
    writeSym = WRITE_SYM;
  }

  let execNum = DEFAULT_NUM;
  let execSym = DEFAULT_SYM;
  if (other.value.exec) {
    execNum = EXEC_NUM;
    execSym = EXEC_SYM;
  }
  other.value.num = readNum + writeNum + execNum;
  other.value.sym = readSym + writeSym + execSym;
};

const resultNum = computed(() => {
  return owner.value.num.toString() + group.value.num.toString() + other.value.num.toString()
});

const resultSym = computed(() => {
  return owner.value.sym + group.value.sym + other.value.sym;
});

const copyButton = (value: string) => {
  toClipboard(value);
  alert('クリップボードにコピーしました');
};

const copyButtonMouseOver = (type: string) => {
  if (type === 'num') {
    isNumHover.value = true;
  } else {
    // sym
    isSymHover.value = true;
  }
};

const copyButtonMouseLeave = (type: string) => {
  if (type === 'num') {
    isNumHover.value = false;
  } else {
    // sym
    isSymHover.value = false;
  }
};
</script>

<template>
  <p>owner: {{ owner }}</p>
  <p>group: {{ group }}</p>
  <p>other: {{ other }}</p>
  <p>isNumHover: {{ isNumHover }}</p>
  <p>isSymHover: {{ isSymHover }}</p>
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
    <input type="text" v-model="resultNum" class="input input-bordered w-32 max-w-xs" />
    <button @click="copyButton(resultNum)" @mouseover="copyButtonMouseOver('num')" @mouseleave="copyButtonMouseLeave('num')">
      <span class="i-tabler-clipboard-copy w-5 h-5 ml-2" :class="{ 'text-pink-200': isNumHover, 'text-blue-400': !isNumHover }"></span>
    </button>
  </div>
  <div class="text-center mt-4">
    <span class="label-text inline-block w-16">記号</span>
    <input type="text" v-model="resultSym" class="input input-bordered w-32 max-w-xs" />
    <button @click="copyButton(resultSym)" @mouseover="copyButtonMouseOver('sym')" @mouseleave="copyButtonMouseLeave('sym')">
      <span class="i-tabler-clipboard-copy w-5 h-5 ml-2" :class="{ 'text-pink-200': isSymHover, 'text-blue-400': !isSymHover }"></span>
    </button>
  </div>
</template>
