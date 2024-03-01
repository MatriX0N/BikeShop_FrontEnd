<script>

</script>

<template>
    <div class="description">
        <div class="opus">
            <h2>Опис</h2>
            <p>Велосипед <strong>CORRADO Piemont DB</strong> — сучасна гірська модель, яка припаде до смаку всім від новачків до досвідчених велосипедистів. 
                Рама поєднує легкість і жорсткість, а її ергономічна конфігурація дасть змогу вам із комфортом долати навіть довгі маршрути. 
                Комплектація складається зі зносостійких коліс 26 дюймів, за амортизацію відповідає вилка SR SunTour 26 XCT, а гальмівну систему представляє Bengal MB 606. 
                Плавна трансмісія на 21 швидкість — чудовий варіант для тих, хто любить вибирати режим їзди. 
                Збалансований дизайн і надійні деталі дають змогу вам на повну використовувати всі можливості цієї моделі.</p>
        </div>
        <div class="recomend">
            <h2>Також вас можуть зацікавити:</h2>
            <div class="recomend-block">
                <div v-for="index in 9" :key="index" class="bike-card-recomend">
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
    </div>
</template>

<style src="../assets/characteristics.css">

</style>
