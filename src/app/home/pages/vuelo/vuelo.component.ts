import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

export class AgenciaVuelo {
  urlPage: string;
  image: string;

  constructor(urlPage: string, image: string,) {
    this.image = image;
    this.urlPage = urlPage;
  }
}

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [],
  templateUrl: './vuelo.component.html',
  styleUrl: './vuelo.component.css'
})
export default class VuelosComponent implements OnInit, OnDestroy {




  public agenciasVueloPeru: AgenciaVuelo[] = [
    new AgenciaVuelo(
      "https://www.qatarairways.com/",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/52/1d/qatar-airways.jpg?w=1200&h=-1&s=1"
    ),
    new AgenciaVuelo(
      "https://www.airpaz.com/en/airlines/CZ-China-Southern?a=15433626361&b=169184625988&d=c&gad_source=1&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNlEz1SCtUKJmfKulZjegrGgnPlIr8c-7QqLOT9aX9bFV79oyLR2JZMaAgTZEALw_wcB&l=9077267&n=g&p=&t=kwd-531648411&utm_medium=cpc&utm_source=gads",
      "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/06/05/b3c71d62-a703-11ea-8ea0-d7434be00753_image_hires_172124.jpeg"
    ),
    new AgenciaVuelo(
      "https://www.united.com/es/es",
      "https://i0.wp.com/bitfinanzas.com/wp-content/uploads/delta-air-linesjpg-jpg.webp"
    ),
    new AgenciaVuelo(
      "https://www.aa.com/homePage.do?locale=es_MX", "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/76/american-airlines.jpg?w=1200&h=-1&s=1"
    ),
    new AgenciaVuelo(
      "https://www.garuda-indonesia.com/other-countries/en/index", "https://www.garuda-indonesia.com/content/dam/garuda/footer/profil-perusahaan/corporate-company-single.jpg"
    )
  ];

  public agenciasVueloBolivia: AgenciaVuelo[] = [
    new AgenciaVuelo(
      "https://www.boa.bo/",
      "https://www.opinion.com.bo/media/opinion/images/2020/12/28/2020122821434531968.jpg"
    ),
    new AgenciaVuelo(
      "https://www.swiss.com/ch/es/homepage",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/52/4b/swiss.jpg?w=1200&h=-1&s=1"
    ),
    new AgenciaVuelo(
      "https://www.edreams.com.mx/vuelos/",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/52/7d/vueling-airlines.jpg?w=1200&h=-1&s=1"
    ),
    new AgenciaVuelo(
      "https://www.iberia.com/es/?_gl=1*1v0a73s*_up*MQ..&gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNlsHhGjt3iMg57ITshR9SlpIEuYlSawtxNSqhwOv1PNxgvT6eypzcMaApJ8EALw_wcB",
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/cd/51/d8/iberia.jpg?w=1200&h=-1&s=1"
    ),
    new AgenciaVuelo(
      "https://klm.com/?gclid=Cj0KCQjw3tCyBhDBARIsAEY0XNmyRo7X6tnphESh5zDbyW1L5AvEYgGUEbU4VdYBEUkJIBCj4niR4rYaAr4-EALw_wcB&gclsrc=aw.ds&showredirectnotice=us",
      "https://actualidadaeroespacial.com/wp-content/uploads/2023/09/CDB-Aviation-KLM-A321neo-130923.jpg"
    )
  ];


  public recorredor = new BehaviorSubject<number>(0);
  public viewDataPeru = new BehaviorSubject<AgenciaVuelo>(this.agenciasVueloPeru[0]);
  public viewDataBolivia = new BehaviorSubject<AgenciaVuelo>(this.agenciasVueloBolivia[0]);
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    // interval(5000)
    //   .pipe(
    //     takeUntil(this.destroy$),
    //     map(() => {
    //       this.viewDataPeru.next(this.agenciasVueloPeru[this.recorredor.getValue()]);
    //       this.viewDataBolivia.next(this.agenciasVueloBolivia[this.recorredor.getValue()]);
    //       if (this.recorredor.getValue() == 4) {
    //         this.recorredor.next(0);
    //       } else {
    //         this.recorredor.next(this.recorredor.getValue() + 1);
    //       }
    //     })
    //   ).subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  abrirPaginaExterna(value: string): void {
    window.open(value, '_blank');
  }

}
