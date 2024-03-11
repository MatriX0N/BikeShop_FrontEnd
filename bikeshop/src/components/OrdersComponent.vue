<script>
export default {
  data() {
    return {
      isCardPaymentSelected: false
    };
  },
  methods: {}
};
</script>

<template>
    <div class="main-orders">
        <div class="orders-and-button">
            <h2>Оформелння замовлення</h2>
            <button class="order-button">Повернутись до кошика</button>
        </div>
        <div class="contact-details">
            <h3 class="h3">Ваші дані для зв’язку</h3>
            <form action="">
                <div class="gear1">
                    <div class="form-group">
                        <label for="field1">Введіть прізвище</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label for="field1">Введіть ім’я</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label for="field1">Введіть по батькові</label>
                        <input type="text" required>
                    </div>
                </div>
                <div class="gear2">
                    <div class="form-group">
                        <label for="field1">Введіть номер телефону</label>
                        <input type="text" required>
                    </div>
                    <div class="form-group">
                        <label for="field1">Введіть електронну пошту</label>
                        <input type="text" required>
                    </div>
                </div>
            </form>
        </div>
        <div class="details-and-info">
            <div class="delivery-details">
                <h3 class="h3">Ваші дані оформлення доставки</h3>
                <form action="">
                    <div class="gear1">
                        <div class="form-group">
                            <label for="field1">Введіть місто/село</label>
                            <input type="text" required>
                        </div>
                        <div class="form-group">
                            <label for="field1">Введіть вулицю</label>
                            <input type="text" required>
                        </div>
                    </div>
                    <div class="gear2">
                        <div class="form-group">
                            <label for="field1">Введіть будинок/відділ</label>
                            <input type="text" required>
                        </div>
                    </div>
                </form>
                <div class="receiving-the-order">
                    <h3 class="h3">Ваш вибір прийому замовлення</h3>
                    <div class="gear1">
                        <div class="mail">
                            <label>
                                <input type="checkbox" name="deliveryOption"> <h2>Самовивіз з Нової пошти</h2> <h3>1000₴</h3>
                            </label>
                            <label>
                                <input type="checkbox" name="deliveryOption"> <h2>Самовивіз з Укр пошти</h2> <h3>500₴</h3>
                            </label>
                        </div>
                        <div class="courier">
                            <label>
                                <input type="checkbox" name="deliveryOption"> <h2>Самовивіз з Нової пошти</h2> <h3>1500₴</h3>
                            </label>
                            <label>
                                <input type="checkbox" name="deliveryOption"> <h2>Самовивіз з Укр пошти</h2> <h3>1000₴</h3>
                            </label>
                        </div>
                    </div>
                </div>
                <div class="order-payment">
                    <h3 class="h3">Ваш вибір оплати замовлення</h3>
                    <div class="mail">
                        <label>
                            <input type="checkbox" name="deliveryOption"> <img src="../assets/img/price.png" alt=""> <h2>Оплата при отриманні</h2>
                        </label>
                        <label>
                            <input type="checkbox" name="deliveryOption" v-model="isCardPaymentSelected"> <img src="../assets/img/card.png" alt=""> <h2>Оплата картою</h2>
                        </label>
                        <div v-if="isCardPaymentSelected" class="form-group2">
                            <label for="field1">Оплатити на цю карту</label>
                            <input type="text" required value="4149-4991-4587-6973" disabled>
                        </div>
                    </div>
                </div>
            </div>
            <div class="total-cost">
                <h3>Загалом</h3>
                <hr class="separatororder">
                <div class="total-price">
                    <h3>3 товара на суму</h3>
                    <h2>36000₴</h2>
                </div>
                <div class="shipping-cost">
                    <h3>Вартість досткавки</h3>
                    <h2>По тарифу перевізника</h2>
                </div>
                <hr class="separatororder">
                <div class="total-price2">
                    <h3>До сплати</h3>
                    <h2>36000₴</h2>
                </div>
                <hr class="separatororder">
                <button class="orderbutton">Підтвердити замовлення</button>
            </div>
        </div>
    </div>
</template>

<style src="../assets/orders.css">

</style>
