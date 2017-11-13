import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

import { AboutComponent } from './about.component';
import { BannerComponent } from './banner/banner.component';
import { WelcomeComponent } from './welcome/welcome.component';
// import { TwainComponent } from './shared/twain/twain.component';

import { UserService }      from './model/user.service';
import { TwainService }      from './shared/twain/twain.service';
import { HeroService }      from './model/hero.service';
// import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BannerComponent,
    WelcomeComponent,
   // TwainComponent,
   // HeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SharedModule
  ],
  providers: [UserService, TwainService, HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
