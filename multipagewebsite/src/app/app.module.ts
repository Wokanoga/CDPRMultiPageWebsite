import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPgComponent } from './landing-pg/landing-pg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutFoundersComponent } from './about-founders/about-founders.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPgComponent,
    NavbarComponent,
    AboutFoundersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
