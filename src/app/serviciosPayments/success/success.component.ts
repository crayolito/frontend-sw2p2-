import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { jsPDF } from "jspdf";
import { ElementoBusqueda } from '../../home/pages/search-result-alojamiento/search-result-alojamiento.component';
import { PaymentStripeService } from '../../services/payment-stripe.service';
@Component({
  selector: 'app-success',
  standalone: true,
  imports: [],
  templateUrl: './success.component.html',
  styleUrl: './success.component.css'
})
export default class SuccessComponent implements OnInit {
  public paymentStripeService = inject(PaymentStripeService);
  public router = inject(Router);
  public tipoVenta: string = "";
  public elementoBusqueda: ElementoBusqueda | null = null;
  public diasEstancia: number = 0;
  public precioNoche: number = 0;
  public precioTotal: number = 0;
  public descuento: number = 0;
  public idViajero: string = "";

  descargarPDF(): void {
    if (this.tipoVenta == "habitacion") {
      this.paymentStripeService.crearComprobantePagoAgencia(
        this.elementoBusqueda?.tituloOferta!,
        this.precioTotal,
        this.idViajero,
        this.elementoBusqueda?.idAgencia!
      );
      this.paymentStripeService.generarFormularioViajero(
        this.idViajero,
        this.elementoBusqueda?.nombreEmpresa!
      )
      this.pdfHabitacion();
      this.router.navigate(['/']);
      return;
    }

    if (this.tipoVenta == 'ServicioPremium') {
      this.pdfServicioPermium();
      this.router.navigate(['/']);
      return;
    }

    if (this.tipoVenta == 'ServicioOnPremises') {
      this.pdfServicioOnPremises();
      this.router.navigate(['/']);
      return;
    }
  }


  pdfServicioPermium(): void {
    let doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('GRACIAS POR SU COMPRA DISFRUTE NUESTRO SERVICIOS', 10, 20);
    doc.setFontSize(12);
    doc.text('REGISTRESE CON ESTE CODIGO DE COLABORADOR', 10, 30);
    doc.text('- jjass_1s1o3f6t1w3a0r6e2024', 10, 40);
    doc.save('suscripcion_premium.pdf');
  }

  pdfServicioOnPremises(): void {
    let doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('GRACIAS POR SU COMPRA DISFRUTE NUESTRO SERVICIOS', 10, 20);
    doc.setFontSize(12);
    doc.text('DOCKERHUB_FRONTEND:', 10, 30);
    doc.text('https://hub.docker.com/repository/docker/crayolito/frontend-p2sw2-docker/general', 10, 40);
    doc.text('DOCKERHUB_BACKEND:', 10, 50);
    doc.text('https://hub.docker.com/repository/docker/guidosv7/springboot-sw2/general', 10, 60);
    doc.save('onPermises_servicie.pdf');
  }

  pdfHabitacion(): void {
    let doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('COMPROBANTE DE OFERTA COMPRADA', 10, 10);
    doc.setFontSize(12);
    doc.text('Alojamiento: ' + this.elementoBusqueda?.nombreEmpresa, 10, 20);
    doc.text('Ubicacion: ' + this.elementoBusqueda?.ubicacionDescriptiva, 10, 30);
    doc.text('Coordenadas: ' + this.elementoBusqueda?.ubicacionCoordenadas, 10, 40);
    doc.text('Paquete: ' + this.elementoBusqueda?.tituloOferta, 10, 50);
    doc.text('Dias Estancia: ' + this.diasEstancia, 10, 60);
    doc.text('Precio x Noche: ' + this.precioNoche, 10, 70);
    doc.text('Cobro Total: ' + this.precioTotal, 10, 80);
    doc.text('Descuento: ' + this.descuento, 10, 90);
    doc.text('CVOP: ' + "cvop_o2f0e2r4t0a6", 10, 100);
    doc.save('Comprobante.pdf');
  }


  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      let venta: string = localStorage.getItem('venta')!;
      this.tipoVenta = venta;
      if (venta == 'habitacion') {
        this.elementoBusqueda = JSON.parse(localStorage.getItem('elementoVenta')!);
        this.diasEstancia = JSON.parse(localStorage.getItem('diasEstancia')!);
        this.precioNoche = JSON.parse(localStorage.getItem('precioNoche')!);
        this.precioTotal = JSON.parse(localStorage.getItem('precioTotal')!);
        this.descuento = JSON.parse(localStorage.getItem('descuento')!);
        this.idViajero = localStorage.getItem('userId')!;
        return;
      }
    }
  }

}
