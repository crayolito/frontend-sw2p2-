import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { AuthService, AuthUser } from '../authentication/authentication.service';

// READ : CRUD (Create Read Update Delete)
export enum DashboardStatus { perfilCR, payments, offersListCRUD, offerCR, analisis }

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  public http = inject(HttpClient);
  public statusDashboard = signal<DashboardStatus>(DashboardStatus.perfilCR);
  public authService = inject(AuthService);

  informacionUsuario(): AuthUser {
    return this.authService.userAuth();
  }

  getStatusDashboard() {
    return this.statusDashboard();
  }

  updateStatusDashboard(status: DashboardStatus) {
    this.statusDashboard.set(status);
  }

  constructor() { }
}
