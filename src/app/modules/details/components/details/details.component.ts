import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/shared/services/heroes.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  movie: any;
  movies: any = [];
  jobsssss: string = 'jobs';
  constructor(
    private actRoute: ActivatedRoute,
    private heroeSvc: HeroesService
  ) {
    // this.actRoute.params.subscribe((params) => {
    //   this.movie = this.heroeSvc.getHeroe(params['id']);
    //   console.log(this.movie);
    // });
  }

  ngOnInit(): void {}

  onReset() {
    this.heroeSvc.resetHeroes();
  }
}
