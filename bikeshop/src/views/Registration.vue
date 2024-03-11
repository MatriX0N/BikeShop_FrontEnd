<script>
import Header from '@/components/Header.vue';

export default {
  data() {
    return {
      lastName: '',
      firstName: '',
      middleName: '',
      phoneNumber: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  },
  methods: {
    redirectToLoginPage() {
      this.$router.push('/');
    },
    checkPasswords() {
      if (this.password === this.confirmPassword) {
        this.registerUser();
      } else {
        alert('Паролі не співпадають.');
      }
    },
    registerUser() {
      const apiUrl = '';

      const userData = {
        lastName: this.lastName,
        firstName: this.firstName,
        middleName: this.middleName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      this.$axios.post(apiUrl, userData)
        .then(response => {
          console.log(response.data);
          this.$router.push('/auth');
        })
        .catch(error => {
          console.error('Registration failed:', error.response.data);
        });
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
    <form @submit.prevent="registerUser">
      <h1>Реєстрація</h1>
        <h2>Введіть ваше прізвище</h2>
          <input type="text" v-model="lastName">
          <h2>Введіть ваше ім'я</h2>
        <input type="text"  v-model="firstName">
          <h2>Введіть по батькові</h2>
        <input type="text" v-model="middleName">
          <h2>Введіть ваш номер телефону</h2>
        <input type="text" v-model="phoneNumber">
          <h2>Введіть ел. пошту</h2>
        <input type="text" v-model="email">
          <h2>Придумайте пароль</h2>
        <input type="text" v-model="password">
          <h2>Підтвердіть пароль</h2>
        <input type="text" v-model="confirmPassword">
        <button type="submit" @click="checkPasswords" class="Auth-Reg-Button">Заєреструватись</button>
        <h2 class="registered" @click="redirectToLoginPage">Я вже заєрестрований</h2>
    </form>
  </main>
</template>
