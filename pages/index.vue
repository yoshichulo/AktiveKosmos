<template>
  <aktive-layout>
    <v-container fluid class="d-flex pa-12">
      <!-- Carousel -->
      <v-container fluid class="d-flex justify-center">
        <v-col lg="6" md="8" sm="12" cols="12">
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            class="carousel"
          >
            <v-carousel-item v-for="(slide, i) in [slide1, slide2, slide3, slide4]" :key="i">
              <v-img :src="slide" height="100%" />
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-container>
    </v-container>
  </aktive-layout>
</template>

<script>
  import AktiveLayout from "../layouts/AktiveLayout";
  export default {
    components: {AktiveLayout},
    data() {
      return {
        slide1: require('assets/images/slides/slide1.jpg'),
        slide2: require('assets/images/slides/slide2.jpg'),
        slide3: require('assets/images/slides/slide3.jpg'),
        slide4: require('assets/images/slides/slide4.jpg'),
      }
    }
  }
</script>

<style scoped>
  .carousel {
    border-radius: 20px;
    box-shadow: 0px 0px 25px -5px rgba(0,0,0,0.75);
  }
</style>
