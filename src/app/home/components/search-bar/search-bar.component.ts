import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../../servicio-home.service';
import { AlojamientoSBS, SearchBarService } from './search-bar.service';
import { AlojamientoOpcion1Component } from './widgets/alojamiento/opcion1/opcion1.component';
import { AlojamientoOpcion2Component } from './widgets/alojamiento/opcion2/opcion2.component';
import { AlojamientoOpcion3Component } from './widgets/alojamiento/opcion3/opcion3.component';
import { TurismoOpcion1Component } from './widgets/atraccion-turistica/opcion1/opcion1.component';
import { TurismoOpcion2Component } from './widgets/atraccion-turistica/opcion2/opcion2.component';
import { VueloOpcion1Component } from './widgets/vuelos/opcion1/opcion1.component';
import { VueloOpcion3Component } from './widgets/vuelos/opcion3/opcion3.component';
import { SerachBarVOP3Service } from './widgets/vuelos/opcion3/opcion3.service';
import { VueloOpcion4Component } from './widgets/vuelos/opcion4/opcion4.component';
import { SerachBarVOP4Service } from './widgets/vuelos/opcion4/opcion4.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    AlojamientoOpcion1Component,
    AlojamientoOpcion2Component,
    AlojamientoOpcion3Component,
    VueloOpcion1Component,
    VueloOpcion3Component,
    VueloOpcion4Component,
    TurismoOpcion1Component,
    TurismoOpcion2Component,
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css',
})
export class SearchBarComponent {
  public homeService = inject(HomeService);
  public router = inject(Router);
  public searchBarService = inject(SearchBarService);
  public alojamientoSBS = signal<AlojamientoSBS | null>(null);

  searchBarVOP1: string = '';
  searchBarVOP2: string = '';
  serachBarVOP3Service = inject(SerachBarVOP3Service);
  serachBarVOP4Service = inject(SerachBarVOP4Service);
  onSearchBarVOP1(value: string) {
    this.searchBarVOP1 = value;
  }
  onSearchBarVOP2(value: string) {
    this.searchBarVOP2 = value;
  }

  searchBarTOP1: string = '';
  searchBarTOP2: string = '';
  onSearchBarTOP1(value: string) {
    this.searchBarTOP1 = value;
  }
  onSearchBarTOP2(value: string) {
    this.searchBarTOP2 = value;
  }

  datosSearchBar() {
    if (this.homeService.isAlojamiento()) {
      this.alojamientoSBS.set(
        this.searchBarService.getDatosSearchBarAlojamiento()
      );
      this.router.navigate(['/home/search-result-alojamiento']);
    }
  }
}
