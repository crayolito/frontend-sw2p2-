import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { PerfilService } from '../dashboard/pages/perfil/perfil.service';

// NOTE: ESTADO CUANDO ESTA YA AUTENTICADO
export enum StatusAuthenticated { viajero, agenciaAerolinea, agenciaTurismo, agenciaAlojamiento, none }

// NOTE: ESTADO CUANDO ESTA EN EL PROCESO DE AUTENTICACION
export enum StatusAuthenticating { login, registro, none }

export class AuthUser {
  id: string;
  email: string;
  password: string;
  role: string;

  constructor(id: string, email: string, password: string, role: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public statusAuthenticated = signal<StatusAuthenticated>(StatusAuthenticated.none);
  public statusAuthenticating = signal<StatusAuthenticating>(StatusAuthenticating.none);
  // NOTE: DATOS USUARIO AUTENTICADO
  public http = inject(HttpClient);
  public router = inject(Router);
  public userAuth = signal<AuthUser>(new AuthUser("", "", "", ""));
  public confirmacionAuth = signal<boolean>(false);
  public perfilService = inject(PerfilService);
  private apiUrl_rest = environment.apiUrl_rest;


  procesarFormularioResgistro(email: string, password: string, role: string): Observable<any> {
    var name: string = email.split("@")[0];
    const data = {
      name: `${name}`,
      email: `${email}`,
      password: `${password}`,
      role: `${role}`,
    };
    // console.log({ data });

    return this.http.post(`${this.apiUrl_rest}/register`, data).pipe(
      catchError(error => {
        console.error('Ocurrió un error durante el registro:', error);
        return throwError(error);
      }),
      map((response: any) => response['id'])
    );
  }

  procesarFormularioLogin(email: string, password: string): Observable<any> {
    const data = {
      email: `${email}`,
      password: `${password}`,
    };

    return this.http.post(`${this.apiUrl_rest}/login`, data).pipe(
      catchError(error => {
        console.error('Ocurrió un error durante Inicio Sesion:', error);
        return throwError(error);
      }),
    );
  }


  constructor() {

  }

  cerrarSession(): void {
    if (typeof window !== 'undefined' && 'localStorage' in window && localStorage.getItem('userId') !== null) {
      localStorage.removeItem('userId');
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userPassword');
      localStorage.removeItem('userRole');
      localStorage.removeItem('ofertaEnEdicion');
      localStorage.removeItem('agenciaAlojamientoId');
    }
    this.confirmacionAuth.set(false);
  }
}
