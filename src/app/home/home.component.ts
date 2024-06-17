import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService, AuthUser, StatusAuthenticated } from '../authentication/authentication.service';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeService, HomeStatus } from './servicio-home.service';



export class OptionNavegation {
  icono: string;
  titulo: string;
  ruta: string;

  constructor(icono: string, titulo: string, ruta: string) {
    this.icono = icono;
    this.titulo = titulo;
    this.ruta = ruta;
  }

}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SearchBarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent implements OnInit {
  public homeService = inject(HomeService);
  public router = inject(Router);
  public authService = inject(AuthService);
  public titulo1 = signal("Encuentra tu proximo destino");
  public titulo2 = signal("Busca ofertas en hoteles, casa y mucho mas...");

  constructor() {
  }
  ngOnInit(): void {
    // Verificar si el usuario ya está autenticado
    if (typeof window !== 'undefined' && 'localStorage' in window && localStorage.getItem('userId') !== null) {
      this.authService.userAuth.set(
        new AuthUser(
          localStorage.getItem('userId')!,
          localStorage.getItem('userEmail')!,
          localStorage.getItem('userPassword')!,
          localStorage.getItem('userRole')!
        )
      );

      this.authService.confirmacionAuth.set(true);
      if (this.authService.userAuth().role === "Viajero") {
        this.authService.statusAuthenticated.set(StatusAuthenticated.viajero);
      }
      if (this.authService.userAuth().role === "Encargado Alojamiento") {
        this.authService.statusAuthenticated.set(StatusAuthenticated.agenciaAlojamiento);
      }
    }
  }

  cerrarSesion() {
    this.authService.cerrarSession();
    this.authService.confirmacionAuth.set(false);
    location.reload();
  }

  public opcionesHome: OptionNavegation[] = [
    new OptionNavegation(
      "assets/alojamiento.svg", "Alojamiento", "/home/page-alojamiento"
    ),
    new OptionNavegation(
      "assets/vuelo.svg", "Vuelos", "/home/page-vuelo"
    ),
    new OptionNavegation(
      "assets/atraccion-turistica.svg", "Atraccion Turisticas", "/home/page-turismo"
    ),
    new OptionNavegation(
      "assets/servicios.svg", "Servicios", "/home/service-offering"
    )
  ]

  isLogin() {
    return this.authService.confirmacionAuth();
  }

  quienLogin() {
    return this.authService.userAuth();
  }

  isAlojamiento(): boolean {
    return this.homeService.isAlojamiento();
  }

  isVuelos(): boolean {
    return this.homeService.isVuelos();
  }

  isAtraccionTurismo(): boolean {
    return this.homeService.isAtraccionTurismo();
  }

  isNone(): boolean {
    return this.homeService.isNone();
  }

  redireccionarPage(value: string) {
    switch (value) {
      case "Alojamiento":
        this.router.navigate(['/home/page-alojamiento']);
        this.titulo1.set("Encuentra tu proximo destino");
        this.titulo2.set("Busca ofertas en hoteles, casa y mucho mas...");
        this.homeService.updateStatusPage(HomeStatus.Alojamiento);
        break;
      case "Vuelos":
        this.router.navigate(['/home/page-vuelo']);
        this.titulo1.set("Encuentra tu próximo vuelo");
        this.titulo2.set("Busca ofertas en vuelos entre Bolivia y Peru...");
        this.homeService.updateStatusPage(HomeStatus.Vuelos);
        break;
      case "Atraccion Turisticas":
        this.router.navigate(['/home/page-turismo']);
        this.titulo1.set("Actividades y Experiencias");
        this.titulo2.set("Descubre nuevas atracciones y experiencias en Bolivia y Peru...");
        this.homeService.updateStatusPage(HomeStatus.AtraccionTurismo);
        break;
      default:
        this.router.navigate(['/service-offering']);
        break;
    }
  }
}
