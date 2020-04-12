import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService} from '../../services/heroes.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {
  heroe: any = {};
  showModal: boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private ngxLoader: NgxUiLoaderService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.ngxLoader.start();
    this.activatedRoute.params.subscribe(async params => {
      this.heroe = this.heroesService.getHeroe(params['id']);
      if (this.heroe) {
        this.ngxLoader.stop();
      } else {
        this.router.navigate(['**']);
        this.ngxLoader.stop();
      }
    });
  }

  show() {
    this.showModal = true; // Show-Hide Modal Check
  }

  hide() {
    this.showModal = false;
  }
}
