import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPgComponent } from './landing-pg/landing-pg.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutFoundersComponent } from './about-founders/about-founders.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'about-founders', component: AboutFoundersComponent },
  { path: 'landing-lg',      component: LandingPgComponent },
  { path: '', redirectTo: 'landing-lg', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LandingPgComponent,
    NavbarComponent,
    AboutFoundersComponent
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
