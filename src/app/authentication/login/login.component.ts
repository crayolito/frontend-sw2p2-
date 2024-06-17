import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AgenciaAlojamiento, PerfilService } from '../../dashboard/pages/perfil/perfil.service';
import { AuthService, AuthUser, StatusAuthenticated, StatusAuthenticating } from '../authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  public authService = inject(AuthService);
  public perfilService = inject(PerfilService);
  public router = inject(Router);


  constructor() {
    this.authService.statusAuthenticating.set(StatusAuthenticating.login);
  }

  public formBuilder = inject(FormBuilder);


  // NOTE : FORMULARIO de INICIO SESION
  public myFormLogin: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required,]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  procesarFormularioLogin() {
    const email = this.myFormLogin.controls['email'].value;
    const password = this.myFormLogin.controls['password'].value;
    // NOTE : ENVIAR DATOS AL SERVER DE LOGIN
    this.authService.procesarFormularioLogin(email, password).subscribe((response) => {

      this.authService.userAuth.set(
        new AuthUser(
          response['id'],
          response['email'],
          response['password'],
          response['role']
        )
      );
      if (this.authService.userAuth().role === "Viajero") {
        this.authService.statusAuthenticated.set(StatusAuthenticated.viajero);
        this.authService.confirmacionAuth.set(true);
        this.router.navigate(['/home/page-alojamiento']);
      }

      if (this.authService.userAuth().role === "Encargado Alojamiento") {
        this.authService.statusAuthenticated.set(StatusAuthenticated.agenciaAlojamiento);
        this.perfilService.traerAgenciaAlojamientodelCliente(this.authService.userAuth().id)
          .subscribe((agencia: AgenciaAlojamiento) => {
            localStorage.setItem('agenciaAlojamientoId', agencia.id);
            this.perfilService.updateAgenciaAlojamiento(agencia);
            this.router.navigate(['/dashboard/perfil']);
          });
      }


      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('userId', response['id']);
        localStorage.setItem('userEmail', response['email']);
        localStorage.setItem('userPassword', response['password']);
        localStorage.setItem('userRole', response['role']);
      }
    });
  }
}
