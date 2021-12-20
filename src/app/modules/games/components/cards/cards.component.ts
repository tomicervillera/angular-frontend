import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Heroe, Juego } from '@app/models/api-models';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

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
    this.subscription.unsubscribe();
  }
}

interface DatosHijo {
  message: string;
  component: string;
}
