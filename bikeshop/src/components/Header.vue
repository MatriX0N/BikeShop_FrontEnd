<template>
<header>
  <div class="left-section" >
    <div class="logo" @click="redirectToLoginPage">
      <img src="../assets/img/logo.png" alt="logo">
      <h1>BikeShop</h1>
    </div>
  </div>
  <div class="right-section">
    <div class="auth-links">
      <router-link to="/Auth">Вхід</router-link>
      <span>/</span>
      <router-link to="/Reg">Реєстрація</router-link>
    </div>
    <img class="cart-img" src="../assets/img/cart.png" alt="cart">
    <img class="cart-img" src="../assets/img/comparison.png" alt="comparison">
  </div>
</header>
</template>
  
<script>
  export default {
  methods: {
    redirectToLoginPage() {
      this.$router.push('/');
    }
  },
  };
</script>
  
<style src="../assets/header.css"></style>