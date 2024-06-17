import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  AgenciaAlojamiento,
  PerfilService,
  PerfilStatus,
} from './perfil.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export default class PerfilComponent implements OnInit {
  public perfilService = inject(PerfilService);
  public http = inject(HttpClient);
  public formBuilder = inject(FormBuilder);
  // READ : ESTADO DE IMAGEN Y URL DE IMAGEN
  public imageEmpresa = signal<string>('assets/subirImagen.png');
  public estadoImagen = signal<boolean>(false);
  // READ : VECTOR DE TIPOS DE HABITACIONES
  public tiposHabitacion: string[] = [];
  // READ : ESTADO BUTTON SUBMIT
  public textButtonForm = signal<string>('Editar');

  statusPerfil(): PerfilStatus {
    return this.perfilService.statusPerfil();
  }

  updateStatusPerfil(status: PerfilStatus): void {
    this.perfilService.updateStatusPerfil(status);
  }

  getDataAlojamiento(): AgenciaAlojamiento {
    return this.perfilService.agenciaAlojamiento();
  }

  isVerPerfil(): boolean {
    return this.statusPerfil() === PerfilStatus.Ver;
  }

  isEditarPerfil(): boolean {
    return this.statusPerfil() === PerfilStatus.Editar;
  }

  addTipoHabitacion(): void {
    if (this.statusPerfil() === PerfilStatus.Ver) return;
    let tipoHabitacion = this.myPerfilEmpresa.value.tipoHabitacion;
    this.tiposHabitacion.push(tipoHabitacion);
    this.myPerfilEmpresa.controls['tipoHabitacion'].setValue('');
  }

  borrarTiposHabitacion(index: number): void {
    this.tiposHabitacion.splice(index, 1);
  }

  onFileSelected(event: any) {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      this.uploadToCloudinary(file);
    }
  }
  uploadToCloudinary(file: any) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'fqw7ooma');
    data.append('cloud_name', 'da9xsfose');

    this.http
      .post(`https://api.cloudinary.com/v1_1/da9xsfose/image/upload`, data)
      .subscribe({
        next: (response: any) => {
          this.imageEmpresa.set(response.secure_url);
          this.estadoImagen.set(true);
        },
        error: (e: any) => {
          console.log(e);
        },
      });
  }

  public myPerfilEmpresa: FormGroup = this.formBuilder.group({
    nombreEmpresa: [{ value: '', disabled: true }, [Validators.required]],
    nombreDueño: ['', [Validators.required]],
    horarioAtencion: ['', [Validators.required]],
    numeroAtencion: [0, [Validators.required]],
    ubicacionCoordenadas: ['', [Validators.required]],
    ubicacionDescriptiva: ['', [Validators.required]],
    cantidadHabitaciones: [0, [Validators.required]],
    descripcionServicios: ['', [Validators.required]],
    tipoHabitacion: ['', [Validators.required]],
    enlaceIG: ['', [Validators.required]],
    enlaceFB: ['', [Validators.required]],
    enlaceWEB: ['', [Validators.required]],
  });

  porcesarFormularioEditado(): void {
    if (this.statusPerfil() == PerfilStatus.Ver) {
      this.updateStatusPerfil(PerfilStatus.Editar);
      this.myPerfilEmpresa.enable();
      this.textButtonForm.set('Guardar');
      return;
    } else {
      this.updateStatusPerfil(PerfilStatus.Ver);
      this.myPerfilEmpresa.disable();
      this.textButtonForm.set('Editar');
    }

    let {
      nombreEmpresa,
      nombreDueño,
      horarioAtencion,
      numeroAtencion,
      ubicacionCoordenadas,
      ubicacionDescriptiva,
      cantidadHabitaciones,
      descripcionServicios,
      enlaceIG,
      enlaceFB,
      enlaceWEB,
    } = this.myPerfilEmpresa.value;

    let agenciaEdita: AgenciaAlojamiento = new AgenciaAlojamiento(
      this.getDataAlojamiento().id,
      nombreEmpresa,
      nombreDueño,
      this.imageEmpresa(),
      horarioAtencion,
      numeroAtencion,
      ubicacionCoordenadas,
      ubicacionDescriptiva,
      cantidadHabitaciones,
      descripcionServicios,
      this.tiposHabitacion,
      enlaceIG,
      enlaceFB,
      enlaceWEB
    );

    if (this.estadoImagen() == false) {
      this.perfilService.editarPerfilAgenciaALojamiento(
        agenciaEdita,
        '',
        this.tiposHabitacion
      );
    } else {
      this.perfilService.editarPerfilAgenciaALojamiento(
        agenciaEdita,
        this.imageEmpresa(),
        this.tiposHabitacion
      );
    }
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem('userId') !== null) {
        // READ : INICIALIZAR LOS DATOS DEL PERFIL DE LA AGENCIA DE ALOJAMIENTO
        var agenciaAlojamientoId: string = localStorage.getItem('userId')!;
        this.perfilService
          .traerAgenciaAlojamientodelCliente(agenciaAlojamientoId)
          .subscribe((agencia: AgenciaAlojamiento) => {
            this.perfilService.updateAgenciaAlojamiento(agencia);

            let {
              id,
              nombreEmpresa,
              owner,
              imagen,
              horarioAtencion,
              nroAtencion,
              ubicacionCoordenadas,
              ubicacionDescriptiva,
              cantidadEstrellas,
              serviciosGenerales,
              instagram,
              facebook,
              web,
            } = this.perfilService.agenciaAlojamiento();

            // READ : DESABILITAR FORMULARIO
            this.myPerfilEmpresa.disable();
            // NOTE : INICIALIZAR FORMULARIO
            // READ : DAR VALOR IMAGEN
            if (imagen !== '') {
              this.estadoImagen.set(true);
              this.imageEmpresa.set(imagen);
            }
            // READ: DAR VALOR A TIPOS DE HABITACIONES
            this.tiposHabitacion = this.getDataAlojamiento().tipoHabitaciones;
            // READ: DAR VALORES AL RESTO DEL FORMULARIO
            this.myPerfilEmpresa.setValue({
              nombreEmpresa: nombreEmpresa,
              nombreDueño: owner,
              horarioAtencion: horarioAtencion,
              numeroAtencion: nroAtencion,
              ubicacionCoordenadas: ubicacionCoordenadas,
              ubicacionDescriptiva: ubicacionDescriptiva,
              cantidadHabitaciones: cantidadEstrellas,
              descripcionServicios: serviciosGenerales,
              tipoHabitacion: '',
              enlaceIG: instagram,
              enlaceFB: facebook,
              enlaceWEB: web,
            });
          });
      }else{
        
      }
    }
  }
}
