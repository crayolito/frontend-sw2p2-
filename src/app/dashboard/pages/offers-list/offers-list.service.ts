import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, map, throwError, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Oferta } from '../offer/offer.service';
import { PerfilService } from '../perfil/perfil.service';

@Injectable({
  providedIn: 'root',
})
export class OffersListService {
  public perfilService = inject(PerfilService);
  private apiUrlGraphql = environment.apiUrl_graphql;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public http = inject(HttpClient);
  public ofertaLista = signal<Oferta[]>([]);
  public getOfertasAgenciAlojamiento(idAgencia: string): Observable<any> {
    console.log(idAgencia);
    const data = {
      query: `
      query {
   findOffersByAccomodationId(accomodationId: "${idAgencia}") {
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
`
    };

   return  this.http.post(this.apiUrlGraphql, data, { headers: this.headers }).pipe(
      map((response: any) => {
        // Asegúrate de que la respuesta tiene la estructura esperada
        if (response && response.data && Array.isArray(response.data.findOffersByAccomodationId)) {
          return response.data.findOffersByAccomodationId.map((oferta: any) => {
            return new Oferta(
              oferta.id,
              oferta.title,
              oferta.price,
              oferta.discount,
              oferta.imageUrl,
              oferta.beds,
              oferta.descriptionServices,
              oferta.typeRoom,
              oferta.state,
            );
          });
        } else {
          // Si la respuesta no tiene la estructura esperada, lanza un error
          throw new Error('La respuesta del servidor no tiene la estructura esperada');
        }
      }),
      catchError((error) => {
        console.error('Ocurrió un error al obtener las ofertas:', error);
        return throwError(error);
      })

    )
  }

  ofertaEditada(ofertaMoficada: Oferta): void {
    let indice = this.ofertaLista().findIndex(
      (oferta) => oferta.id === ofertaMoficada.id
    );
    this.ofertaLista()[indice] = ofertaMoficada;
  }

  constructor() {
    
  }
}
