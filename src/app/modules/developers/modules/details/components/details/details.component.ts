import { Component, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { DesarrolladoresService } from '@app/services/desarrolladores.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  desarrollador: any = {};

  constructor(private actRoute: ActivatedRoute, private desarrolladoresSvc: DesarrolladoresService, private titleSvc: Title) {
    this.titleSvc.setTitle('Detalles');
    this.actRoute.params.subscribe((params) => {
      this.desarrolladoresSvc
        .getDesarrolladorById(params['id'])
        .subscribe((response) => (this.desarrollador = { ...response.data }));
      console.log(this.desarrollador);
    });
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.desarrolladoresSvc.resetDesarrolladores();
  }

  onReset() {
    this.desarrolladoresSvc.resetDesarrolladores();
  }
}
