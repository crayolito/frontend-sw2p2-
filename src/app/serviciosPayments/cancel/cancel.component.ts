import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cancel',
  standalone: true,
  imports: [],
  templateUrl: './cancel.component.html',
  styleUrl: './cancel.component.css'
})
export default class CancelComponent {
  public router = inject(Router);

  ejecutarCancelacionPago(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('elementoVenta');
      localStorage.removeItem('diasEstancia');
      localStorage.removeItem('precioNoche');
      localStorage.removeItem('precioTotal');
      localStorage.removeItem('descuento');
      localStorage.removeItem('venta');
    }
    this.router.navigate(['/']);
  }
}
