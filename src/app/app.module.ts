import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/Nav/Nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { StatsComponent } from './components/stats/stats.component';
import { CardscontainerComponent } from './components/cardscontainer/cardscontainer.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      BannerComponent,
      StatsComponent,
      CardscontainerComponent,
      HowitworksComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
