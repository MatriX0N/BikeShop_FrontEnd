<script>
export default {
  methods: {
    syncScroll(event) {
      // Визначте, який контейнер викликав подію прокрутки
      const sourceContainer = event.target;

      // Знайдіть інший контейнер
      const targetContainer = this.$refs.scrollContainer1 === sourceContainer
        ? this.$refs.scrollContainer2
        : this.$refs.scrollContainer1;

      // Обчислюємо пропорцію прокрутки для синхронізації
      const scrollPercentage = sourceContainer.scrollLeft / (sourceContainer.scrollWidth - sourceContainer.clientWidth);

      // Задаємо прокрутку для цільового контейнера
      targetContainer.scrollLeft = scrollPercentage * (targetContainer.scrollWidth - targetContainer.clientWidth);
    }
  }
};
</script>

<template>
    <div class="comparison">
        <h2>Порівняння товару</h2>
        <div class="comparison1" ref="scrollContainer1" @scroll="syncScroll">
          <div class="comparisonbutton">
            <button class="buttoncomparison">
              <h2>Показати тільки відмінності</h2>
            </button>
          </div>
          <div v-for="index in 9" :key="index" class="comparisonbike">
            <div class="comparisoninfo">
              <img src="../assets/img/bike1.jpeg" alt="">
              <div class="info1">
                <img src="../assets/img/Close.png">
                <h2>Велосипед CORRADO Piemont DB 26" 21" 2019 Сірий(0307-С-21)</h2>
                <h3>12 000 ₴</h3>
                <button class="infobutton">Купити</button>
              </div>
            </div>
          </div>
        </div>
        <hr class="separator">
        <div class="characteristics-table-container" ref="scrollContainer2" @scroll="syncScroll">
            <table class="characteristics-table">
              <tr>
                <td class="namechar">Назва характеристики 1</td>
                <td v-for="index in 9" :key="index">Характеристика 1</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 2</td>
                  <td v-for="index in 9" :key="index">Характеристика 2</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 9</td>
                  <td v-for="index in 9" :key="index">Характеристика 9</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 4</td>
                  <td v-for="index in 9" :key="index">Характеристика 4</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 5</td>
                  <td v-for="index in 9" :key="index">Характеристика 5</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 6</td>
                  <td v-for="index in 9" :key="index">Характеристика 6</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 7</td>
                  <td v-for="index in 9" :key="index">Характеристика 7</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 8</td>
                  <td v-for="index in 9" :key="index">Характеристика 8</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 9</td>
                  <td v-for="index in 9" :key="index">Характеристика 9</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 10</td>
                  <td v-for="index in 9" :key="index">Характеристика 10</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 11</td>
                  <td v-for="index in 9" :key="index">Характеристика 11</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 12</td>
                  <td v-for="index in 9" :key="index">Характеристика 12</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 13</td>
                  <td v-for="index in 9" :key="index">Характеристика 13</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 14</td>
                  <td v-for="index in 9" :key="index">Характеристика 14</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 15</td>
                  <td v-for="index in 9" :key="index">Характеристика 15</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 16</td>
                  <td v-for="index in 9" :key="index">Характеристика 16</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 17</td>
                  <td v-for="index in 9" :key="index">Характеристика 17</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 18</td>
                  <td v-for="index in 9" :key="index">Характеристика 18</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 19</td>
                  <td v-for="index in 9" :key="index">Характеристика 19</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 20</td>
                  <td v-for="index in 9" :key="index">Характеристика 20</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 21</td>
                  <td v-for="index in 9" :key="index">Характеристика 21</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 22</td>
                  <td v-for="index in 9" :key="index">Характеристика 22</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 23</td>
                  <td v-for="index in 9" :key="index">Характеристика 23</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 24</td>
                  <td v-for="index in 9" :key="index">Характеристика 24</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 25</td>
                  <td v-for="index in 9" :key="index">Характеристика 25</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 26</td>
                  <td v-for="index in 9" :key="index">Характеристика 26</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 27</td>
                  <td v-for="index in 9" :key="index">Характеристика 27</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 28</td>
                  <td v-for="index in 9" :key="index">Характеристика 28</td>
              </tr>
              <tr>
                  <td class="namechar">Назва характеристики 29</td>
                  <td v-for="index in 9" :key="index">Характеристика 29</td>
              </tr>
            </table>
        </div>
    </div>
</template>

<style src="../assets/comparison.css">

</style>