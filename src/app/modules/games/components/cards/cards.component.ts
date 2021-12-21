import { Component, OnInit, OnDestroy, ViewChild, ElementRef} from '@angular/core';
import { Juego } from '@app/models/api-models';

import { Subscription } from 'rxjs';
import { JuegosService } from '@app/services/juegos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  juegos: Juego[] = [];
  subscription: Subscription = new Subscription();
  @ViewChild('juegos') article!: ElementRef;
  // @ViewChild(LoginComponent) login!: LoginComponent;

  constructor(private juegosSvc: JuegosService) {
    // this.heroes = this.heroesSvc.heroes;
  }


  ngOnInit(): void {
    this.subscription = this.juegosSvc.getInitialJuegos().subscribe((juegos: Juego[]) => {
      this.juegos = juegos;
    });
  }

  ngOnDestroy(): void {
    this.juegosSvc.getJuegos();
    this.subscription.unsubscribe();
  }
}

interface DatosHijo {
  message: string;
  component: string;
}
