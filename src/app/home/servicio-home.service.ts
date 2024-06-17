import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { ElementoBusqueda } from './pages/search-result-alojamiento/search-result-alojamiento.component';

export enum HomeStatus {
  Alojamiento,
  Vuelos,
  AtraccionTurismo,
  none,
}

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  public statusPage = signal<HomeStatus>(HomeStatus.Alojamiento);
  private apiUrlGraphql = environment.apiUrl_graphql;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public http = inject(HttpClient);
  updateStatusPage(status: HomeStatus) {
    this.statusPage.set(status);
  }

  isAlojamiento(): boolean {
    return this.statusPage() == HomeStatus.Alojamiento;
  }

  isVuelos(): boolean {
    return this.statusPage() == HomeStatus.Vuelos;
  }

  isAtraccionTurismo(): boolean {
    return this.statusPage() == HomeStatus.AtraccionTurismo;
  }

  isNone(): boolean {
    return this.statusPage() == HomeStatus.none;
  }

  obtenerOfertasVenta(): Observable<any> {
    const data = {
      query: `
      query MyQuery {
  findAllOffers {
    id
    title
    imageUrl
    price
    discount
    typeRoom
    descriptionServices
    idAccomodation
    state
    accomodation {
      id
      company
      stars
      description_services
      coordinates
      description
    }
  }
}
      `,
    };

    return this.http
      .post(this.apiUrlGraphql, data, { headers: this.headers })
      .pipe(
        catchError((error) => {
          console.error('Ocurrió un error al obtener las ofertas:', error);
          return throwError(error);
        }),
        map((response: any) => {
          if (
            response &&
            response.data
            &&
            Array.isArray(response.data.findAllOffers)
          ) {
            // console.log(response);
            return response.data.findAllOffers.map((oferta: any) => {
              var aux = oferta.accomodation;
              return new ElementoBusqueda(
                oferta.id,
                oferta.title,
                oferta.imageUrl,
                oferta.price,
                oferta.discount,
                oferta.typeRoom,
                oferta.descriptionServices,
                oferta.state,
                aux.id,
                aux.company,
                aux.stars,
                aux.description_services,
                aux.coordinates,
                aux.description
              );
            });
          } else {
            // Si la respuesta no tiene la estructura esperada, lanza un error
            throw new Error(
              'La respuesta del servidor no tiene la estructura esperada'
            );
          }
        })
      );
  }
}
