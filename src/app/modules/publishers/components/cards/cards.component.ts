import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Publicador } from '@app/models/api-models';
import { LoginComponent } from 'src/app/modules/auth/components/login/login.component';

import { Subscription } from 'rxjs';
import { PublicadoresService } from '@app/services/publicadores.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent implements OnInit, OnDestroy {
  publicadores: Publicador[] = [];
  subscription: Subscription = new Subscription();
  @ViewChild('publicadores') article!: ElementRef;

  constructor(private publicadoresSvc: PublicadoresService) {}

  ngOnInit(): void {
    this.subscription = this.publicadoresSvc
      .getInitialPublicadores()
      .subscribe((publicadores: Publicador[]) => {
        this.publicadores = publicadores;
      });
  }

  ngOnDestroy(): void {
    this.publicadoresSvc.getPublicadores();
    this.subscription.unsubscribe();
  }
}
