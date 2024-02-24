<script >
import Header from '@/components/Header.vue';


export default {
  components: {
    Header,
  },
  methods: {
    redirectToLoginPage() {
      this.$router.push('/reg');
    }
  },
};
</script>

<template>
  <Header/>
  <main>
    <form>
      <h1>Вхід</h1>
        <h2>Введіть ел. пошту</h2>
          <input type="text">
        <h2>Введіть пароль</h2>
          <input type="password" name="" id="">
        <h2 class="forgot-password">Забули пароль?</h2>
      <button class="Auth-Reg-Button">Ввійти</button>
      <h2 class="registered" @click="redirectToLoginPage">Я не заєрестрований</h2>
    </form>
  </main>
</template>
