<template>
  <div class="login-container">
    <div class="login-card">
      <img src="@/assets/college_park.png" alt="Escudo institucional" class="background-logo" />

      <h1 class="login-title" style="text-align: center;">Iniciar sesión</h1>
      <p class="login-subtitle" style="text-align: center;">Accede a tu cuenta institucional</p>

      <!-- Aquí he añadido una alerta básica para mostrar el error de autenticación -->
      <div v-if="loginError" class="error-message">
        {{ loginError }}
      </div>

      <form class="login-form" @submit.prevent="goToDashboard">
        <div class="form-group">
          <label for="email">Usuario</label>
          <input
            type="text"
            id="email"
            v-model="username"
            placeholder="usuario1234"
          />
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input
            :type="showPassword ? 'text' : 'password'"
            id="password"
            v-model="password"
            placeholder="••••••••"
          />
        </div>

        <div class="options-row">
          <label class="show-password">
            <input type="checkbox" v-model="showPassword" />
            Mostrar contraseña
          </label>
          <a href="#" class="forgot-link">¿Olvidaste tu contraseña?</a>
        </div>

        <button type="submit" class="login-button">Iniciar sesión</button>

        <div class="register-text">
          <p>¿Eres nuevo? <a href="@/components/UsuarioApp.vue">Crea una cuenta</a></p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import authservice from '@/services/authservice';
// Importamos useAuthStore para Pinia, aunque el componente no lo estaba usando, lo dejo aquí por si lo necesita en el futuro.
// import { useAuthStore } from '@/store/auth'; 

export default {
  name: "LoginApp",
  data() {
    return {
      username: "", // Cambiado de 'email' a 'username' para coincidir con la lógica del servicio
      password: "",
      showPassword: false,
      loginError: null, // Nuevo estado para mostrar errores
    };
  },
  methods: {
    async goToDashboard() {
      // 1. **VALIDACIÓN DE CAMPOS VACÍOS (SOLUCIÓN AL PROBLEMA 1)**
      if (!this.username || !this.password) {
        this.loginError = "Debe llenar todos los campos vacíos para continuar.";
        return; // Detiene la ejecución si los campos están vacíos
      }

      this.loginError = null; // Limpiar errores anteriores

      // 2. Intentar autenticar
      try {
        const loginResult = await authservice.login(this.username, this.password);
        
        if (loginResult.success) {
          // Si usa Pinia: const authStore = useAuthStore(); authStore.setUser(loginResult.user);
          this.$router.push("dashboard");
        } else {
          // Mostrar error de credenciales incorrectas
          this.loginError = loginResult.message || 'Error de autenticación.';
        }
      } catch (error) {
        console.error("Error en el login:", error);
        this.loginError = "Error inesperado al intentar iniciar sesión.";
      }
    },
    // El método togglePassword ya no es necesario si el input type está vinculado a showPassword
  },
};
</script>

<style scoped>
/* Estilos originales mantenidos */

/* === Fondo general === */
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ffffff, #1a1a1a);
  font-family: "Roboto", "Segoe UI", sans-serif;
  color: #e0e0e0;
}

/* === Tarjeta de login === */
.login-card {
  position: relative;
  background: rgba(30, 30, 30, 0.95);
  border: 1px solid #3a3a3a;
  border-radius: 0.75rem;
  padding: 2.5rem 2rem;
  width: 100%;
  max-width: 420px;
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.6),
    0 0 0 1px rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

/* Nuevo estilo para mensaje de error */
.error-message {
  background-color: #d32f2f;
  color: white;
  padding: 10px;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  font-weight: 500;
  border: 1px solid #c62828;
}


/* === Escudo detrás del formulario === */
.background-logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.15; /* visible pero sutil */
  width: 230px;
  height: auto;
  z-index: 0;
  filter: brightness(1.3) contrast(1.1);
  pointer-events: none;
  user-select: none;
}

/* === Capas superiores === */
.login-title,
.login-subtitle,
.login-form {
  position: relative;
  z-index: 2;
}

/* === Títulos === */
.login-title {
  font-size: 1.8rem;
  font-weight: 600;
  color: #fafafa;
  text-align: center;
  margin-bottom: 0.4rem;
}

.login-subtitle {
  color: #bdbdbd;
  font-size: 0.95rem;
  margin-bottom: 2rem;
  text-align: center;
}

/* === Formulario === */
.login-form {
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
}

.form-group label {
  font-weight: 600;
  font-size: 0.9rem;
  color: #e0e0e0;
  margin-bottom: 0.3rem;
  display: block;
}

.form-group input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #555;
  border-radius: 0.5rem;
  background-color: #2c2c2c;
  color: #fafafa;
  font-size: 1rem;
  outline: none;
  transition: all 0.25s ease;
}

.form-group input::placeholder {
  color: #9e9e9e;
}

.form-group input:focus {
  border-color: #64b5f6;
  box-shadow: 0 0 0 2px rgba(100, 181, 246, 0.2);
  background-color: #2f2f2f;
}

/* === Opciones === */
.options-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.9rem;
}

.show-password {
  color: #bdbdbd;
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.show-password input {
  accent-color: #64b5f6;
  cursor: pointer;
}

.forgot-link {
  color: #64b5f6;
  text-decoration: none;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

/* === Botón === */
.login-button {
  background-color: #1976d2;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-top: 0.8rem;
  transition: all 0.3s ease;
}

.login-button:hover {
  background-color: #1565c0;
  transform: scale(1.03);
}

/* === Registro === */
.register-text {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #b0bec5;
}

.register-text a {
  color: #64b5f6;
  text-decoration: none;
  font-weight: 500;
}

.register-text a:hover {
  text-decoration: underline;
}

/* === Efecto decorativo de fondo === */
.login-card::before,
.login-card::after {
  content: "";
  position: absolute;
  border-radius: 60% 40% 30% 70% / 50% 60% 40% 60%;
  z-index: 1;
  opacity: 0.18;
}

.login-card::before {
  top: -70px;
  left: -60px;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle at 30% 30%, #1b5e20, #004d40);
}

.login-card::after {
  bottom: -80px;
  right: -70px;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle at 70% 70%, #0d47a1, #1565c0);
}

/* === Responsivo === */
@media (max-width: 480px) {
  .login-card {
    padding: 2rem 1.5rem;
  }

  .login-title {
    font-size: 1.6rem;
  }
}
</style>