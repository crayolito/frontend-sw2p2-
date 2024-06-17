import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Oferta, OfferService, statusOffer } from '../offer/offer.service';
import { PerfilService } from '../perfil/perfil.service';
import { OffersListService } from './offers-list.service';

@Component({
  selector: 'app-offers-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './offers-list.component.html',
  styleUrl: './offers-list.component.css',
})
export default class OffersListComponent implements OnInit {
  final = false;
  inicio = false;
  public offerService = inject(OfferService);
  public offersListService = inject(OffersListService);
  public perfilService = inject(PerfilService);
  public viewOfertasLista: Oferta[] = [];

  crearOferta(): void {
    this.offerService.statusOffer.set(statusOffer.Crear);
  }

  editarOferta(oferta: Oferta): void {
    // localStorage.removeItem('ofertaId-editar');
    localStorage.setItem('ofertaEnEdicion', JSON.stringify(oferta));
    this.offerService.statusOffer.set(statusOffer.Editar);
    // this.offerService.objectOffer.set(oferta);
  }

  nextElementos(): void {
    // READ :  lista.slice(nroDev,nroNormal);
    // READ : saber cuando elementos es nroNormal-nroDev
    var aux1 = this.viewOfertasLista[this.viewOfertasLista.length - 1];
    var aux2 = this.offersListService.ofertaLista().indexOf(aux1);
    let aux3: number = 0;

    if ((aux2 + 1) + 7 > this.offersListService.ofertaLista().length) {
      aux3 = (aux2 + 1) - this.offersListService.ofertaLista().length;
      if (aux3 != 0) {
        this.viewOfertasLista = this.offersListService.ofertaLista().slice(aux3);
      }
      return;
    }
    this.viewOfertasLista = this.offersListService.ofertaLista().slice(aux2 + 1, (aux2 + 1) + 7);
  }



  backElementos(): void {
    var aux1 = this.viewOfertasLista[0];
    var aux2 = this.offersListService.ofertaLista().indexOf(aux1);
    var aux3 = aux2 - 7;
    if (aux3 >= 0) {
      console.log("entro back");
      this.viewOfertasLista = this.offersListService.ofertaLista().slice(aux2 - 7, aux2);
    }
  }


  ngOnInit(): void {
    if (typeof window !== 'undefined' && 'localStorage' in window && localStorage.getItem('agenciaAlojamientoId') !== null) {
      var agenciaAlojamientoId: string = localStorage.getItem('agenciaAlojamientoId')!;
    } else {
      return;
    }
    this.offersListService.getOfertasAgenciAlojamiento(agenciaAlojamientoId)
      .subscribe({
        next: (listaOfertas: Oferta[]) => {
          // this.offersListService.ofertaLista.set([...listaOfertas, ...listaOfertas]);
          this.offersListService.ofertaLista.set(listaOfertas);
          console.log(this.offersListService.ofertaLista());
          this.viewOfertasLista = this.offersListService.ofertaLista().slice(0, 7);
        },
        error: (error: any) => {
          console.log(error);
        },
      });
  }

}
