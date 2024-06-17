import { Component } from '@angular/core';

export class PaymentOferta {
  public id: number;
  public tituloOferta : string;
  public fechayhoraPago : string;
  public metodoPago : string;
  public monto : number;

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
export default class PaymentListComponent {

}
