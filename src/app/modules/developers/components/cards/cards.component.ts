import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Desarrollador } from '@app/models/api-models';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

import { Subscription } from 'rxjs';
import { DesarrolladoresService } from '@app/services/desarrolladores.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  desarrolladores: Desarrollador[] = [];
  subscription: Subscription = new Subscription();
  @ViewChild('desarrolladores') article!: ElementRef;

  constructor(private desarrolladoresSvc: DesarrolladoresService) {}

  ngOnInit(): void {
    this.subscription = this.desarrolladoresSvc
      .getInitialDesarrolladores()
      .subscribe((desarrolladores: Desarrollador[]) => {
        this.desarrolladores = desarrolladores;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
