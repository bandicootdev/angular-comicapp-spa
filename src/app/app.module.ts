import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/shared/navbar/navbar.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {NoPageFoundComponent} from './components/no-page-found/no-page-found.component';
import {HeroesService} from './services/heroes.service';
import {HeroeComponent} from './components/heroe/heroe.component';
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import { BuscadorComponent } from './components/buscador/buscador.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    NoPageFoundComponent,
    HeroeComponent,
    BuscadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxUiLoaderModule,
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
