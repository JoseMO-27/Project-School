<template>
  <v-carousel
    height="450"
    show-arrows="hover"
    cycle
    hide-delimiter-background
    class="school-carousel"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
      :src="slide.src"
      cover
    >
      <div class="d-flex fill-height justify-center align-center">
        <div class="carousel-text">
          <h2 class="text-h2">{{ slide.title }}</h2>
          <p class="text-h6 mt-2">{{ slide.description }}</p>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script setup>
  const slides = [
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/3/38/The_Woodlands_College_Park_Front_Image.jpg', // Reemplaza con la URL de tu primera imagen
      title: '¡Bienvenidos a nuestra comunidad educativa!',
      description: 'Donde el aprendizaje y el crecimiento van de la mano.'
    },
    {
      src: 'https://pbk.com/wp-content/uploads/2024/05/pbk-e32a-1536x863.jpg', // Reemplaza con la URL de tu segunda imagen
      title: 'Excelencia académica para un futuro brillante',
      description: 'Preparamos a nuestros estudiantes para los desafíos del mañana.'
    },
    {
      src: 'https://pbk.com/wp-content/uploads/2024/05/pbk-Auditorium-1536x863.jpg', // Reemplaza con la URL de tu tercera imagen
      title: 'Un entorno inspirador para cada estudiante',
      description: 'Fomentamos la creatividad, el pensamiento crítico y el trabajo en equipo.'
    },
  ];
</script>

<style scoped>
.school-carousel {
  border-radius: 8px; /* Bordes ligeramente redondeados para el carrusel */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra sutil */
}

.carousel-text {
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para el texto */
  padding: 20px 40px;
  border-radius: 8px;
  text-align: center;
  color: white; /* Color del texto blanco */
  max-width: 80%; /* Ancho máximo para el texto */
}

.carousel-text h2 {
  font-size: 2.8rem; /* Tamaño de fuente más grande para el título */
  margin-bottom: 10px;
  font-weight: 700; /* Negrita */
}

.carousel-text p {
  font-size: 1.3rem; /* Tamaño de fuente para la descripción */
  font-weight: 300; /* Texto más ligero */
}
</style>