<script >
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Likes from '@/components/LikesComponent.vue';

export default {
  components: {
    Header,
    Footer,
    Likes
  },

};
</script>

<template>
    <Header/>
    <Likes/>
    <Footer/>
</template>


