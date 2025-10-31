<template>
  <v-container class="my-8 elegant-container">
    <h2 class="text-h4 text-center mb-10 font-weight-bold elegant-title-text">
      The Woodlands College Park High School
    </h2>

    <v-row justify="center" class="mt-3 mb-3">
      <!-- Tarjeta de Misión -->
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card
          class="elegant-card pa-6 text-center"
          elevation="12"
          rounded="lg"
          width="100%"
          max-width="400"
          color="#f9f9f9"
        >
          <div class="card-icon-wrapper mb-4">
            <v-icon size="60" color="#3f51b5">mdi-bullseye-arrow</v-icon>
          </div>
          <v-card-title class="text-h5 font-weight-bold mb-3 elegant-card-title">
            Misión
          </v-card-title>
          <v-card-text class="elegant-card-text">
            Educar y empoderar a todos los estudiantes para que desarrollen su máximo potencial académico, social y personal, preparándolos para ser ciudadanos responsables y exitosos en un mundo en constante cambio.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta de Visión -->
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card
          class="elegant-card pa-6 text-center"
          elevation="12"
          rounded="lg"
          width="100%"
          max-width="400"
          color="#f9f9f9"
        >
          <div class="card-icon-wrapper mb-4">
            <v-icon size="60" color="#4caf50">mdi-eye-outline</v-icon>
          </div>
          <v-card-title class="text-h5 font-weight-bold mb-3 elegant-card-title">
            Visión
          </v-card-title>
          <v-card-text class="elegant-card-text">
            Ser una institución líder reconocida por su excelencia académica, un ambiente de aprendizaje innovador y su compromiso con el desarrollo integral de una comunidad estudiantil diversa y colaborativa.
          </v-card-text>
        </v-card>
      </v-col>

      <!-- Tarjeta de Objetivos -->
      <v-col cols="12" md="4" class="d-flex justify-center">
        <v-card
          class="elegant-card pa-6 text-center"
          elevation="12"
          rounded="lg"
          width="100%"
          max-width="400"
          color="#f9f9f9"
        >
          <div class="card-icon-wrapper mb-4">
            <v-icon size="60" color="#ff9800">mdi-trophy-variant-outline</v-icon>
          </div>
          <v-card-title class="text-h5 font-weight-bold mb-3 elegant-card-title">
            Objetivos
          </v-card-title>
          <v-card-text class="elegant-card-text text-left">
            <ul class="elegant-list">
              <li>Mejorar el rendimiento académico de todos los estudiantes.</li>
              <li>Fomentar un entorno inclusivo y de apoyo.</li>
              <li>Promover el liderazgo y el servicio comunitario.</li>
              <li>Integrar tecnología para enriquecer la experiencia educativa.</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
/* Importar fuentes de Google Fonts para un estilo elegante */
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Playfair+Display:wght@700&display=swap');

.elegant-container {
  background-color: #f5f5f5; /* Un fondo suave para el contenedor */
  padding: 40px 20px;
}

.elegant-title-text {
  font-family: 'Playfair Display', serif; /* Fuente elegante para el título principal */
  color: #263238; /* Color oscuro para el texto */
  letter-spacing: 1.5px; /* Pequeño espaciado para un toque de sofisticación */
  font-size: 2.8rem !important; /* Un poco más grande para el h2 */
}

.elegant-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid #e0e0e0; /* Un borde sutil */
  border-radius: 12px !important; /* Bordes más redondeados */
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08) !important; /* Sombra más pronunciada */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Transición para interactividad */
}

.elegant-card:hover {
  transform: translateY(-5px); /* Pequeño levantamiento al pasar el ratón */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15) !important;
}

.card-icon-wrapper {
  background-color: #eceff1; /* Fondo sutil para el icono */
  border-radius: 50%; /* Icono en un círculo */
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px auto; /* Centrar y espaciar */
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1); /* Sombra interna para profundidad */
}

.elegant-card-title {
  font-family: 'Playfair Display', serif; /* Fuente elegante para los títulos de las tarjetas */
  color: #37474f; /* Color más oscuro para los títulos */
  letter-spacing: 1px;
  font-size: 1.8rem !important; /* Ajuste del tamaño del título */
}

.elegant-card-text {
  font-family: 'Merriweather', serif; /* Fuente clásica para el cuerpo del texto */
  color: #546e7a; /* Color de texto más suave */
  line-height: 1.8; /* Mejor interlineado para legibilidad */
  font-size: 1rem;
}

.elegant-list {
  list-style-type: none; /* Quitar viñetas por defecto */
  padding-left: 0;
  text-align: left;
}

.elegant-list li {
  position: relative;
  margin-bottom: 12px;
  padding-left: 25px; /* Espacio para una viñeta personalizada */
  font-family: 'Merriweather', serif;
  color: #546e7a;
}

.elegant-list li::before {
  content: '•'; /* Viñeta personalizada */
  position: absolute;
  left: 0;
  color: #3f51b5; /* Color de la viñeta */
  font-size: 1.2em;
  line-height: 1;
  top: 0;
}

/* Colores de iconos específicos para un look más integrado */
.v-icon[color="blue-darken-2"] { color: #3f51b5 !important; } /* Índigo */
.v-icon[color="green-darken-2"] { color: #4caf50 !important; } /* Verde */
.v-icon[color="orange-darken-2"] { color: #ff9800 !important; } /* Naranja ámbar */

/* Pequeños ajustes para la responsividad */
@media (max-width: 960px) {
  .elegant-title-text {
    font-size: 2.2rem !important;
  }
}
</style>