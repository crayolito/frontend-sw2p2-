import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
    children: [
      {
        path: 'page-alojamiento',
        title: 'ALOJAMIENTO',
        loadComponent: () =>
          import(
            './home/pages/alojamiento/alojamiento.component'
          ),
      },
      {
        path: 'page-turismo',
        title: 'TURISMO',
        loadComponent: () =>
          import(
            './home/pages/turismo/turismo.component'
          ),
      },
      {
        path: 'page-vuelo',
        title: 'VUELO',
        loadComponent: () =>
          import(
            './home/pages/vuelo/vuelo.component'
          ),
      },
      {
        path: 'search-result-alojamiento',
        title: 'SEARCH RESULT ALOJAMIENTO',
        loadComponent: () =>
          import(
            './home/pages/search-result-alojamiento/search-result-alojamiento.component'
          ),
      },
      {
        path: '', redirectTo: '/page-alojamiento', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: '/page-alojamiento', pathMatch: 'full'
      },
    ]
  },
  {
    path: 'auth',
    loadComponent: () => import('./authentication/authentication.component'),
    children: [
      {
        path: 'login',
        title: 'LOGIN',
        loadComponent: () =>
          import(
            './authentication/login/login.component'
          ),
      },
      {
        path: 'registro',
        title: 'REGISTER',
        loadComponent: () =>
          import(
            './authentication/registre/registre.component'
          ),
      },
      {
        path: '', redirectTo: 'login', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: 'login', pathMatch: 'full'
      }
    ]
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.component'),
    children: [
      {
        path: 'offer',
        title: 'OFERTA',
        loadComponent: () =>
          import(
            './dashboard/pages/offer/offer.component'
          ),
      },
      {
        path: 'offers-list',
        title: 'LISTA OFERTAS',
        loadComponent: () =>
          import(
            './dashboard/pages/offers-list/offers-list.component'
          ),
      },
      {
        path: 'payment-list',
        title: 'LISTA PAGOS',
        loadComponent: () =>
          import(
            './dashboard/pages/payment-list/payment-list.component'
          ),
      },
      {
        path: 'perfil',
        title: 'PERFIL',
        loadComponent: () =>
          import(
            './dashboard/pages/perfil/perfil.component'
          ),
      },
      {
        path: '', redirectTo: '/offers-list', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: '/offers-list', pathMatch: 'full'
      },
    ]
  },
  {
    path: 'service-offering',
    loadComponent: () => import('./serviciosPayments/offers/offers.component').then(m => m.default)
  },
  {
    path: 'payments',
    loadComponent: () => import('./serviciosPayments/payments/payments.component').then(m => m.default)
  },
  {
    path: 'payments/success',
    loadComponent: () => import('./serviciosPayments/success/success.component').then(m => m.default)
  },
  { path: '', redirectTo: '/home/page-alojamiento', pathMatch: 'full' },
  { path: '**', redirectTo: '/home/page-alojamiento', pathMatch: 'full' },

];
