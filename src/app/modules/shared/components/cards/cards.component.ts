import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { HeroesService } from '@app/services/heroes.service';
import { Heroe } from '@app/models/api-models';

import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy, AfterViewInit {
  heroes: Heroe[] = [];
  subscription: Subscription = new Subscription();
  @ViewChild('movies') article!: ElementRef;
  // @ViewChild(LoginComponent) login!: LoginComponent;

  constructor(private heroesSvc: HeroesService) {
    // this.heroes = this.heroesSvc.heroes;
  }

  ngOnInit(): void {
    // console.log('article', this.article);
    this.subscription = this.heroesSvc
      .getHeroes()
      .subscribe((heroes: Heroe[]) => {
        // console.log(
        //   'Respuesta del endpoint heroes desde el componente: ',
        //   heroes
        // );
        this.heroes = heroes;
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
