<template>
  <v-container fluid class="pa-4">
    
    <v-card
      class="mx-auto mb-6"
      max-width="1200"
      elevation="6"
      rounded="lg"
    >
      <v-toolbar
        color="primary"
        density="compact"
        flat
      >
        <v-icon size="28" class="ml-4 mr-2">mdi-medal</v-icon>
        <v-toolbar-title class="font-weight-bold">
          Calificaciones de Estudiantes
        </v-toolbar-title>
        
        <v-spacer></v-spacer>
    
      </v-toolbar>

      <v-card-text class="pa-6">
        <p class="text-h6 mb-4">
            Consulta y gestión de los reportes de rendimiento académico.
        </p>
        <p>
            Aquí puedes implementar una tabla de datos para listar las calificaciones por periodo o estudiante.
        </p>
        
        <v-divider class="my-4"></v-divider>
        <router-view />
        
      </v-card-text>
    </v-card>
    
  </v-container>
</template>