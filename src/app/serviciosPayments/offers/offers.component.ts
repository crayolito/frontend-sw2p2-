import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentStripeService } from '../../services/payment-stripe.service';

export class Subcripcion {
  titulo: string;
  icono: string;
  estado: StatusSubcripcion;
  descripcion: string;
  caracteristicas: string[];

  constructor(titulo: string, icono: string, estado: StatusSubcripcion, descripcion: string, caracteristicas: string[]) {
    this.titulo = titulo;
    this.icono = icono;
    this.estado = estado;
    this.descripcion = descripcion;
    this.caracteristicas = caracteristicas;
  }
}

export enum StatusSubcripcion { free, premium, onPremises, none }

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css'
})
export default class OffersComponent {
  public paymentStripeService = inject(PaymentStripeService);
  public router = inject(Router);
  public statusSubcripcion = signal<StatusSubcripcion>(StatusSubcripcion.none);
  supcricion1: Subcripcion = new Subcripcion(
    "Free",
    "assets/gratis.svg",
    StatusSubcripcion.free,
    "Accede a información detallada sobre viajes,alojamientos y atracciones turísticas sin costo alguno.",
    [
      "Información completa sobre destinos turísticos.",
      "Detalles de alojamientos (moteles y hoteles).",
      "Guía de atracciones turísticas.",
      "Herramientas avanzadas de búsqueda y filtrado."
    ]
  );

  supcricion2: Subcripcion = new Subcripcion(
    "Premium 349Bs/mes",
    "assets/subcripcion.svg",
    StatusSubcripcion.premium,

    "Publica y promociona tus servicios en una categoría: alojamientos, aerolíneas o atracciones turísticas. Ideal para aumentar tu visibilidad.",
    [
      "Publica hasta 100 servicios u ofertas en una categoría a elegir.",
      // "Informes sobre el rendimiento de tus publicaciones.",
      "Soporte prioritario y asistencia personalizada.",
      "Panel de control para información clave para mejorar tus decisiones y informes sobre publicaciones"
    ]
  );

  supcricion3: Subcripcion = new Subcripcion(
    "On-Primeses 2792Bs",
    "assets/on-premises.svg",
    StatusSubcripcion.onPremises,
    "Solución de software local para alojamientos. Gestiona todas tus operaciones desde tus propios servidores.",
    [
      "Instalación local mediante Docker.",
      "Registro Veloz",
      "Operaciones Optimizadas.",
      "Panel de control para información clave para mejorar tus decisiones"
    ]
  );

  supcripciones: Subcripcion[] = [
    this.supcricion1,
    this.supcricion2,
    this.supcricion3
  ];



  procesarPagoSeleccionado(select: Subcripcion) {
    switch (select.estado) {
      case StatusSubcripcion.free:
        this.statusSubcripcion.set(select.estado);
        this.router.navigate(['/home/page-alojamiento']);
        return;
      case StatusSubcripcion.premium:
        this.statusSubcripcion.set(select.estado);
        localStorage.setItem('venta', 'ServicioPremium');
        this.paymentStripeService.procesarPago(
          select.titulo,
          34.9,
          1,
          'https://res.cloudinary.com/da9xsfose/image/upload/v1718291613/e7vj1snjneklw97nnnot.png'
        );
        this.router.navigate(['/auth/registro']);
        break;
      case StatusSubcripcion.onPremises:
        this.statusSubcripcion.set(select.estado);
        localStorage.setItem('venta', 'ServicioOnPremises');
        this.paymentStripeService.procesarPago(
          select.titulo,
          279.2,
          1,
          'https://res.cloudinary.com/da9xsfose/image/upload/v1718291633/q5wjgt0rbaneds2ohwkh.png'
        );
        this.router.navigate(['/home/page-alojamiento']);
        break;
      default:
        break;
    }
  }
}
