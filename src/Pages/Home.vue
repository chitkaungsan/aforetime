<template>
  <div class="home">
        <navbar></navbar>
        <HomeCarousel></HomeCarousel>
        <HomeWelcome></HomeWelcome>
        <HomeAboutOfFourHouse></HomeAboutOfFourHouse>
        <HomePreview></HomePreview>
        <HomeFacilities></HomeFacilities>
        <HomeContact></HomeContact>
        <HomeFooter></HomeFooter>
  </div>
</template>
<script setup>
import HomeCarousel from '../Components/Home/HomeCarousel.vue';
import HomeWelcome from '../Components/Home/HomeWelcome.vue';
import HomeAboutOfFourHouse from '../Components/Home/HomeAboutOfFourHouse.vue';
import HomePreview from '@/Components/Home/HomePreview.vue';
import HomeFacilities from '@/Components/Home/HomeFacilities.vue';
import HomeContact from '@/Components/Home/HomeContact.vue';
import HomeFooter from '../Components/Home/HomeFooter.vue';

</script>
