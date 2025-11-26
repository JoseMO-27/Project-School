<template>
  <v-container>
    <v-card class="mx-auto" max-width="900" flat>
      <v-card-title class="text-h4 font-weight-bold text-center py-6" style="color: #4C0000;">
        Historia de The Woodlands College Park High School
      </v-card-title>
    </v-card>

    <v-timeline text-align="start" class="mt-8">
      <!-- 1. Fundación y Construcción (2005) --><v-timeline-item
        dot-color="#A62C2B" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2005</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #A62C2B;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #F8E7E7;">
            <v-icon class="me-3" icon="mdi-school" size="default" style="color: #A62C2B;"></v-icon>
            Fundación y Primera Piedra
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #6D2F2F;">Establecimiento Oficial</p>
            El Distrito Escolar de Conroe aprueba la construcción de una nueva preparatoria en el sector de College Park para dar respuesta al rápido crecimiento de The Woodlands. Se colocan los cimientos de lo que se convertiría en el hogar de los Cavaliers.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- 2. Apertura y Mascota (2006) --><v-timeline-item
        dot-color="#7B2C2B" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2006</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #7B2C2B;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #F4DADA;">
            <v-icon class="me-3" icon="mdi-flag-variant" size="default" style="color: #7B2C2B;"></v-icon>
            Apertura y Elección de Mascota
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #6D2F2F;">Bienvenidos, Cavaliers</p>
            La escuela abre sus puertas por primera vez a los estudiantes de 9no y 10mo grado. La comunidad elige oficialmente la mascota del "Caballero" (Cavalier) y establece los colores Rojo Borgoña y Oro como emblemas de excelencia y tradición.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- 3. Primera Graduación (2009) --><v-timeline-item
        dot-color="#551C1C" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2009</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #551C1C;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #EFD1D1;">
            <v-icon class="me-3" icon="mdi-seal" size="default" style="color: #551C1C;"></v-icon>
            La Clase Fundadora se Gradúa
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #6D2F2F;">Primeros Egresados</p>
            Se celebra la primera ceremonia de graduación, marcando la culminación del primer ciclo completo de cuatro años. Estos 400 estudiantes establecieron el estándar académico y comunitario para todas las clases futuras.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- 4. Éxito Atlético (2014) --><v-timeline-item
        dot-color="#3A1212" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2014</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #3A1212;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #EAD1D1;">
            <v-icon class="me-3" icon="mdi-trophy-award" size="default" style="color: #3A1212;"></v-icon>
            Campeonato Estatal Histórico
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #6D2F2F;">Gloria Deportiva</p>
            El equipo de Baloncesto Masculino (The Cavalier Hoops) gana el primer Campeonato Estatal UIL 6A para la escuela, consolidando la reputación atlética de College Park. Esto inspiró la modernización del gimnasio principal.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- 5. Transformación Digital (2020) --><v-timeline-item
        dot-color="#004C4C" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2020</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #004C4C;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #E0FFFF;">
            <v-icon class="me-3" icon="mdi-laptop" size="default" style="color: #004C4C;"></v-icon>
            Innovación Digital y Académica
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #003B3B;">Programa 1:1</p>
            La escuela completa una importante renovación de su infraestructura de TI y lanza el programa de dispositivos 1:1 para todos los estudiantes, asegurando que cada Cavalier tenga acceso a recursos digitales de vanguardia.
          </v-card-text>
        </v-card>
      </v-timeline-item>

      <!-- 6. Expansión de Instalaciones (2023) --><v-timeline-item
        dot-color="#003B3B" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2023</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #003B3B;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #C0FFFF;">
            <v-icon class="me-3" icon="mdi-palette" size="default" style="color: #003B3B;"></v-icon>
            Apertura del Ala de Artes Creativas
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #002A2A;">Espacios para la Creatividad</p>
            Se inaugura una nueva ala dedicada a las artes visuales y escénicas, incluyendo un teatro de caja negra y estudios de música de última generación, elevando el perfil artístico del College Park.
          </v-card-text>
        </v-card>
      </v-timeline-item>
      
      <!-- 7. Lanzamiento del Programa de Mentoría (2024) -->
      <v-timeline-item
        dot-color="#A62C2B" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2024</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #A62C2B;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #F8E7E7;">
            <v-icon class="me-3" icon="mdi-account-group" size="default" style="color: #A62C2B;"></v-icon>
            Lanzamiento del Programa de Mentoría
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #6D2F2F;">Conexión Comunidad-Alumnos</p>
            Se establece formalmente el "Cavalier Compass", un programa de mentoría donde antiguos alumnos y profesionales de la comunidad guían a los estudiantes de último año en sus decisiones universitarias y profesionales.
          </v-card-text>
        </v-card>
      </v-timeline-item>
      
      <!-- 8. Celebración del 20 Aniversario (2025) -->
      <v-timeline-item
        dot-color="#7B2C2B" fill-dot size="large"
      >
        <template v-slot:opposite>
          <div class="font-weight-bold text-h6" style="color: #4C0000;">2025</div>
        </template>
        <v-card class="elevation-2" style="border-left: 5px solid #7B2C2B;">
          <v-card-title class="font-weight-bold text-h6" style="color: #4C0000; background-color: #F4DADA;">
            <v-icon class="me-3" icon="mdi-star-four-points" size="default" style="color: #7B2C2B;"></v-icon>
            20 Aniversario del Colegio
          </v-card-title>
          <v-card-text class="py-4">
            <p class="font-weight-medium mb-2" style="color: #6D2F2F;">Dos Décadas de Excelencia</p>
            La escuela celebra su vigésimo aniversario con una gran reunión de exalumnos y la inauguración de una cápsula del tiempo, simbolizando dos décadas de logros académicos, deportivos y artísticos.
          </v-card-text>
        </v-card>
      </v-timeline-item>
      
    </v-timeline>
  </v-container>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card class="pa-4">
          <v-card-title class="headline text-center mb-4">
            Información de Contacto
          </v-card-title>
          
          <v-row dense>
            
            <v-col cols="12" sm="6" md="3" class="text-center">
              <v-icon large color="primary">mdi-phone</v-icon>
              <div class="font-weight-bold mt-1">+1 (555) 123-4567</div>
              <div class="text-caption grey--text">Teléfono Principal</div>
            </v-col>

            <v-col cols="12" sm="6" md="3" class="text-center">
              <v-icon large color="primary">mdi-phone</v-icon>
              <div class="font-weight-bold mt-1">+1 (555) 987-6543</div>
              <div class="text-caption grey--text">Teléfono Secundario</div>
            </v-col>

            <v-col cols="12" sm="6" md="3" class="text-center">
              <v-icon large color="primary">mdi-email</v-icon>
              <div class="font-weight-bold mt-1">info@mi-escuela.edu</div>
              <div class="text-caption grey--text">Correo General</div>
            </v-col>

            <v-col cols="12" sm="6" md="3" class="text-center">
              <v-icon large color="primary">mdi-email</v-icon>
              <div class="font-weight-bold mt-1">admisiones@mi-escuela.edu</div>
              <div class="text-caption grey--text">Correo de Admisiones</div>
            </v-col>
          </v-row>
          
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ContactInfoHorizontal',
};
</script>