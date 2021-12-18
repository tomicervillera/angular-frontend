import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { HeroesService } from '@app/services/heroes.service';

@Component({
  selector: 'app-searchfield',
  templateUrl: './searchfield.component.html',
  styleUrls: ['./searchfield.component.scss'],
})
export class SearchfieldComponent implements OnInit {
  search: string = '';
  clear: boolean = false;
  url: string = '';

  constructor(private heroes: HeroesService, private router: Router) {
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
    if (this.url === '/home') {
      this.heroes.filterHeroes(this.search.trim());
      this.search = '';
      this.clear = true;
    } else {
      this.heroes.filterHeroes(this.search.trim());
      this.search = '';
      this.clear = true;
      this.router.navigate(['/home']);
    }
  }

  onClear() {
    this.heroes.resetHeroes();
    this.clear = false;
  }
}
