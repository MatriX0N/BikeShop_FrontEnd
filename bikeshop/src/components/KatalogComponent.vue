<script>
import FilterComponent from '@/components/FilterComponent.vue';
import BikeComponent from '@/components/BikeComponent.vue';

export default {
  components: {
    FilterComponent,
    BikeComponent,
  }
}
</script>

<template>
  <div class="katalog">
    <FilterComponent/>
    <BikeComponent/>
  </div>
</template>
