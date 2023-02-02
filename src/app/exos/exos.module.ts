import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExosRoutingModule } from './exos-routing.module';
import { Exo1Component } from './exo1/exo1.component';
import { InfoUserComponent } from './exo1/info-user/info-user.component';
import { InputComponent } from './exo1/input/input.component';
import { Exo2Component } from './exo2/exo2.component';
import { SpoilbambiComponent } from './exo3/spoilbambi/spoilbambi.component';
import { TimerComponent } from './exo2/timer/timer.component';
import { MenubarreComponent } from './exo4/menubarre/menubarre.component';
import { CourspreferesComponent } from './exo5/courspreferes/courspreferes.component';
import { BlooklistComponent } from './exo6/blooklist/blooklist.component';
import { TimerpipePipe } from './exo2/pipetimer/timerpipe.pipe';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    Exo1Component,
    InfoUserComponent,
    InputComponent,
    Exo2Component,
    TimerComponent,
    TimerpipePipe,
    SpoilbambiComponent,
    MenubarreComponent,
    CourspreferesComponent,
    BlooklistComponent
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule
  ]
})
export class ExosModule { }
