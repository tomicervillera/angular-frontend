import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuegosService } from '@app/services/juegos.service';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  juego: any = {};
  movies: any = [];
  constructor(
    private actRoute: ActivatedRoute,
    private juegosSvc: JuegosService
  ) {
    this.actRoute.params.subscribe((params) => {
      this.juego = this.juegosSvc.getJuegoById(params['id']);
      console.log(this.juego);
    });
  }

  ngOnInit(): void {}

  onReset() {
    this.juegosSvc.resetJuegos();
  }
}
