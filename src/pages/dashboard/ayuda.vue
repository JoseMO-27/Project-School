<template>
  <v-container fluid class="pa-4">
    
    <v-card
      class="mx-auto mb-6"
      max-width="1200"
      elevation="6"
      rounded="lg"
    >
      <v-toolbar
        color="orange-darken-1" density="compact"
        flat
      >
        <v-icon size="28" class="ml-4 mr-2">mdi-bullhorn-variant</v-icon> <v-toolbar-title class="font-weight-bold">
          Tablón de Anuncios y Comunicados
        </v-toolbar-title>
        
        <v-spacer></v-spacer>
        <v-btn text color="white" class="text-capitalize">
          <v-icon left>mdi-plus</v-icon>
          Nuevo Anuncio
        </v-btn>
      </v-toolbar>

      <v-card-text class="pa-6">
        <p class="text-h6 mb-4 text-orange-darken-2">
            Información importante de la institución.
        </p>
        <p>
            Utiliza este espacio para listar los anuncios más recientes, noticias escolares, eventos y recordatorios.
        </p>
        
        <v-divider class="my-4"></v-divider>
        
        <router-view />
        
      </v-card-text>
    </v-card>
    
  </v-container>
</template>