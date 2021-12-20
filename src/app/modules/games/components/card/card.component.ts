import { Component, OnInit, OnDestroy, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() juego: any = {};
  @Input('index') i: number = 0;
  @Output('enviardatos') enviar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
