<template>
  <div class="main">
    <AppHeader />
    <div class="page">
      <h1>Авторизация</h1>
      <div class="form">
        <label>
          E-mail
          <input type="email">
        </label>
        <label>
          Пароль
          <input type="password">
        </label>
        <button>Войти</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
body * {
  box-sizing: border-box;
}
.page {
  padding: 50px;
  text-align: center;
}
.form {
  display: flex;
  flex-direction: column;
  width: 250px;
  padding: 20px;
  border: 1px solid gray;
  text-align: left;
  margin: 0 auto;
}
input {
  width: 100%;
  margin-bottom: 10px;
}
button  {
  width: 100%;
  margin-top: 20px;
  height: 30px;
}
</style>
