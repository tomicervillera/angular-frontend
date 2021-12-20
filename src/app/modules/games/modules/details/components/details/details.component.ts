import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '@app/models/api-models';
import { DesarrolladoresService } from '@app/services/desarrolladores.service';
import { JuegosService } from '@app/services/juegos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  juego: any = {};
  desarrollador: any = {};

  constructor(
    private actRoute: ActivatedRoute,
    private juegosSvc: JuegosService,
    private desarrolladorSvc: DesarrolladoresService
  ) {
    //Obtener juego en específico
    // this.actRoute.params.subscribe((params) => {
    //   this.juegosSvc.getJuegoById2(params['id']).subscribe((response) => (this.juego = { ...response.data }));
    // });

    this.actRoute.params.subscribe((params) => {
      this.juegosSvc.getJuegoById2(params['id']).subscribe((response) => {
        this.juego = { ...response.data };
        this.desarrolladorSvc
          .getDesarrolladorById(this.juego.idDesarrollador)
          .subscribe((response) => (this.desarrollador = { ...response.data }));
      });
    });

    //Obtener desarrollador asociado

    console.log(this.juego.idDesarrollador);
    // this.desarrolladorSvc
    //   .getDesarrolladorById(this.juego.idDesarrollador)
    //   .subscribe((response) => (this.desarrollador = { ...response.data }));
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.juegosSvc.resetJuegos();
  }

  onReset() {
    this.juegosSvc.resetJuegos();
  }
}
