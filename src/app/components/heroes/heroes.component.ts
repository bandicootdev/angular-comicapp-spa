import {Component, OnInit} from '@angular/core';
import {HeroesService, Heroe} from '../../services/heroes.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(
    private heroesServices: HeroesService,
    private ngxLoader: NgxUiLoaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    setInterval(() => {
      this.ngxLoader.stop();
      this.heroes = this.heroesServices.getHeroes();
      this.ngxLoader.stop();
      }, 1000);
    // console.log(this.heroes);

  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
