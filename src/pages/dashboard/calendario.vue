<template>
  <v-container fluid class="pa-4">
    
    <v-card
      class="mx-auto mb-6"
      max-width="1400"
      elevation="6"
      rounded="lg"
    >
      <v-toolbar
        color="teal-darken-1" density="compact"
        flat
      >
        <v-icon size="28" class="ml-4 mr-2">mdi-calendar-month</v-icon> <v-toolbar-title class="font-weight-bold">
          Calendario Académico y de Eventos
        </v-toolbar-title>
        
        <v-spacer></v-spacer>

      </v-toolbar>

      <v-card-text class="pa-6">
        <p class="text-h6 mb-4 text-teal-darken-2">
            Fechas clave: exámenes, días festivos y cierres escolares.
        </p>
        
        <v-sheet class="mb-4" height="600">
            <v-card variant="tonal" class="pa-5">
              <div class="text-center text-subtitle-1">
                
              </div>
              <v-date-picker 
                show-adjacent-months 
                color="teal" 
                :multiple="false"
                full-width
              ></v-date-picker>
            </v-card>
        </v-sheet>
        
        <v-divider class="my-4"></v-divider>
        <router-view />
        
      </v-card-text>
    </v-card>
    
  </v-container>
</template>