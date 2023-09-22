<template>
  <div class="permission flex justify-center">
    <div class="hoge">
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text block w-16">所有者</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-error" />
          <input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
          <input type="checkbox" checked="checked" class="checkbox checkbox-info" />
        </label>
      </div>
      <div class="form-control w-52">
        <label class="label cursor-pointer w-50">
          <span class="label-text block w-16">グループ</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-error" />
          <input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
          <input type="checkbox" checked="checked" class="checkbox checkbox-info" />
        </label>
      </div>
      <div class="form-control w-52">
        <label class="label cursor-pointer">
          <span class="label-text block w-16">その他</span>
          <input type="checkbox" checked="checked" class="checkbox checkbox-error" />
          <input type="checkbox" checked="checked" class="checkbox checkbox-warning" />
          <input type="checkbox" checked="checked" class="checkbox checkbox-info" />
        </label>
      </div>
    </div>
  </div>
</template>