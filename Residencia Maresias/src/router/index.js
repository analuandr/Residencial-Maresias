import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    // Sempre rola para o topo da página após navegação
    return { left: 0, top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    // Página geral do residencial
    {
      path: '/residencial',
      name: 'residencial',
      component: () => import('../views/ResidencialView.vue'),
    },
    // Páginas de "O Residencial"
    {
      path: '/residencial/bombas',
      name: 'residencial-bombas',
      component: () => import('../views/residencial/BombasView.vue'),
    },
    {
      path: '/residencial/mariscal',
      name: 'residencial-mariscal',
      component: () => import('../views/residencial/MariscalView.vue'),
    },
    {
      path: '/residencial/casa-jaboticabeira',
      name: 'residencial-casa-jaboticabeira',
      component: () => import('../views/residencial/CasaJaboticabeiraView.vue'),
    },
    // Páginas de "Acomodações" para Bombas
    {
      path: '/acomodacoes/bombas/1-dormitorio',
      name: 'acomodacoes-bombas-1-dormitorio',
      component: () => import('../views/acomodacoes/bombas/UmDormitorioView.vue'),
    },
    {
      path: '/acomodacoes/bombas/2-dormitorios',
      name: 'acomodacoes-bombas-2-dormitorios',
      component: () => import('../views/acomodacoes/bombas/DoisDormitoriosView.vue'),
    },
    // Páginas de "Acomodações" para Mariscal
    {
      path: '/acomodacoes/mariscal/1-dormitorio',
      name: 'acomodacoes-mariscal-1-dormitorio',
      component: () => import('../views/acomodacoes/mariscal/UmDormitorioView.vue'),
    },
    {
      path: '/acomodacoes/mariscal/2-dormitorios',
      name: 'acomodacoes-mariscal-2-dormitorios',
      component: () => import('../views/acomodacoes/mariscal/DoisDormitoriosView.vue'),
    },
    // Página de "Acomodações" para Casa Jaboticabeira
    {
      path: '/acomodacoes/casa-jaboticabeira/3-dormitorios',
      name: 'acomodacoes-casa-jaboticabeira-3-dormitorios',
      component: () => import('../views/acomodacoes/casa-jaboticabeira/TresDormitoriosView.vue'),
    },
    // Páginas de "As Praias"
    {
      path: '/praias/bombas',
      name: 'praias-bombas',
      component: () => import('../views/praias/BombasView.vue'),
    },
    {
      path: '/praias/mariscal',
      name: 'praias-mariscal',
      component: () => import('../views/praias/MariscalView.vue'),
    },
    // Página de "Contato"
    {
      path: '/contato',
      name: 'contato',
      component: () => import('../views/ContatoView.vue'),
    },
    // Página de "About" (informações sobre o site)
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
