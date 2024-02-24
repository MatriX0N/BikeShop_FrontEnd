<script >
import KatalogComponent from '@/components/KatalogComponent.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Header,
    KatalogComponent,
    Footer,
  },
  
};
</script>

<template>
  <Header/>
  <KatalogComponent/>
  <Footer/>
</template>
