import { Component, inject, OnInit } from '@angular/core';
import { PaymentsListService } from './payments-list.service';

export class PaymentOferta {
  public id: number;
  public tituloOferta: string;
  public fechayhoraPago: string;
  public metodoPago: string;
  public monto: number;

  constructor(id: number, tituloOferta: string, fechayhoraPago: string, metodoPago: string, monto: number) {
    this.id = id;
    this.tituloOferta = tituloOferta;
    this.fechayhoraPago = fechayhoraPago;
    this.metodoPago = metodoPago;
    this.monto = monto;
  }
}

@Component({
  selector: 'app-payment-list',
  standalone: true,
  imports: [],
  templateUrl: './payment-list.component.html',
  styleUrl: './payment-list.component.css'
})
export default class PaymentListComponent implements OnInit {
  public paymentsListService = inject(PaymentsListService);
  public viewPaymentsLista: PaymentOferta[] = [];

  nextElementos(): void {
    // READ :  lista.slice(nroDev,nroNormal);
    // READ : saber cuando elementos es nroNormal-nroDev
    var aux1 = this.viewPaymentsLista[this.viewPaymentsLista.length - 1];
    var aux2 = this.paymentsListService.paymentList().indexOf(aux1);
    let aux3: number = 0;

    if ((aux2 + 1) + 7 > this.paymentsListService.paymentList().length) {
      aux3 = (aux2 + 1) - this.paymentsListService.paymentList().length;
      if (aux3 != 0) {
        this.viewPaymentsLista = this.paymentsListService.paymentList().slice(aux3);
      }
      return;
    }
    this.viewPaymentsLista = this.paymentsListService.paymentList().slice(aux2 + 1, (aux2 + 1) + 7);
  }



  backElementos(): void {
    var aux1 = this.viewPaymentsLista[0];
    var aux2 = this.paymentsListService.paymentList().indexOf(aux1);
    var aux3 = aux2 - 7;
    if (aux3 >= 0) {
      console.log("entro back");
      this.viewPaymentsLista = this.paymentsListService.paymentList().slice(aux2 - 7, aux2);
    }
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      if (localStorage.getItem('agenciaAlojamientoId') !== null) {
        var idAlojamiento: string = localStorage.getItem('agenciaAlojamientoId')!;
        this.paymentsListService.getTodosPagosAgencia(idAlojamiento).subscribe(
          (data: PaymentOferta[]) => {
            this.paymentsListService.paymentList.set(data);
            console.log(this.paymentsListService.paymentList());
            this.viewPaymentsLista = this.paymentsListService.paymentList().slice(0, 7);
          },
          error => {
            console.error('Hubo un error al obtener los pagos de la agencia:', error);
          }
        );
      }
    }
  }


}
