<template>
  <v-container fluid class="pa-4">
    <v-card class="mx-auto mb-6" max-width="1200" elevation="6" rounded="lg"></v-card>
    <v-toolbar color="indigo" density="compact" flat>
      <v-icon size="28" class="ml-4 mr-2">mdi-account-plus</v-icon>
      <v-toolbar-title class="font-weight-bold">
        Formulario de Gestión de Usuarios
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <!-- Sección de Creación/Edición de Usuario -->
    <template v-if="canManageUsers">
      <v-form ref="form" class="mt-3" @submit.prevent="guardarUsuario">
        <v-card class="pa-4 ma-4" outlined>
          <v-card-title class="text-h5">{{ editingUser.id ? 'Editar Usuario' : 'Registrar Nuevo Usuario' }}</v-card-title>
          <v-card-text>
            <!-- Campo de Email -->
            <v-text-field
              v-model="usuario.email"
              label="Email"
              prepend-inner-icon="mdi-email"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :rules="[rules.required, rules.email]"
            />

            <!-- Campo de Nombre -->
            <v-text-field
              v-model="usuario.nombre"
              label="Nombre Completo"
              prepend-inner-icon="mdi-account"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :rules="[rules.required]"
            />

            <!-- Campo de User Name -->
            <v-text-field
              v-model="usuario.username"
              label="Nombre de Usuario"
              prepend-inner-icon="mdi-account-circle"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :rules="[rules.required]"
            />

            <!-- Campo de Password (solo requerido si no se está editando o si se cambia) -->
            <v-text-field
              v-model="usuario.password"
              label="Password"
              prepend-inner-icon="mdi-lock"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              type="password"
              :rules="editingUser.id ? [] : [rules.required, rules.min]"
              hint="Deja en blanco para mantener la contraseña actual al editar."
            />

            <!-- Selector de Rol -->
            <v-select
              v-model="usuario.role"
              :items="availableRoles"
              label="Seleccionar Rol"
              prepend-inner-icon="mdi-badge-account"
              variant="outlined"
              density="comfortable"
              class="mb-3"
              :rules="[rules.required]"
              :disabled="!canChangeRole()"
            ></v-select>
             <p v-if="!canChangeRole() && editingUser.id" class="text-caption text-error">
                No puedes cambiar el rol de un administrador o de otro secretario.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              type="submit"
              color="primary"
              size="large"
              block
              :loading="loading"
            >
              <v-icon left class="mr-2">{{ editingUser.id ? 'mdi-content-save' : 'mdi-account-plus' }}</v-icon>
              {{ editingUser.id ? 'Actualizar Usuario' : 'Guardar Nuevo Usuario' }}
            </v-btn>
            <v-btn
              v-if="editingUser.id"
              color="grey-darken-1"
              size="large"
              block
              @click="cancelEdit"
              class="mt-2"
            >
              <v-icon left class="mr-2">mdi-cancel</v-icon>
              Cancelar Edición
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </template>

    <!-- Mensaje de acceso denegado para el formulario -->
    <v-card v-else class="pa-4 ma-4 text-center" outlined>
      <v-icon size="64" color="error">mdi-alert-octagon</v-icon>
      <h2 class="mt-4">Acceso Denegado</h2>
      <p class="mt-2">Solo los administradores y secretarios pueden gestionar usuarios.</p>
    </v-card>

    <!-- Sección de Lista de Usuarios Registrados -->
    <template v-if="canManageUsers">
      <v-divider class="my-6"></v-divider>
      <v-toolbar color="grey-lighten-2" density="compact" flat>
        <v-icon size="28" class="ml-4 mr-2">mdi-account-group</v-icon>
        <v-toolbar-title class="font-weight-bold">
          Usuarios Registrados
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <v-row class="mt-4">
        <v-col
          v-for="user in users"
          :key="user.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <v-card class="user-card" elevation="2" rounded="md">
            <v-card-title class="d-flex align-center">
              <v-icon left class="mr-2">mdi-account-circle</v-icon>
              {{ user.nombre }}
              <v-spacer></v-spacer>
              <v-chip
                :color="getRoleColor(user.role)"
                label
                size="small"
              >
                {{ user.role }}
                <v-icon v-if="user.id === currentUserId" right size="small">mdi-badge-account-horizontal</v-icon>
              </v-chip>
            </v-card-title>
            <v-card-subtitle>{{ user.email }}</v-card-subtitle>
            <v-card-text>
              <p><strong>Usuario:</strong> {{ user.username }}</p>
              <p v-if="user.id === currentUserId" class="text-caption text-indigo-darken-3 font-weight-bold mt-1">
                (Tú, Usuario Actual)
              </p>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                icon
                color="primary"
                size="small"
                @click="editUser(user)"
                :disabled="!canEditUser(user)"
                title="Editar"
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                color="error"
                size="small"
                @click="confirmDeleteUser(user)"
                :disabled="!canDeleteUser(user)"
                title="Eliminar"
              >
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </template>

    <!-- Diálogo de confirmación de eliminación -->
    <v-dialog v-model="deleteDialog" max-width="500">
      <v-card>
        <v-card-title class="text-h5">Confirmar Eliminación</v-card-title>
        <v-card-text>
          ¿Estás seguro de que quieres eliminar al usuario
          <strong>{{ userToDelete?.nombre }}</strong>? Esta acción no se puede
          deshacer.
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="grey-darken-1" text @click="deleteDialog = false">Cancelar</v-btn>
          <v-btn color="error" text @click="deleteUser">Eliminar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- Snackbar para mensajes -->
    <v-snackbar
      v-model="snackbar.show"
      :color="snackbar.color"
      :timeout="snackbar.timeout"
    >
      {{ snackbar.message }}
      <template v-slot:actions>
        <v-btn color="white" variant="text" @click="snackbar.show = false">
          Cerrar
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import usuarioservice from '@/services/usuarioservice';
import authService from '@/services/authservice';
// import { useAuthStore } from '@/store/auth'; // Si usas Pinia para la sesión global

