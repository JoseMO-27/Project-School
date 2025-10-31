 <template>
 <v-app-bar 
    :elevation="2"
    height="100px" 
    style="border-bottom: 2px solid #ddd;"
  >
    <template v-slot:prepend>
      <!-- El icono de navegación debe ser ligeramente más grande para que coincida con el nuevo tamaño de la barra -->
      <v-app-bar-nav-icon size="large"></v-app-bar-nav-icon>
    </template>

    <!-- Aplicamos una clase para aumentar el tamaño del texto y ponerlo en negrita -->
    <v-app-bar-title class="text-h5 font-weight-bold">
      The Woodlands College Park High School
    </v-app-bar-title>

    <template v-slot:append>
      <!-- El botón de inicio de sesión se mantiene, pero usamos un tamaño large para que se vea mejor -->
      <v-btn size="large" @click="dialog = true">INICIAR SESION</v-btn>
    </template>
  </v-app-bar>

  <v-dialog
    v-model="dialog"
    width="400px"
  >
    <!-- Asegúrate de que LoginApp esté importado y definido en tu script -->
    <LoginApp></LoginApp>
  </v-dialog>  
</template>

<script setup>
  import { ref } from 'vue'
     const dialog = ref(false)
</script>