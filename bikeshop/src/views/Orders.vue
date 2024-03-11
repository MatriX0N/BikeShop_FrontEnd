<script >
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Orders from '@/components/OrdersComponent.vue';

export default {
  components: {
    Header,
    Orders,
    Footer
  },

};
</script>

<template>
    <Header/>
    <Orders/>
    <Footer/>
</template>


