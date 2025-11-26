import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
// Se asume que estos se importan desde donde se definen, por ejemplo, '@/config/auth.config'
// Como no proporcionaste '@/config/auth.config', asumiré que son alias para métodos de authservice.js
import authService from '@/services/authservice' 


export const useAuthStore = defineStore('auth', () => {
  // Estado
  const user = ref(authService.getCurrentUser()) // Inicializar con sesión existente si hay
  const isAuthenticated = ref(authService.isAuthenticated())
  const loading = ref(false)
  const error = ref(null)

  // Computed
  // CORRECCIÓN: Usar 'role' que es el campo correcto del objeto de usuario en db2.json
  const userRole = computed(() => user.value?.role || null) 
  const userName = computed(() => user.value?.username || '')
  const userEmail = computed(() => user.value?.email || '')
  
  // CORRECCIÓN: Estandarizar los nombres de roles
  const isAdmin = computed(() => userRole.value === 'administrador')
  const isCoordinador = computed(() => userRole.value === 'coordinador')
  const isDocente = computed(() => userRole.value === 'docente')
  const isSecretario = computed(() => userRole.value === 'secretario')
  const isAcudiente = computed(() => userRole.value === 'acudiente')

  // Actions
  const loginUser = async (credentials) => {
    loading.value = true
    error.value = null
    
    try {
      // Usar el servicio de autenticación directamente
      const response = await authService.login(credentials.username, credentials.password)
      
      if (response.success) {
        user.value = response.user
        isAuthenticated.value = true
        return { success: true }
      } else {
        error.value = response.message
        return { success: false, message: response.message }
      }
    } catch (err) {
      error.value = err.message || 'Error al iniciar sesión'
      return { success: false, message: error.value }
    } finally {
      loading.value = false
    }
  }

  const logoutUser = async () => {
    loading.value = true
    
    try {
      authService.logout()
      user.value = null
      isAuthenticated.value = false
      return true
    } catch (err) {
      console.error('Error al cerrar sesión:', err)
      return false
    } finally {
      loading.value = false
    }
  }

  const verifySession = async () => {
    // Verificar si hay datos en localStorage
    const currentUser = authService.getCurrentUser()
    
    if (currentUser) {
      user.value = currentUser
      isAuthenticated.value = true
      return true
    } else {
      user.value = null
      isAuthenticated.value = false
      return false
    }
    // No se usa loading.value aquí para evitar que se vea el spinner al cargar la página
  }

  const updateUser = (userData) => {
    if (user.value) {
      user.value = { ...user.value, ...userData }
      // Actualizar localStorage después de la actualización local
      localStorage.setItem('user', JSON.stringify(user.value))
    }
  }

  const clearError = () => {
    error.value = null
  }

  const reset = () => {
    user.value = null
    isAuthenticated.value = false
    loading.value = false
    error.value = null
  }

  // Verificar permisos
  const hasPermission = (permission) => {
    const role = userRole.value;
    
    // CORRECCIÓN: Mapeo de roles estandarizados
    const permissions = {
      'usuarios.crear': ['administrador', 'secretario'],
      'usuarios.editar': ['administrador', 'secretario'],
      'usuarios.eliminar': ['administrador', 'secretario'],
      'usuarios.ver': ['administrador', 'coordinador', 'secretario'],
      
      'estudiantes.crear': ['administrador', 'coordinador', 'secretario'],
      'estudiantes.editar': ['administrador', 'coordinador', 'secretario'],
      'estudiantes.eliminar': ['administrador'],
      'estudiantes.ver': ['administrador', 'coordinador', 'secretario', 'docente'],
      
      'docentes.crear': ['administrador', 'coordinador'],
      'docentes.editar': ['administrador', 'coordinador'],
      'docentes.eliminar': ['administrador'],
      'docentes.ver': ['administrador', 'coordinador', 'secretario'],
      
      'notas.crear': ['administrador', 'coordinador', 'docente'],
      'notas.editar': ['administrador', 'coordinador', 'docente'],
      'notas.eliminar': ['administrador', 'coordinador'],
      'notas.ver': ['administrador', 'coordinador', 'docente', 'acudiente'],
      
      'matriculas.crear': ['administrador', 'coordinador', 'secretario'],
      'matriculas.editar': ['administrador', 'coordinador', 'secretario'],
      'matriculas.eliminar': ['administrador'],
      'matriculas.ver': ['administrador', 'coordinador', 'secretario'],
      
      'reportes.ver': ['administrador', 'coordinador'],
      'reportes.exportar': ['administrador', 'coordinador', 'secretario']
    }
    
    const allowedRoles = permissions[permission] || []
    return allowedRoles.includes(role)
  }

  const hasAnyPermission = (permissionsList) => {
    return permissionsList.some(permission => hasPermission(permission))
  }

  const hasAllPermissions = (permissionsList) => {
    return permissionsList.every(permission => hasPermission(permission))
  }

  return {
    // State
    user,
    isAuthenticated,
    loading,
    error,
    // Computed
    userRole,
    userName,
    userEmail,
    isAdmin,
    isCoordinador,
    isDocente,
    isSecretario,
    isAcudiente,
    // Actions
    loginUser,
    logoutUser,
    verifySession,
    updateUser,
    clearError,
    reset,
    hasPermission,
    hasAnyPermission,
    hasAllPermissions
  }
})