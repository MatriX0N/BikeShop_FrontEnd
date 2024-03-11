<script>
  export default{

  }
</script>

<template>
    <div class="likecomponent">
      <h2>Список вподобаннь</h2>
      <div class="likemain">
        <div v-for="index in 12" :key="index" class="like-bike-card">
            <img src="../assets/img/Bike.png" @click="redirectToLoginPage">
            <div class="name_bike">
                <h2>CORRADO Piemont DB 26" 21" 2019 Сірий(0307-С-21)</h2>
                <h2>12 000 ₴</h2>
            </div>
            <div class="button">
                <button class="bike-button">Купити</button>
                <img class="card_porivn" id="card_porivn" src="../assets/img/card_porivn.png">
                <img class="card_like" id="card_like" src="../assets/img/card_like.png">
            </div>
        </div> 
      </div>
    </div>
</template>

<style src="../assets/likes.css">

</style>
