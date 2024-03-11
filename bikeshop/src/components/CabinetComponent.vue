<script>
export default {
  data() {
    return {
      windowVisible: false
    };
  },
  methods: {
    showWindow() {
      this.windowVisible = true;
    },
    closeWindow(event) {
      // Закриваємо вікно, якщо клікнуто не на саме вікно і не на зображення
      if (!event.target.closest('.window') && event.target.tagName.toLowerCase() !== 'img') {
        this.windowVisible = false;
  }
  }
}
};
</script>

<template>
   <div class="personal-cabinet">
        <div class="personcabinet">
          <h2>Особистий кабінет</h2>
          <h3>Дані користувача:</h3>
            <div class="user-data">
              <h2>Прізвище:</h2>
              <h3>Ткачук</h3>
              <img src="../assets/img/edit.png" @click="showWindow">
            </div>
            <div class="user-data">
              <h2>Ім’я:</h2>
              <h3>Станіслав</h3>
              <img src="../assets/img/edit.png" @click="showWindow">
            </div>
            <div class="user-data">
              <h2>По батькові:</h2>
              <h3>Мирославович</h3>
              <img src="../assets/img/edit.png" @click="showWindow">
            </div>
          <h3 class="contacts">Контактні дані:</h3>
            <div class="user-data">
              <h2>Номер телефону:</h2>
              <h3>0964063711</h3>
              <img src="../assets/img/edit.png" @click="showWindow">
            </div>
            <div class="user-data">
              <h2>Ел. пошта</h2>
              <h3>qwerty@qwerty.gmail.com</h3>
              <img src="../assets/img/edit.png" @click="showWindow">
            </div>
            <div class="user-data">
              <h2>Пароль</h2>
              <h3>************</h3>
              <img src="../assets/img/edit.png" @click="showWindow">
            </div>
            <button class="log-out">Вийти</button>
            <button class="return">Повернутись до замовленнь</button>
        </div>
        <div class="your-orders">
          <h2>Ваші замовлення</h2>
          <div class="bikeorders">
            <div v-for="index in 9" :key="index" class="bike-orders-group">
              <img src="../assets/img/bike1.jpeg">
              <div class="namebike-and-price">
                <h2>Велосипед CORRADO Piemont DB 26" 21" 2019 Сірий(0307-С-21)</h2>
                <h3>12 000 ₴</h3>
              </div>
            </div>
          </div>
        </div>
   </div>
   <div class="overlay" v-if="windowVisible" @click="closeWindow"></div>
   <div class="window" v-if="windowVisible">
      <h2>Змінити:</h2>
      <div class="form-group23">
        <input type="text" required>
      </div>
      <button>Підтвердити</button>
   </div>
</template>

<style src="../assets/cabinet.css">

</style>