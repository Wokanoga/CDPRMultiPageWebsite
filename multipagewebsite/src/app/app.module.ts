import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPgComponent } from './landing-pg/landing-pg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutFoundersComponent } from './about-founders/about-founders.component';
import { RouterModule, Routes } from '@angular/router';
import { Witcher1Component } from './witcher1/witcher1.component';
import { Witcher2Component } from './witcher2/witcher2.component';
import { Witcher3Component } from './witcher3/witcher3.component';
import { Cyberpunk2077Component } from './cyberpunk2077/cyberpunk2077.component';

const appRoutes: Routes = [
  { path: 'about-founders', component: AboutFoundersComponent },
  { path: 'landing-lg',      component: LandingPgComponent },
  { path: 'witcher1', component: Witcher1Component },
  { path: 'witcher2', component: Witcher2Component },
  { path: 'witcher3', component: Witcher3Component },
  { path: 'cyberpunk2077', component: Cyberpunk2077Component },
  { path: '', redirectTo: 'landing-lg', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPgComponent,
    NavbarComponent,
    AboutFoundersComponent,
    Witcher1Component,
    Witcher2Component,
    Witcher3Component,
    Cyberpunk2077Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
