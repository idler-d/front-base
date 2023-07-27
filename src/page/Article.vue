<template>
  <div class="common-layout">
    <el-page-header>
      <template #content>
        <span class="text-large font-600 mr-3"> Title </span>
      </template>
      <div class="mt-4 text-sm font-bold">
        Your additional content can be added with default slot, You may put as
        many content as you want here.
      </div>
    </el-page-header>
  </div>
</template>

<script>
export default {
  name: "article"
}
</script>

<style scoped>

</style>