// Datos del formulario para el nuevo/edición de usuario
const usuario = reactive({
  id: null,
  username: '',
  password: '',
  email: '',
  nombre: '',
  role: null, // Usamos 'role' para coincidir con db2.json
});

// Usuario que se está editando (vacío si es nuevo)
const editingUser = reactive({
  id: null,
});

// Referencia al formulario para validación
const form = ref(null);
const loading = ref(false); // Para el estado de carga del botón

// Lista de usuarios registrados
const users = ref([]);

// Roles posibles
const allPossibleRoles = ref(['administrador', 'secretario', 'docente', 'estudiante']);

// Rol del usuario actualmente logueado
const currentUserRole = ref(null);
const currentUserId = ref(null); // ID del usuario logueado

// Opciones de roles disponibles para el selector
const availableRoles = computed(() => {
  // Un secretario solo puede crear Docentes y Estudiantes
  if (currentUserRole.value === 'secretario') {
    return ['docente', 'estudiante'];
  }
  // Un administrador puede ver todos los roles
  if (currentUserRole.value === 'administrador') {
    return allPossibleRoles.value;
  }
  return []; // Si no tiene permisos, no hay roles para seleccionar
});

// Determina si el usuario logueado tiene permiso para gestionar (crear/editar/eliminar) usuarios
const canManageUsers = computed(() => {
  const allowedRoles = ['administrador', 'secretario'];
  return allowedRoles.includes(currentUserRole.value);
});

// Diálogo de confirmación de eliminación
const deleteDialog = ref(false);
const userToDelete = ref(null);

// Snackbar para notificaciones
const snackbar = reactive({
  show: false,
  message: '',
  color: '',
  timeout: 3000,
});

// Reglas de validación
const rules = {
  required: value => !!value || 'Campo requerido.',
  email: value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Email inválido.';
  },
  min: value => (value && value.length >= 6) || 'Mínimo 6 caracteres',
};

// Se ejecuta cuando el componente se monta para obtener el rol del usuario y cargar usuarios
onMounted(async () => {
  const currentUser = authService.getCurrentUser();
  currentUserRole.value = currentUser ? currentUser.role : null; // Leer 'role'
  currentUserId.value = currentUser ? currentUser.id : null;
  await fetchUsers();
});

// Función para obtener todos los usuarios
const fetchUsers = async () => {
  try {
    users.value = await usuarioservice.getUsers();
  } catch (error) {
    console.error('Error al cargar usuarios:', error);
    showSnackbar('Error al cargar usuarios.', 'error');
  }
};

// Función para determinar el color del chip de rol
const getRoleColor = (role) => {
  switch (role) {
    case 'administrador':
      return 'red-darken-2';
    case 'secretario':
      return 'blue-darken-2';
    case 'docente':
      return 'green-darken-2';
    case 'estudiante':
      return 'orange-darken-2';
    default:
      return 'grey';
  }
};

// ** LÓGICA DE NEGOCIO PARA GUARDAR USUARIO (CREAR/ACTUALIZAR) **
const guardarUsuario = async () => {
  if (!canManageUsers.value) {
    showSnackbar('No tienes permiso para realizar esta acción.', 'error');
    return;
  }

  // Verifica si un secretario está intentando editar un rol prohibido (Admin o Secretario)
  if (editingUser.id && currentUserRole.value === 'secretario' && !canChangeRole()) {
    showSnackbar('Un secretario no puede modificar roles de administrador o de otros secretarios.', 'error');
    return;
  }

  const { valid } = await form.value.validate();

  if (valid) {
    loading.value = true;
    try {
      if (editingUser.id) {
        // Lógica para actualizar usuario
        const updatedUser = { ...usuario };
        // Si la contraseña está vacía, la eliminamos del objeto a enviar
        if (updatedUser.password === '') {
          delete updatedUser.password;
        }
        await usuarioservice.updateUser(editingUser.id, updatedUser);
        showSnackbar('Usuario actualizado con éxito!', 'success');
      } else {
        // Lógica para crear nuevo usuario
        await usuarioservice.registerUser(usuario);
        showSnackbar('Usuario registrado con éxito!', 'success');
      }

      // Limpiar formulario y estado de edición
      resetForm();
      await fetchUsers(); // Recargar la lista de usuarios
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
      showSnackbar('Hubo un error al guardar el usuario.', 'error');
    } finally {
      loading.value = false;
    }
  } else {
    showSnackbar('Por favor, completa todos los campos correctamente.', 'warning');
  }
};

