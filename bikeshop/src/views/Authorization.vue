<script>
import Header from '@/components/Header.vue';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  components: {
    Header,
  },
  methods: {
    redirectToRegistrationPage() {
      this.$router.push('/reg');
    },
    forgotPassword() {
      this.$router.push('/GetCode');
    },
    loginUser() {
      const apiUrl = '';

      const userData = {
        email: this.email,
        password: this.password,
      };

      this.$axios.post(apiUrl, userData)
        .then(response => {
          console.log(response.data);
          this.$router.push('/');
        })
        .catch(error => {
          console.error('Authentication failed:', error.response.data);
        });
    }
  },
};
</script>

<template>
  <Header/>
  <main>
    <form @submit.prevent="loginUser">
      <h1>Вхід</h1>
        <h2>Введіть ел. пошту</h2>
          <input type="text" v-model="email">
        <h2>Введіть пароль</h2>
          <input type="password" v-model="password">
        <h2 class="forgot-password" @click="forgotPassword">Забули пароль?</h2>
      <button type="submit" class="Auth-Reg-Button">Ввійти</button>
      <h2 class="registered" @click="redirectToLoginPage">Я не заєрестрований</h2>
    </form>
  </main>
</template>
