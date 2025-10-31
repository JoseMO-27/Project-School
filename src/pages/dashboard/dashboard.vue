<template>
  <v-app id="inspire">
    
  <v-app-bar 
    :elevation="4"
    height="180" 
    image="https://pbk.com/wp-content/uploads/2024/05/pbk-e32a-1536x863.jpg"
    color="dark-blue"
    dark
    class="text-white"
  >

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="ml-2"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="text-h5 font-weight-bold ml-4">
      <v-avatar
          class="mb-3 border-md"
          image="https://images.bubbleup.com/width1920/woodlandscenter2016com/pages/meta/college_park_hs_1464729697.jpg"
          size="72"
      ></v-avatar>
      The Woodlands College Park High School
    </v-app-bar-title>

    <template v-slot:append>
        <v-btn icon @click="logout" title="Cerrar Sesión">
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>
    </template>
  </v-app-bar>
    
    <v-navigation-drawer v-model="drawer">
      <v-sheet
        class="pa-5 d-flex flex-column align-center"
        color="blue-grey-lighten-4"
      >
        <v-avatar
          class="mb-3 border-md"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwe7BfNaYf0vsRJzb_ULkUx9ug9Jef0L4UkA&s"
          size="72"
        ></v-avatar>

        <div class="text-subtitle-1 font-weight-medium">Jero_Torre@ejemplo.com</div>
        <div class="text-caption text-medium-emphasis">Estudiante / Usuario</div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item
          v-for="data in links"
          :key="data.icono"
          :prepend-icon="data.icono"
          :title="data.titulo"
          :to="data.enlace"
          color="blue-darken-3" rounded="shaped"
          class="my-1"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <v-container
        class="py-8 px-6"
        fluid
      >
        <v-row>
          <v-col cols="12">
            <v-card elevation="2" rounded="lg">
              <v-list lines="two">
                <v-list-subheader :title="card"></v-list-subheader>
                  <router-view />
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
  import { ref } from 'vue';

  import { useRouter } from 'vue-router'; 

  const router = useRouter(); 
  
  const cards = ['Today', 'Yesterday']
  const links = [
    {
        icono : "mdi-account-plus", 
        titulo : "Registro",
        enlace : "/dashboard/registro"
    },
    {
        icono : "mdi-book-open",
        titulo : "Matriculas",
        enlace : "/dashboard/matricula"
    },
    {
        icono : "mdi-medal", 
        titulo : "Calificaciones",
        enlace : "/dashboard/calificaciones"
    },
    {
        icono : "mdi-bullhorn-variant",
        titulo : "Anuncios",
        enlace : "/dashboard/anuncios"
    },
    {
        icono : "mdi-calendar-month",
        titulo : "Calendario Académico",
        enlace : "/dashboard/calendario"
    },
    {
        icono : "mdi-help-box",
        titulo : "Centro de Ayuda",
        enlace : "/dashboard/ayuda"
    }
  ]

  const drawer = ref(false)
  const logout = () => {
    console.log("Cerrando sesión y redirigiendo a la página principal.");
  
    router.push('/'); 
  };
</script>