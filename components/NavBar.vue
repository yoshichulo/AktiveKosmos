<template>
  <v-container fluid class="pa-0">
    <!-- Social media bar -->
    <v-container fluid class="d-flex justify-end black pa-0">
      <v-col lg="1" md="1" sm="2" cols="3">
        <v-row>
          <v-flex v-for="icon in socialNetworks" :key="icon.title">
            <font-awesome-icon :icon="['fab', icon.icon]" size="lg" style="color: white" />
          </v-flex>
        </v-row>
      </v-col>
    </v-container>

    <!-- Nav bar -->
    <v-container fluid class="grey lighten-5 d-flex justify-center align-center nav-container">
      <v-col lg="3" md="2" sm="2" cols="2">
        <v-img :src="aktiveLogo" height="80px" contain></v-img>
      </v-col>
      <v-col lg="7" md="10" sm="10" cols="10" class="d-flex justify-center">
        <v-row>
            <v-menu open-on-hover bottom offset-y v-for="(link, index) in linksDropdown" :key="index">
              <template v-slot:activator="{ on }">
                <v-btn class="navbar-btn" text v-on="on">{{ link.title }} <v-icon>arrow_drop_down</v-icon></v-btn>
              </template>

              <v-list>
                <v-list-item v-for="(item, index) in link.subs" :key="index" @click="">
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
        </v-row>
      </v-col>
    </v-container>
  </v-container>
</template>

<script>
  export default {
    name: "NavBar",
    data() {
      return {
        aktiveLogo: require("assets/icons/aktive-text-right-small.png"),
        socialNetworks: [
          {"title": "Twitter", "icon": "twitter-square"},
          {"title": "Instagram", "icon": "instagram-square"},
          {"title": "Facebook", "icon": "facebook-square"},
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
  .navbar-btn {
    font-size: 16px;
    font-weight: bold;
    transition: .2s;
  }
  .navbar-btn:hover {
    background-color: #FAFAFA;
    border-width: 0 0 2px 0;
    border-style: solid;
    border-color: black;
  }
  .nav-container {
    box-shadow: 0px 10px 26px -10px rgba(0,0,0,0.75);
  }
</style>
