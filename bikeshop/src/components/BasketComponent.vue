<script>
export default {
  data() {
    return {
      values: new Array(4).fill(1)
    };
  },
  methods: {
    increment(index) {
      this.values[index] += 1;
    },
    decrement(index) {
      if (this.values[index] > 0) {
        this.values[index] -= 1;
      }
    }
  }
};
</script>

<template>
    <div class="basketcomponent">
        <div class="basketandbutton">
          <h2>Кошик</h2>
          <button class="basketbutton">Оформити замовлення</button>
        </div>
        <div class="basketbike1" v-for="index in 30" :key="index">
          <div class="basketbike">
            <img src="../assets/img/bike1.jpeg" alt="bike">
            <div class="nameandnumber">
              <h2>CORRADO Piemont DB 26" 21" 2019 Сірий(0307-С-21)</h2>
              <div class="number">
                <button class="minus minus-and-plus-button" @click="decrement(index)">-</button>
                <input  class="input" :id="'input' + index" v-model="values[index]" />
                <button class="plus minus-and-plus-button" @click="increment(index)">+</button>
              </div>
            </div>
            <h3 class="basketprice">12 000 ₴</h3>
          </div>
          <hr class="separatorbasket">
        </div>
    </div>
</template>

<style src="../assets/basket.css">

</style>
