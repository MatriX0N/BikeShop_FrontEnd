<script >
import Header from '@/components/Header.vue';


export default {
  components: {
    Header,
  },
  methods: {
    redirectToLoginPage() {
      this.$router.push('/auth');
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
      <button class="Auth-Reg-Button">Отримати код</button>
      <h2 class="registered" @click="redirectToLoginPage">Я згадав пароль</h2>
    </form>
  </main>
</template>

<style>
input{
    margin-bottom: 20px;
}
</style>