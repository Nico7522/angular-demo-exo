import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { Exo1Component } from './exos/exo1/exo1.component';
import { InputComponent } from './exos/exo1/input/input.component';
import { InfoUserComponent } from './exos/exo1/info-user/info-user.component';
import { Exo1Component } from './exos/exo1/exo1.component';

import { Exo2Component } from './exos/exo2/exo2.component';
import { TimerComponent } from './exos/exo2/timer/timer.component';
import { TimerpipePipe } from './shared/pipetimer/timerpipe.pipe';

import { DemosModule } from './demos/demos.module';
import { ExosModule } from './exos/exos.module';
import { NavbarreComponent } from './navbarre/navbarre.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarreComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DemosModule,
    ExosModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
