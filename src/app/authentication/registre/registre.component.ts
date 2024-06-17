import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { environment } from '../../../environments/environment';
import { PerfilService } from '../../dashboard/pages/perfil/perfil.service';
import { AuthService } from '../authentication.service';

@Component({
  selector: 'app-registre',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registre.component.html',
  styleUrl: './registre.component.css'
})
export default class RegistreComponent {
  inputColaborador = signal<boolean>(false);
  public formBuilder = inject(FormBuilder);
  public authService = inject(AuthService);
  public perfilService = inject(PerfilService);
  public router = inject(Router);
  public apiUrl_rest = environment.apiUrl_rest;

  // NOTE: FORMULARIO DE INICIO SESION
  public myFormRegistro: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required]],
    password1: ['', [Validators.required, Validators.minLength(8)]],
    password2: ['', [Validators.required, Validators.minLength(8)]],
    estatus: ['', [Validators.required]],
    codigo: ['jjass_1s1o3f6t1w3a0r6e2024', [Validators.minLength(10)]]
  });

  updateInputColaborador(value: boolean): void {
    this.inputColaborador.set(value);
  }

  updateEstatus(value: string): void {
    this.myFormRegistro.get('estatus')!.setValue(value);
    if (value.includes("Viajero")) {
      this.inputColaborador.set(false);
    } else {
      this.inputColaborador.set(true);
    }
  }

  estatus: string[] = [
    "Viajero",
    "Encargado Aerolinea",
    "Encargado Alojamiento",
    "Encargado Turismo"
  ]

  procesarFormulario() {
    if (this.myFormRegistro.invalid) return;
    if (this.myFormRegistro.value.password1 !== this.myFormRegistro.value.password2) return;
    // if (!(this.inputColaborador() == true && this.myFormRegistro.value.codigo == "jjass_1s1o3f6t1w3a0r6e2024")) return;
    const formValues = this.myFormRegistro.value;
    this.authService.procesarFormularioResgistro(formValues.email, formValues.password1, formValues.estatus)
      .subscribe((id) => {
        console.log('Registro exitoso:', id);
        this.router.navigate(['/auth/login']);
        if (this.myFormRegistro.value.estatus == "Encargado Alojamiento") {
          this.perfilService.crearEsquemaAgenciaAlojamiento(id);
        }
      });
  }
}
