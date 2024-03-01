<script>
import BikeName from '@/components/BikeName.vue';
import Description from '@/components/Description.vue';
import BikeCharacteristics from '@/components/BikeCharacteristics.vue'

export default {
  components: {
    BikeName,
    Description,
    BikeCharacteristics,
  }
}
</script>

<template>
    <BikeName/>
    <div class="description-and-char">
    <Description/>
    <BikeCharacteristics/>
    </div>
</template>
