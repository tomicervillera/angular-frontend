import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Juego } from '@app/models/api-models';
import { JuegosService } from '@app/services/juegos.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  juego: any = {};

  constructor(private actRoute: ActivatedRoute, private juegosSvc: JuegosService) {
    this.actRoute.params.subscribe((params) => {
      this.juegosSvc.getJuegoById2(params['id']).subscribe((response) => (this.juego = { ...response.data }));
      console.log(this.juego);
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
