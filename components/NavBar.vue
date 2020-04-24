<template>
  <v-container fluid class="pa-0">
    <!-- Social media bar -->
    <v-container fluid class="d-flex justify-end pa-0" style="background-color: #ef9141">
      <v-col lg="1" md="1" sm="3" cols="3">
        <v-row>
          <v-flex v-for="icon in socialNetworks" :key="icon.link">
            <a :href="icon.link"  target="_blank"><font-awesome-icon :icon="['fab', icon.icon]" size="2x" style="color: white" /></a>
          </v-flex>
        </v-row>
      </v-col>
    </v-container>

    <!-- Nav bar -->
    <v-container fluid class="grey lighten-5 d-flex justify-center align-center nav-container pa-0">
      <v-col class="pa-0">
        <v-col class="pt-10 pb-5">
          <v-img :src="aktiveLogo" height="240px" contain></v-img>
        </v-col>
        <div align="center">
          <v-col class="d-flex justify-center py-8" lg="6" md="9" sm="12" cols="12">
            <v-row class="d-flex justify-center">
              <v-flex v-for="(link, index) in linksDropdown" :key="index">
                <div align="center">
                  <nav-button :link="link"/>
                </div>
              </v-flex>
            </v-row>
          </v-col>
        </div>
      </v-col>
    </v-container>
  </v-container>
</template>

<script>
  import NavButton from "./NavButton";
  export default {
    name: "NavBar",
    components: {NavButton},
    data() {
      return {
        aktiveLogo: require("assets/icons/aktive-orange-small.png"),
        socialNetworks: [
          {"link": "https://www.instagram.com/aktivekosmos/", "icon": "instagram-square"},
          {"link": "https://www.facebook.com/AktiveKosmoss/", "icon": "facebook-square"},
        ],
        linksDropdown: [
          {
            title: "¿Quiénes somos?",
            subs: [
              {title: "Descripción y objetivos", link: "#"},
              {title: "Equipo", link: "#"}
            ]
          },
          {
            title: "Erasmus+",
            subs: [
              {title: "Intercambios", link: "#"},
              {title: "Nuestros proyectos", link: "#"},
              {title: "Partners", link: "#"}
            ]
          },
          {
            title: "Talleres y actividades",
            subs: [
              {title: "Descripción y objetivos", link: "#"},
              {title: "Equipo", link: "#"}
            ]
          },
          {
            title: "Colabora",
            subs: [
              {title: "Socios", link: "#"},
              {title: "Testimonios", link: "#"}
            ]
          }
        ],

        items: [
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me' },
          { title: 'Click Me 2' },
        ]
      }
    }

  }
</script>

<style scoped>
  .nav-container {
    box-shadow: 0px 10px 26px -10px rgba(0,0,0,0.75);
  }
</style>
