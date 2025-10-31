import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/index.vue'
import Dashboard from '@/pages/dashboard/dashboard.vue'
import Registro from '@/pages/dashboard/registro.vue'
import Matricula from '@/pages/dashboard/matricula.vue'
import Calificaciones from '@/pages/dashboard/calificaciones.vue'
import Anuncios from '@/pages/dashboard/anuncios.vue'
import Calendario from '@/pages/dashboard/calendario.vue'
import Ayuda from '@/pages/dashboard/ayuda.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: { title: 'Inicio' }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
     children: [
      { 
            path: '', 
            component: Registro 
      },
      { path: 'registro', 
        component: Registro 
      },
      { path: 'matricula', 
        component: Matricula
      },
      { path: 'calificaciones', 
        component: Calificaciones
      },
      { path: 'anuncios', 
        component: Anuncios
      },
      { path: 'calendario', 
        component: Calendario
      },
      { path: 'ayuda', 
        component: Ayuda
      },
    ]
   
  },
 
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

// Guard global
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Registro'
  
  if (to.meta.requiresAuth) {
    const isAuthenticated = false
    if (!isAuthenticated) {
      alert('Debes iniciar sesión')
      next('/')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router