// Función para determinar si el rol puede ser cambiado por el usuario logueado
const canChangeRole = () => {
    if (currentUserRole.value === 'administrador') return true;
    
    // Si es secretario y está editando, no puede cambiar el rol de Admin o Secretario
    if (editingUser.id && currentUserRole.value === 'secretario') {
      const userBeingEdited = users.value.find(u => u.id === editingUser.id);
      if (userBeingEdited && (userBeingEdited.role === 'administrador' || userBeingEdited.role === 'secretario')) {
        // Devuelve false si intenta cambiar el rol de un usuario con permisos elevados
        return false; 
      }
    }
    // Si está creando, un secretario solo puede asignar Docente/Estudiante
    return true; 
}


// Función para cargar los datos de un usuario al formulario para edición
const editUser = (user) => {
  if (!canEditUser(user)) {
    showSnackbar('No tienes permisos para editar este usuario.', 'error');
    return;
  }

  Object.assign(editingUser, user); // Copiar el usuario completo a editingUser
  // Cargar datos al formulario, vaciando password
  Object.assign(usuario, { ...user, password: '' }); 
  window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll al inicio para el formulario
};


// Función para cancelar la edición y limpiar el formulario
const cancelEdit = () => {
  resetForm();
};

// Reinicia el formulario
const resetForm = () => {
  Object.assign(usuario, {
    id: null,
    username: '',
    password: '',
    email: '',
    nombre: '',
    role: null,
  });
  Object.assign(editingUser, { id: null }); // Restablecer el estado de edición
  if (form.value) {
    form.value.resetValidation();
  }
};

// Función para mostrar el diálogo de confirmación de eliminación
const confirmDeleteUser = (user) => {
  if (!canDeleteUser(user)) {
    showSnackbar('No tienes permisos para eliminar este usuario.', 'error');
    return;
  }

  userToDelete.value = user;
  deleteDialog.value = true;
};

// ** LÓGICA DE NEGOCIO PARA ELIMINAR USUARIO **
const deleteUser = async () => {
  if (!userToDelete.value) {
    deleteDialog.value = false;
    return;
  }
  
  if (!canDeleteUser(userToDelete.value)) {
    showSnackbar('No tienes permiso para realizar esta acción.', 'error');
    deleteDialog.value = false;
    return;
  }

  loading.value = true;
  try {
    await usuarioservice.deleteUser(userToDelete.value.id);
    showSnackbar('Usuario eliminado con éxito!', 'success');
    await fetchUsers(); // Recargar la lista de usuarios
  } catch (error) {
    console.error('Error al eliminar usuario:', error);
    showSnackbar('Hubo un error al eliminar el usuario.', 'error');
  } finally {
    loading.value = false;
    deleteDialog.value = false;
    userToDelete.value = null;
  }
};

// Función para determinar si el usuario logueado puede editar un usuario específico
const canEditUser = (user) => {
  // Nadie puede editarse a sí mismo (para evitar problemas de sesión/rol)
  if (user.id === currentUserId.value) {
    return false; 
  }

  // Un administrador puede editar a cualquiera (excepto a sí mismo)
  if (currentUserRole.value === 'administrador') {
    return true;
  }

  // Un secretario solo puede editar docentes y estudiantes (y no a sí mismo)
  if (currentUserRole.value === 'secretario') {
    const editableRoles = ['docente', 'estudiante'];
    return editableRoles.includes(user.role);
  }
  
  return false; 
};

// Función para determinar si el usuario logueado puede eliminar un usuario específico
const canDeleteUser = (user) => {
  // REGLA: NADIE PUEDE ELIMINARSE A SÍ MISMO
  if (user.id === currentUserId.value) {
    return false;
  }

  // Un administrador puede eliminar a cualquiera (excepto a sí mismo)
  if (currentUserRole.value === 'administrador') {
    return true;
  }

  // REGLA: Un secretario no puede eliminar a administradores o a otros secretarios
  if (currentUserRole.value === 'secretario') {
    const deletableRoles = ['docente', 'estudiante'];
    return deletableRoles.includes(user.role);
  }
  
  return false; 
};

// Función para mostrar el snackbar
const showSnackbar = (message, color = 'info', timeout = 3000) => {
  snackbar.message = message;
  snackbar.color = color;
  snackbar.timeout = timeout;
  snackbar.show = true;
};
</script>

<style scoped>
.user-card {
  transition: transform 0.2s ease-in-out;
}
.user-card:hover {
  transform: translateY(-5px);
}
</style>