import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DesarrolladoresService } from '@app/services/desarrolladores.service';
import { JuegosService } from '@app/services/juegos.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  search: string = '';
  clear: boolean = false;
  url: string = '';

  constructor(
    private juegosSvc: JuegosService,
    private desarrolladoresSvc: DesarrolladoresService,
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      // console.log(event);
      if (event instanceof NavigationEnd) {
        // event = new NavigationEnd();
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {}

  filter($event: any) {
    $event.preventDefault();
    console.log(this.url);
    if (this.url === '/home' || this.url === '/games') {
      this.juegosSvc.filterJuegos(this.search.trim());
      this.search = '';
      this.clear = true;
    } else if (this.url === '/developers') {
      this.desarrolladoresSvc.filterDesarrolladores(this.search.trim());
      this.search = '';
      this.clear = true;
    } else {
      this.juegosSvc.filterJuegos(this.search.trim());
      this.search = '';
      this.clear = true;
      this.router.navigate(['/home']);
    }
  }

  onClear() {
    if (this.url === '/home' || this.url === '/games') {
      this.juegosSvc.resetJuegos();
      this.clear = false;
    } else if (this.url === '/developers') {
      this.desarrolladoresSvc.resetDesarrolladores();
      this.clear = false;
    } else {
      this.juegosSvc.resetJuegos();
      this.clear = false;
      this.router.navigate(['/home']);
    }
  }
}
