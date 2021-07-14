<template>
  <div>
    <h3>Action...</h3>
    <!-- 在子组件中直接以slot标签就能默认拿到 传递过来的插槽标签 -->
    <slot />
  </div>
</template>

<script>
export default {
name:'Action'
}
</script>

<style>

</style>