import { inject, Injectable } from '@angular/core';
import { LugarViaje, SerachBarAOP1Service } from './widgets/alojamiento/opcion1/opcion1.service';
import { SerachBarAOP2Service } from './widgets/alojamiento/opcion2/opcion2.service';
import { InfoDondeIran, SerachBarAOP3Service } from './widgets/alojamiento/opcion3/opcion3.service';

export class AlojamientoSBS {
  lugar: LugarViaje;
  noche: number;
  infoDondeIran: InfoDondeIran;

  constructor(lugar: LugarViaje, noche: number, infoDondeIran: InfoDondeIran) {
    this.lugar = lugar;
    this.noche = noche;
    this.infoDondeIran = infoDondeIran;
  }
}


@Injectable({
  providedIn: 'root'
})
export class SearchBarService {
  // READ: BARRA DE BUSQUEDA DE ALOJAMIENTO
  serachBarAOP1Service = inject(SerachBarAOP1Service);
  serachBarAOP2Service = inject(SerachBarAOP2Service);
  serachBarAOP3Service = inject(SerachBarAOP3Service);

  //NOTE: OBETENER VALORES DE LOS CAMPOS DE BUSQUEDA DE ALOJAMIENTO
  getDatosSearchBarAlojamiento(): AlojamientoSBS {
    return new AlojamientoSBS(
      this.serachBarAOP1Service.getDataLugarViaje(),
      this.serachBarAOP2Service.valueDataFirst(),
      this.serachBarAOP3Service.valueDataOriginal()
    );
  }
  constructor() { }
}
