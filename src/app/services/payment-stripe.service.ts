import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentStripeService {
  private http = inject(HttpClient);
  private paymentApiUrl = environment.apiURL_payment;
  private apiUrlGraphql = environment.apiUrl_graphql;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private stripeKey = environment.stripeKey;
  constructor() { }

  procesarPago(titulo: string, price: number, quantity: number, image: string) {
    const body = {
      currency: 'BOB',
      items: [
        {
          name: titulo,
          price: price,
          quantity: quantity,
          image: image,
        },
      ],
    };

    return this.http
      .post(this.paymentApiUrl + '/create-payment-session', body)
      .pipe(
        map((res: any) => {
          // Extrae la URL de la respuesta
          const url = res.url;
          // Redirige al usuario a la URL
          window.location.href = url;
        })
      )
      .subscribe({
        error: (err) => console.error('Error', err),
      });
  }

  obtenerFechaPago(): string {
    let fecha = new Date();
    let dia = ('0' + fecha.getDate()).slice(-2);
    let mes = ('0' + (fecha.getMonth() + 1)).slice(-2);
    let año = fecha.getFullYear();
    let horas = ('0' + fecha.getHours()).slice(-2);
    let minutos = ('0' + fecha.getMinutes()).slice(-2);
    return `${dia}/${mes}/${año} ${horas}:${minutos}`;
  }

  crearComprobantePagoAgencia(
    tituloOferta: string,
    montoTotal: number,
    idViajero: string,
    idAlojamiento: string
  ): void {
    const data = {
      titleOffert: `${tituloOferta}`,
      paymentDate: `${this.obtenerFechaPago()}`,
      paymentMethod: 'Tarjeta Debito',
      amount: `${montoTotal}`,
      idUser: `${idViajero}`,
      accomodation: `${idAlojamiento}`,
    };

    this.http
      .post(this.paymentApiUrl, data)
      .pipe(
        map((res: any) => {
          console.log(res);
        }),
        catchError((error) => {
          // Maneja los errores aquí
          // console.error(error);
          return throwError(error);
        })
      )
      .subscribe(
        (data) => {
          // Los datos modificados están disponibles aquí
          console.log(data);
        },
        (error) => {
          // Los errores manejados en catchError se pueden manejar aquí
          console.error(error);
        }
      );
  }

  generarFormularioViajero(idViajetro: string, nombreAgencia: string): void {
    const data = {
      query: `mutation MyMutation {
  createOpinionForm(
    inputOpinionForm: {
         state: false,
    origin: "",
    destination: "",
    accommodationName: "${nombreAgencia}",
    tripOpinion: "",
    destinyOpinion: "",
    reasonTrip: "",
    idUser: "${idViajetro}"
        }
  ) {
    id  
  }
}`,
    };

    this.http
    this.http.post(this.apiUrlGraphql, data, { headers: this.headers }).subscribe({
      next: (response: any) => {
        console.log(response);
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
}
