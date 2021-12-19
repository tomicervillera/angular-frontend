import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Heroe, Juego } from '@app/models/api-models';

import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

import { Subscription } from 'rxjs';
import { JuegosService } from '@app/services/juegos.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy, AfterViewInit {
  juegos: Juego[] = [];
  subscription: Subscription = new Subscription();
  @ViewChild('juegos') article!: ElementRef;
  // @ViewChild(LoginComponent) login!: LoginComponent;

  constructor(private juegosSvc: JuegosService) {
    // this.heroes = this.heroesSvc.heroes;
  }

  ngOnInit(): void {
    // console.log('article', this.article);
    this.subscription = this.juegosSvc
      .getInitialJuegos()
      .subscribe((juegos: Juego[]) => {
        // console.log(
        //   'Respuesta del endpoint heroes desde el componente: ',
        //   heroes
        // );
        this.juegos = juegos;
      });
  }

  ngAfterViewInit(): void {
    // console.log('article', this.article.nativeElement);
    // this.login.log();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  navigate() {
    console.log('click');
  }
  recibir($event: DatosHijo) {
    console.log('recibido', $event);
  }
}

interface DatosHijo {
  message: string;
  component: string;
}
