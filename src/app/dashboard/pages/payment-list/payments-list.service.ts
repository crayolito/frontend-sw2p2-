import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, OnInit, signal } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { PaymentOferta } from './payment-list.component';

@Injectable({
  providedIn: 'root'
})
export class PaymentsListService implements OnInit {
  public http = inject(HttpClient);
  private paymentApiUrl = environment.apiURL_payment;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  public paymentList = signal<PaymentOferta[]>([]);


  getTodosPagosAgencia(idAlojamiento: string): Observable<PaymentOferta[]> {
    return this.http
      .get<any[]>(`${this.paymentApiUrl}/accomodation/${idAlojamiento}`)
      .pipe(
        map(data => data.map(item => new PaymentOferta(
          item.id,
          item.titleOffert,
          item.paymentDate,
          item.paymentMethod,
          item.amount
        ))),
        catchError(error => {
          console.error('Hubo un error al obtener los pagos de la agencia:', error);
          return throwError(error);
        })
      )
  }


  ngOnInit(): void {

  }

}
