<script>
import Header from '@/components/Header.vue';

export default {
  methods: {
    redirectToLoginPage() {
      this.$router.push('/');
    }
  },
  components: {
    Header,
  },
}
</script>

<template>
  <Header/>
  <main>
    <form>
      <h1>Реєстрація</h1>
        <h2>Введіть ваше прізвище</h2>
          <input type="text">
          <h2>Введіть ваше ім'я</h2>
        <input type="text">
          <h2>Введіть по батькові</h2>
        <input type="text">
          <h2>Введіть ваш номер телефону</h2>
        <input type="text">
          <h2>Введіть ел. пошту</h2>
        <input type="text">
          <h2>Придумайте пароль</h2>
        <input type="text">
          <h2>Підтвердіть пароль</h2>
        <input type="text">
        <button class="Auth-Reg-Button">Заєреструватись</button>
        <h2 class="registered" @click="redirectToLoginPage">Я вже заєрестрований</h2>

    </form>
  </main>
</template>
