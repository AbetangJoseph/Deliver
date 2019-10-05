import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/Nav/Nav.component';
import { BannerComponent } from './components/banner/banner.component';
import { StatsComponent } from './components/stats/stats.component';
import { CardscontainerComponent } from './components/cardscontainer/cardscontainer.component';
import { HowitworksComponent } from './components/howitworks/howitworks.component';
import { DownloadappComponent } from './components/downloadapp/downloadapp.component';
import { TestimoniesComponent } from './components/testimonies/testimonies.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      BannerComponent,
      StatsComponent,
      CardscontainerComponent,
      HowitworksComponent,
      DownloadappComponent,
      TestimoniesComponent,
      FooterComponent
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
