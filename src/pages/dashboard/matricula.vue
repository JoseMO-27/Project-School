<template>
  <v-container fluid class="pa-4">
    
    <v-card
      class="mx-auto mb-6"
      max-width="1200"
      elevation="6"
      rounded="lg"
    >
      <v-toolbar
        color="secondary" density="compact"
        flat
      >
        <v-icon size="28" class="ml-4 mr-2">mdi-account-edit</v-icon> <v-toolbar-title class="font-weight-bold">
          Gestión de Matrículas
        </v-toolbar-title>
        
        <v-spacer></v-spacer>
        
      </v-toolbar>

      <v-card-text class="pa-6">
        <p class="text-h6 mb-4">¡Bienvenido a la sección de Matrículas!</p>
        <p>Aquí se gestionarán los formularios de inscripción, la verificación de documentos y el estado de la matrícula de cada estudiante.</p>
        
        <v-divider class="my-4"></v-divider>
        <router-view />
        
      </v-card-text>
    </v-card>
    
  </v-container>
</template>