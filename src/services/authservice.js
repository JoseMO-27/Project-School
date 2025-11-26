import axios from 'axios';

const API_URL = 'http://localhost:8001'; // Puerto 8001 confirmado

export default {
  async login(username, password) {
    try {
      const response = await axios.get(`${API_URL}/users?username=${username}&password=${password}`);

      if (response.data.length > 0) {
        const user = response.data[0];
        localStorage.setItem('user', JSON.stringify(user)); // Guarda el objeto completo del usuario
        return { success: true, user: user };
      }
      return { success: false, message: 'Usuario o contraseña incorrectos' };
    } catch (error) {
      console.error('Error en el servicio de login:', error);
      throw new Error('Error al intentar iniciar sesión. Inténtalo de nuevo más tarde.');
    }
  },

  logout() {
    localStorage.removeItem('user');
  },

  isAuthenticated() {
    return !!localStorage.getItem('user');
  },

  getCurrentUser() {
    const userJson = localStorage.getItem('user'); // Corregido de 'users' a 'user'
    return userJson ? JSON.parse(userJson) : null;
  },

  // Método específico para obtener el rol, más conveniente
  getCurrentUserRole() {
    const user = this.getCurrentUser(); // Ya no necesita 'user' como argumento
    return user ? user.role : null;
  }
};