import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  AuthService,
  AuthUser,
  StatusAuthenticated,
} from '../authentication/authentication.service';
import {
  PerfilService
} from './pages/perfil/perfil.service';
import {
  DashboardService,
  DashboardStatus,
} from './servicio-dashboard.service';

export class NavBarDashboard {
  icono: string;
  ruta: string;
  titulo: string;
  estado: DashboardStatus;

  constructor(
    titulo: string,
    icono: string,
    ruta: string,
    estado: DashboardStatus
  ) {
    this.icono = icono;
    this.ruta = ruta;
    this.estado = estado;
    this.titulo = titulo;
  }
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export default class DashboardComponent implements OnInit {
  public dashboardService = inject(DashboardService);
  public router = inject(Router);
  public authService = inject(AuthService);
  public perfilService = inject(PerfilService);

  public optionsDashboard: NavBarDashboard[] = [
    new NavBarDashboard(
      'Perfil',
      'assets/perfilEmpresa.svg',
      '/dashboard/perfil',
      DashboardStatus.perfilCR
    ),
    new NavBarDashboard(
      'Ofertas',
      'assets/iconoOfertaServicio.svg',
      '/dashboard/offers-list',
      DashboardStatus.offersListCRUD
    ),
    new NavBarDashboard(
      'Pagos',
      'assets/payments.svg',
      '/dashboard/payment-list',
      DashboardStatus.payments
    ),
    new NavBarDashboard(
      'Analisis',
      'assets/analisis.svg',
      '/dashboard/perfil',
      DashboardStatus.analisis
    ),
  ];

  informacionUsuario(): AuthUser {
    return this.dashboardService.informacionUsuario();
  }

  getStatusDashboard() {
    return this.dashboardService.getStatusDashboard();
  }

  redireccionarPage(value: string, ruta: string) {
    switch (value) {
      case 'Ofertas':
        this.dashboardService.updateStatusDashboard(
          DashboardStatus.offersListCRUD
        );
        break;
      case 'Perfil':
        this.dashboardService.updateStatusDashboard(DashboardStatus.perfilCR);
        break;
      case 'Pagos':
        this.dashboardService.updateStatusDashboard(DashboardStatus.payments);
        break;
      case 'Oferta':
        this.dashboardService.updateStatusDashboard(DashboardStatus.offerCR);
        break;
      case 'Analisis':
        this.dashboardService.updateStatusDashboard(DashboardStatus.perfilCR);
        window.open('https://bi-sw2-p2-xbrsc99ypyn5eyob7a5xqm.streamlit.app/');
        break;
      default:
        break;
    }
    this.router.navigate([ruta]);
  }

  cerrarSesion() {
    this.authService.cerrarSession();
    this.router.navigate(['/home/page-alojamiento']);
  }

  ngOnInit(): void {
    switch (this.router.url) {
      case '/dashboard/perfil':
        this.dashboardService.updateStatusDashboard(DashboardStatus.perfilCR);
        break;
      case '/dashboard/offers-list':
        this.dashboardService.updateStatusDashboard(
          DashboardStatus.offersListCRUD
        );
        break;
      case '/dashboard/offer':
        this.dashboardService.updateStatusDashboard(
          DashboardStatus.offersListCRUD
        );
        break;
      case '/dashboard/payment-list':
        this.dashboardService.updateStatusDashboard(DashboardStatus.payments);
        break;
    }
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem('userId') !== null) {
        // READ : Verificar si el usuario ya está autenticado
        this.authService.userAuth.set(
          new AuthUser(
            localStorage.getItem('userId')!,
            localStorage.getItem('userEmail')!,
            localStorage.getItem('userPassword')!,
            localStorage.getItem('userRole')!
          )
        );
        this.authService.confirmacionAuth.set(true);
        if (this.authService.userAuth().role === 'Viajero') {
          this.authService.statusAuthenticated.set(StatusAuthenticated.viajero);
        }
        if (this.authService.userAuth().role === 'Encargado Alojamiento') {
          this.authService.statusAuthenticated.set(
            StatusAuthenticated.agenciaAlojamiento
          );
        }
      }
    } else {
      this.router.navigate(['/home/page-alojamiento']);
    }
  }
}
