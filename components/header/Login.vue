<template>
  <div class="header-login">
    <BaseLink to="/">Войти</BaseLink>
    <div class="header-login__devider"></div>
    <BaseLink to="/">Регистрация</BaseLink>
  </div>
</template>

<style lang="scss" scoped>
.header-login {
  display: flex;
  align-items: center;
  &__devider {
    width: 1px;
    height: 20px;
    background: #fff;
    margin: 0 10px;
  }
}
</style>