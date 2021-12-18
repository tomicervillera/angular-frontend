import {
  Component,
  OnInit,
  OnDestroy,
  OnChanges,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy, OnChanges {
  @Input() movie: any = {};
  @Input('index') i: number = 0;
  @Output('enviardatos') enviar = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    // console.log('on init');
  }

  ngOnChanges(values: any): void {
    // console.log('on changes', values);
  }

  ngOnDestroy(): void {
    // console.log('on destroy');
  }

  avisarleAlPapa() {
    console.log('click hijo');
    this.enviar.emit({
      message: 'Mensaje al padre desde el hijo again',
      component: 'CardComponent',
    });
  }
}
