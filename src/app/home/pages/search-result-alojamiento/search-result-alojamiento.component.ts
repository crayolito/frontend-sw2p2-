import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OffersListService } from '../../../dashboard/pages/offers-list/offers-list.service';
import { PerfilService } from '../../../dashboard/pages/perfil/perfil.service';
import { PaymentStripeService } from '../../../services/payment-stripe.service';
import { AlojamientoSBS, SearchBarService } from '../../components/search-bar/search-bar.service';
import { HomeService } from '../../servicio-home.service';

export class ElementoBusqueda {
  constructor(
    // READ : informacion de la oferta
    public idOferta: string,
    public tituloOferta: string,
    public imageOferta: string,
    public precio: number,
    public descuento: number,
    public tipoHabitaciones: string[],
    public descripcionServiciosOferta: string,
    public estado: string,
    // READ : informacion de la Agencia
    public idAgencia: string,
    public nombreEmpresa: string,
    public estrellas: number,
    public descripcionServiciosAgencia: string,
    public ubicacionCoordenadas: string,
    public ubicacionDescriptiva: string
  ) {
  }
}


@Component({
  selector: 'app-search-result-alojamiento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-result-alojamiento.component.html',
  styleUrl: './search-result-alojamiento.component.css'
})
export default class SearchResultAlojamientoComponent implements OnInit {

  public offersListService = inject(OffersListService);
  public paymentStripeService = inject(PaymentStripeService);
  public perfilService = inject(PerfilService);
  public homeService = inject(HomeService);
  public datosBusquedaCliente: AlojamientoSBS | null = null;
  public searchBarService = inject(SearchBarService);
  public originalDataOfertas: ElementoBusqueda[] = [];
  public auxDataOfertas: ElementoBusqueda[] = [];
  public viewOfertasLista: ElementoBusqueda[] = [];
  public requisitosCliente: String[] = [];

  applyRequisito(requisito: string): void {
    const index = this.requisitosCliente.indexOf(requisito);
    if (index !== -1) {
      // Si el requisito ya está presente, lo quitamos
      this.requisitosCliente.splice(index, 1);
    } else {
      // Si el requisito no está presente, lo agregamos
      this.requisitosCliente.push(requisito);
    }
    if (this.requisitosCliente.length === 0) {
      this.auxDataOfertas = this.originalDataOfertas;
      this.viewOfertasLista = this.auxDataOfertas.slice(0, 9);
      return;
    }

    this.viewOfertasLista = this.auxDataOfertas.filter((oferta) => {
      return this.requisitosCliente.every((requisito) => {
        return oferta.descripcionServiciosAgencia.toLowerCase().includes(requisito.toLowerCase()) || oferta.descripcionServiciosOferta.toLowerCase().includes(requisito.toLowerCase());
      });
    })
    console.log(this.requisitosCliente);
  }

  pagoTotal(precio: number, noches: number, descuento: number): number {
    let totalSinDescuento = precio * noches;
    let totalConDescuento = totalSinDescuento * (1 - descuento / 100);
    // console.log(parseFloat((totalConDescuento / 10).toFixed(2)));
    return parseFloat((totalConDescuento / 10).toFixed(2));
  }

  procesarPago(
    // NOTE : DATOS PARA GENERAR LA VENTA
    oferta: ElementoBusqueda,
    titulo: string,
    price: number,
    quantity: number,
    image: string,
    // NOTE : DATOS PARA GENERAR EL COMPROBANTE
    noches: number,
    precioNoche: number,
    descuento: number
  ): void {
    let totalSinDescuento = precioNoche * noches;
    let totalConDescuento = totalSinDescuento * (1 - descuento / 100);
    let precioTotal = parseFloat((totalConDescuento).toFixed(2));
    localStorage.setItem('elementoVenta', JSON.stringify(oferta));
    localStorage.setItem('diasEstancia', JSON.stringify(noches));
    localStorage.setItem('precioNoche', JSON.stringify(precioNoche));
    localStorage.setItem('precioTotal', JSON.stringify(precioTotal));
    localStorage.setItem('descuento', JSON.stringify(descuento));
    localStorage.setItem('venta', 'habitacion');
    this.paymentStripeService.procesarPago(titulo, price, quantity, image);
  }

  public categoriaAlojamiento: number[] = [1, 2, 3, 4, 5];

  public serviciosPopulares: string[] = [
    "Piscina",
    "Wi-Fi gratuito",
    "Desayuno Incluido",
    "Estacionamiento",
    "Admiten Mascotas",
    "Bar",
    "Gimnasio",
    "Restaurante",
    "Ascensor",
    "Servicio Habitación",
    "Traslado aeropuerto",
  ];

  public serviciosOtros: string[] = [
    "Sauna",
    "Spa y centro bienestar",
    "Plan de Tours",
    "Espacios Deportivos",
    "Zona Diversión",
    "Jardín",
    "Tienda de regalos",
    "Zona de barbacoa",
    "Terraza solárium",
  ];

  public serviciosHabitacion: string[] = [
    "Aire Acondicionado ",
    "Cocina",
    "Baño Privado",
    "Piscina Privada",
    "Lavadora",
    "Balcon ",
    "Nevera",
    "Terraza",
    "TV y WC",
    "Microondas",
    "Lavavajillas ",
    "Secador de Pelo",
    "Utensilios Cocina ",
    "Sofa ",
    "Minibar",
    "Cafetera y tetera",
  ];

  nextElementos(): void {
    // READ :  lista.slice(nroDev,nroNormal);
    // READ : saber cuando elementos es nroNormal-nroDev
    var aux1 = this.viewOfertasLista[this.viewOfertasLista.length - 1];
    var aux2 = this.auxDataOfertas.indexOf(aux1);
    let aux3: number = 0;
    console.log({
      a: this.auxDataOfertas,
      b: this.viewOfertasLista,
      aux1,
      aux2,

    }
    );
    if ((aux2 + 1) + 9 > this.auxDataOfertas.length) {
      aux3 = (aux2 + 1) - this.auxDataOfertas.length;
      if (aux3 != 0) {
        this.viewOfertasLista = this.auxDataOfertas.slice(aux3);
        console.log(this.auxDataOfertas.slice(aux3));
      }
      return;
    }
    this.viewOfertasLista = this.auxDataOfertas.slice(aux2 + 1, (aux2 + 1) + 9);
  }


  backElementos(): void {
    var aux1 = this.viewOfertasLista[0];
    var aux2 = this.auxDataOfertas.indexOf(aux1);
    var aux3 = aux2 - 7;
    if (aux3 >= 0) {
      console.log("entro back");
      this.viewOfertasLista = this.auxDataOfertas.slice(aux2 - 9, aux2);
    }
  }

  getArray(n: number): number[] {
    return Array(n);
  }

  // desayunoIncluido(): boolean {
  //   return this.perfilService.desayunoIncluido();
  // }

  verificarServicio(servicio: string, descripcion: string): boolean {
    return descripcion.toLowerCase().includes(servicio.toLowerCase());
  }

  ngOnInit(): void {
    this.datosBusquedaCliente = this.searchBarService.getDatosSearchBarAlojamiento();
    this.homeService.obtenerOfertasVenta().subscribe(
      (ofertasBusqueda: ElementoBusqueda[]) => {
        // console.log(ofertasBusqueda);
        this.originalDataOfertas = ofertasBusqueda;
        this.auxDataOfertas = ofertasBusqueda;
        this.viewOfertasLista = this.auxDataOfertas.slice(0, 9);
      },
      (error) => {
        console.error('Ocurrió un error al obtener las ofertas:', error);
      }
    )
  }
}


