import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export enum PerfilStatus {
  Ver,
  Editar,
}

export class AgenciaAlojamiento {
  id: string;
  nombreEmpresa: string;
  owner: string;
  imagen: string;
  horarioAtencion: string;
  nroAtencion: number;
  ubicacionCoordenadas: string;
  ubicacionDescriptiva: string;
  cantidadEstrellas: number;
  serviciosGenerales: string;
  tipoHabitaciones: string[];
  instagram: string;
  facebook: string;
  web: string;

  constructor(
    id: string,
    nombreEmpresa: string,
    owner: string,
    imagen: string,
    horarioAtencion: string,
    nroAtencion: number,
    ubicacionCoordenadas: string,
    ubicacionDescriptiva: string,
    cantidadEstrellas: number,
    serviciosGenerales: string,
    tipoHabitaciones: string[],
    instagram: string,
    facebook: string,
    web: string
  ) {
    this.id = id;
    this.nombreEmpresa = nombreEmpresa;
    this.owner = owner;
    this.imagen = imagen;
    this.horarioAtencion = horarioAtencion;
    this.nroAtencion = nroAtencion;
    this.ubicacionCoordenadas = ubicacionCoordenadas;
    this.ubicacionDescriptiva = ubicacionDescriptiva;
    this.cantidadEstrellas = cantidadEstrellas;
    this.serviciosGenerales = serviciosGenerales;
    this.tipoHabitaciones = tipoHabitaciones;
    this.instagram = instagram;
    this.facebook = facebook;
    this.web = web;
  }
}

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  public http = inject(HttpClient);
  private apiUrlGraphql = environment.apiUrl_graphql;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public statusPerfil = signal<PerfilStatus>(PerfilStatus.Ver);
  public agenciaAlojamiento = signal<AgenciaAlojamiento>(
    new AgenciaAlojamiento("", '', '', '', '', 0, '', '', 0, '', [], '', '', '')
  );
  public desayunoIncluido = signal<boolean>(false);

  updateAgenciaAlojamiento(agencia: AgenciaAlojamiento) {
    this.agenciaAlojamiento.set(agencia);
    let str1 = 'Desayuno incluido';
    let str2 = agencia.serviciosGenerales;
    let resultado = str2.toLowerCase().includes(str1.toLowerCase());
    this.desayunoIncluido.set(resultado);
  }

  getAgenciaAlojamiento(): AgenciaAlojamiento {
    return this.agenciaAlojamiento();
  }

  updateStatusPerfil(status: PerfilStatus) {
    this.statusPerfil.set(status);
  }

  public editarPerfilAgenciaALojamiento(
    datosAgencia: AgenciaAlojamiento,
    image: string,
    tiposHabitacion: string[],
  ): void {
    const data = {
      query: `mutation {
              updateAccomodation(accomodationId: "${datosAgencia.id}",
                inputAccomodation:
                {
                company : "${datosAgencia.nombreEmpresa}",
                owner : "${datosAgencia.owner}",
                imageUrl : "${image}",
                schedule : "${datosAgencia.horarioAtencion}",
                attention_number: ${datosAgencia.nroAtencion},
                coordinates : "${datosAgencia.ubicacionCoordenadas}",
                description : "${datosAgencia.ubicacionDescriptiva}",
                stars: ${datosAgencia.cantidadEstrellas},
                description_services : "${datosAgencia.serviciosGenerales}",
                typeRoom : ${JSON.stringify(tiposHabitacion)},
                instagramUrl: "${datosAgencia.instagram}",
                facebookUrl: "${datosAgencia.facebook}",
                webUrl: "${datosAgencia.web}"
                }) {
                id,
                company,
                owner,
                imageUrl,
                schedule,
                attention_number,
                coordinates,
                description,
                stars,
                description_services,
                typeRoom,
                instagramUrl,
                facebookUrl,
                webUrl
              }
            }`,
    };
    this.http.post(this.apiUrlGraphql, data, { headers: this.headers }).subscribe({
      next: (response: any) => {
        console.log(response);
        console.log("SE EDITO SALIO TODO CORRECTO");
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public traerAgenciaAlojamientodelCliente(idUsuario: string): Observable<any> {
    const data = {
      query: `query {
  findAccomodationsByUserId(userId: "${idUsuario}") {
        id,
        company,
        owner,
        imageUrl,
        schedule,
        attention_number,
        coordinates,
        description,
        stars,
        description_services,
        typeRoom,
        instagramUrl,
        facebookUrl,
        webUrl
  }
}`,
    };

    return this.http
      .post(this.apiUrlGraphql, data, { headers: this.headers })
      .pipe(
        map((response: any) => {
          const agenciaData = response.data.findAccomodationsByUserId[0];
          const agencia: AgenciaAlojamiento = {
            id: agenciaData.id,
            nombreEmpresa: agenciaData.company,
            owner: agenciaData.owner,
            imagen: agenciaData.imageUrl,
            horarioAtencion: agenciaData.schedule,
            nroAtencion: agenciaData.attention_number,
            ubicacionCoordenadas: agenciaData.coordinates,
            ubicacionDescriptiva: agenciaData.description,
            cantidadEstrellas: agenciaData.stars,
            serviciosGenerales: agenciaData.description_services,
            tipoHabitaciones: agenciaData.typeRoom,
            instagram: agenciaData.instagramUrl,
            facebook: agenciaData.facebookUrl,
            web: agenciaData.webUrl,
          };
          return agencia;
        })
      );
  }

  public crearEsquemaAgenciaAlojamiento(idUsuario: string): void {
    const data = {
      query: `mutation {
  createAccomodation(inputAccomodation: {
    idUser: "${idUsuario}"
    company: "",
    owner: "",
    imageUrl: "",
    schedule: "",
    attention_number: 0,
    coordinates: "",
    description: "",
    stars:0,
    description_services: "Empieze a poner la informacion del Alojamiento",
    quantity: 0,
    typeRoom: [],
    instagramUrl: "",
    facebookUrl: "",
    webUrl: "",
  }) {
    id,
    company,
    owner,
    imageUrl,
    schedule,
    attention_number,
    coordinates,
    description,
    stars,
    description_services,
    typeRoom,
    instagramUrl,
    facebookUrl,
    webUrl
  }
}`,
    };
    this.http
      .post(this.apiUrlGraphql, data, { headers: this.headers })
      .subscribe({});
  }

  constructor() {

  }
}
