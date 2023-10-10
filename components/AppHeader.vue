<template>
  <header class="header">
    <NuxtLink to="/"> <img src="@/assets/images/logo.jpg" alt="logo" class="logo"> </NuxtLink>
    <div>
      <NuxtLink to="signUp">Регистрация</NuxtLink>
      /
      <NuxtLink to="/signIn">Вход</NuxtLink>
    </div>
  </header>
</template>

<script setup lang='ts'>

</script>
<style lang='scss' scoped>
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 0 15px;
}
.logo {
  height: 40px;
}
</style>
