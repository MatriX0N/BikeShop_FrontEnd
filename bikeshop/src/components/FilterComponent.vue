<script>
export default {
  data() {
    return {
      showBrand: true,
      showPrice: true,
      showDiameter: true,
      showClass: true,
      showSize: true,
      showMaterial: true,
      showBrake: true,
      showSpeeds: true,
    };
  },
  methods: {
    toggleFilter(filter) {
      this[ `show${filter.charAt(0).toUpperCase() + filter.slice(1)}` ] = !this[ `show${filter.charAt(0).toUpperCase() + filter.slice(1)}` ];
    },
  },
};
</script>

<template>
  <div class="Filter">
    <div  class="FilterHeader" @click="toggleFilter('brand')">
      Бренди
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showBrand }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showBrand">
      <ul class="checkbox-list">
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Formula
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Walk
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Cyclone
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Discovery
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Leon
          </label>
        </li>
      </ul>
    </div>

    <div class="FilterHeader" @click="toggleFilter('price')">
      Ціна
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showPrice }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div class="filterfrice" v-show="showPrice">
      <p>Від</p>
      <input type="text" class="price_input">
      <p>До</p>
      <input type="text" class="price_input">
    </div>

    <div class="FilterHeader" @click="toggleFilter('diameter')">
      Діаметр коліс
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showDiameter }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showDiameter">
      <ul class="checkbox-list">
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            20
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            24
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            26
          </label>
        </li>
      </ul>
    </div>

    <div class="FilterHeader" @click="toggleFilter('class')">
      Клас
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showClass }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showClass">
      <ul class="checkbox-list">
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Гірський
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Доріжний
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Дитячий
          </label>
        </li>
      </ul>
    </div>

    <div class="FilterHeader" @click="toggleFilter('size')">
      Розмір рами
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showSize }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showSize">
      <ul class="checkbox-list">
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            XS
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            S
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            L
          </label>
        </li>
      </ul>
    </div>

    <div class="FilterHeader" @click="toggleFilter('material')">
      Матеріал рами
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showMaterial }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showMaterial">
      <ul class="checkbox-list">
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Алюмінієва
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Стальна
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Карбон
          </label>
        </li>
      </ul>
    </div>

    <div class="FilterHeader" @click="toggleFilter('brake')">
      Тип гальм
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showBrake }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showBrake">
      <ul class="checkbox-list">
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Дискові гідравлічні
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Ножні
          </label>
        </li>
        <li class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Барабанні
          </label>
        </li>
      </ul>
    </div>

    <div class="FilterHeader" @click="toggleFilter('speeds')">
      Кількість швидкостей
      <img
        class="Arrow"
        :class="{ 'ArrowRotated': showSpeeds }"
        src="../assets/img/Arrow.png"
        alt="Стрілка"
      />
    </div>
    <div v-show="showSpeeds">
      <ul class="checkbox-list">
        <li v-for="index in 8" :key="index" class="brand-item">
          <label class="checkbox-label">
            <input type="checkbox" class="checkbox-input">
            <span class="custom-checkbox"></span>
            Brand 1
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<style src="../assets/filter.css"></style>
