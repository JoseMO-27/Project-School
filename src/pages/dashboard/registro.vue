<template>
  <v-container fluid class="pa-4">
    
    <v-card
      class="mx-auto mb-6"
      max-width="1200"
      elevation="6"
      rounded="lg"
    >
      <v-toolbar
        color="indigo" density="compact"
        flat
      >
        <v-icon size="28" class="ml-4 mr-2">mdi-account-plus</v-icon> <v-toolbar-title class="font-weight-bold">
          Formulario de Registro de Usuarios
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

      </v-toolbar>

      <v-card-text class="pa-6">
        <p class="text-h6 mb-4 text-indigo-darken-2">
            Ingresa la información requerida para el nuevo usuario.
        </p>
        <p>
            Esta sección está diseñada para la inscripción de nuevos estudiantes, personal docente o administrativo.
        </p>
        
        <v-divider class="my-4"></v-divider>
        
        <router-view />
        
      </v-card-text>
    </v-card>
    
  </v-container>
</template>