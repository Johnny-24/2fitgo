<template>
  <NuxtLink :to="to" class="base-link">
    <slot />
  </NuxtLink>
</template>

<script lang="ts" setup>
const props = defineProps({
  to: {
    type: String,
    require: true
  }
})
</script>

<style lang="scss" scoped>
.base-link {
  color: #fff;
  transition: .3s;
  text-decoration: none;
  &.isActive,
  &:hover {
    color: $lightGray;
  }
}
</style>