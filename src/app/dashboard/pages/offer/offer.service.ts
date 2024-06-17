import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

export class Oferta {
  constructor(
    public id: string,
    public titulo: string,
    public precio: number,
    public descuento: number,
    public imagen: string,
    public cantidad_camas: number,
    public descripcionServicios: string,
    public tipoHabitaciones: string[],
    public estado: string
  ) { }
}

export enum statusOffer {
  Crear,
  Editar,
  Ninguno,
}

@Injectable({
  providedIn: 'root',
})
export class OfferService {
  // public statusOffer: statusOffer = statusOffer.Ninguno;
  // public useOffer: Oferta = new Oferta('', '', 0, 0, '', 0, '', []);
  public statusOffer = signal<statusOffer>(statusOffer.Ninguno,
  );
  public http = inject(HttpClient);
  private apiUrlGraphql = environment.apiUrl_graphql;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public objectOffer = signal<Oferta>(
    new Oferta('', '', 0, 0, '', 0, '', [], '')
  );

  procesarOfertaCreada(oferta: Oferta, idAgencia: String): Observable<Oferta> {
    const data = {
      query: `
mutation{
  createOffer(inputOffer: {
    idAccomodation: "${idAgencia}"
    title: "${oferta.titulo}",
    price: ${oferta.precio},
    discount: ${oferta.descuento},
    imageUrl: "${oferta.imagen}",
    beds: ${oferta.cantidad_camas},
    descriptionServices: "${oferta.descripcionServicios}",
    typeRoom: ${JSON.stringify(oferta.tipoHabitaciones)},
    state: "${oferta.estado}",
  }) {
    id
    title
    price
    discount
    imageUrl
    beds
    descriptionServices
    typeRoom
    state
    idAccomodation
  }
}
      `,
    };

    return this.http
      .post(this.apiUrlGraphql, data, { headers: this.headers })
      .pipe(
        map((response: any) => {
          if (response && response.data && response.data.createOffer) {
            var ofertaData = response.data.createOffer;
            return new Oferta(
              ofertaData.id,
              ofertaData.title,
              ofertaData.price,
              ofertaData.discount,
              ofertaData.imageUrl,
              ofertaData.beds,
              ofertaData.descriptionServices,
              ofertaData.typeRoom,
              ofertaData.state
            );
          } else {
            throw new Error(
              'La respuesta del servidor no tiene la estructura esperada'
            );
          }
        })
      );
  }

  procesarOfertaEditada(oferta: Oferta): Observable<Oferta> {
    const data = {
      query: `
mutation MyMutation {
  updateOffer(
    inputOffer: {
    title: "${oferta.titulo}",
    price: ${oferta.precio},
    discount: ${oferta.descuento},
    imageUrl: "${oferta.imagen}",
    beds: ${oferta.cantidad_camas},
    descriptionServices: "${oferta.descripcionServicios}",
    typeRoom: ${JSON.stringify(oferta.tipoHabitaciones)},
    state: "${oferta.estado}"
    }
    offerId: "${oferta.id}"
  ) {
    id,
    title,
    price,
    discount,
    imageUrl,
    beds,
    descriptionServices,
    typeRoom,
    state,
    idAccomodation
  }
}
      `,
    };

    return this.http
      .post(this.apiUrlGraphql, data, { headers: this.headers })
      .pipe(
        map((response: any) => {
          if (response && response.data && response.data.updateOffer) {
            var ofertaData = response.data.updateOffer;
            return new Oferta(
              ofertaData.id,
              ofertaData.title,
              ofertaData.price,
              ofertaData.discount,
              ofertaData.imageUrl,
              ofertaData.beds,
              ofertaData.descriptionServices,
              ofertaData.typeRoom,
              ofertaData.state
            );
          } else {
            console.log(response);
            throw new Error("LA RESPUESTA DEL BACKED NO ES LA INDICADA");
          }
        })
      );
  }

  constructor() { }
}
