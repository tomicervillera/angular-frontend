import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicadoresService } from '@app/services/publicadores.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  publicador: any = {};

  constructor(private actRoute: ActivatedRoute, private publicadoresSvc: PublicadoresService) {
    this.actRoute.params.subscribe((params) => {
      this.publicadoresSvc
        .getPublicadorById(params['id'])
        .subscribe((response) => (this.publicador = { ...response.data }));
      console.log(this.publicador);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.publicadoresSvc.resetPublicadores();
  }

  onReset() {
    this.publicadoresSvc.resetPublicadores();
  }
}
