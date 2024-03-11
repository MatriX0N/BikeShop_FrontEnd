<script >
import Header from '@/components/Header.vue';


export default {
  components: {
    Header,
  },
};
</script>

<template>
  <Header/>
  <main>
    <form>
      <h1>Вхід</h1>
        <h2>Введіть код</h2>
          <input type="text">
      <button class="Auth-Reg-Button">Створити пароль</button>
    </form>
  </main>
</template>

<style>
input{
    margin-bottom: 20px;
}
</style>