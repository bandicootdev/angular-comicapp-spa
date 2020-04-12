import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {Router} from '@angular/router';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  heroes: any[] = [];
  termino: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private ngxLoader: NgxUiLoaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroe(params['termino']);
      this.ngxLoader.stop();
    });
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
