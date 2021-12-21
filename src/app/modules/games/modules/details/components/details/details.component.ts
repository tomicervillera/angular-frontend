import { Component, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '@app/models/api-models';
import { DesarrolladoresService } from '@app/services/desarrolladores.service';
import { JuegosService } from '@app/services/juegos.service';
import { PublicadoresService } from '@app/services/publicadores.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  juego: any = {};
  desarrollador: any = {};
  publicador: any = {};

  constructor(
    private actRoute: ActivatedRoute,
    private juegosSvc: JuegosService,
    private desarrolladoresSvc: DesarrolladoresService,
    private publicadoresSvc: PublicadoresService,
    private titleSvc: Title
  ) {
    this.titleSvc.setTitle('Detalles');
    this.actRoute.params.subscribe((params) => {
      this.juegosSvc.getJuegoById2(params['id']).subscribe((response) => {
        this.juego = { ...response.data };
        this.desarrolladoresSvc
          .getDesarrolladorById(this.juego.idDesarrollador)
          .subscribe((response) => (this.desarrollador = { ...response.data }));
        this.publicadoresSvc
          .getPublicadorById(this.juego.idPublicador)
          .subscribe((response) => (this.publicador = { ...response.data }));
      });
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.juegosSvc.resetJuegos();
  }

  onReset() {
    this.juegosSvc.resetJuegos();
  }
}
