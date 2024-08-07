<template>
  <header class="header">
    <div class="header__left">
      <logo />
    </div>
    <div class="header__right">
      <HeaderLogin />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background: $black;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}
</style>
