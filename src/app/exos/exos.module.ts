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
import { TimerpipePipe } from '../shared/pipetimer/timerpipe.pipe';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { Exo7Component } from './exo7/exo7.component';
import { BookComponent } from './exo7/book/book.component';
import { Exo8Component } from './exo8/exo8.component';




@NgModule({
  declarations: [
    Exo1Component,
    InfoUserComponent,
    InputComponent,
    Exo2Component,
    TimerComponent,
    SpoilbambiComponent,
    MenubarreComponent,
    CourspreferesComponent,
    BlooklistComponent,
    Exo7Component,
    BookComponent,
    Exo8Component
  ],
  imports: [
    CommonModule,
    ExosRoutingModule,
    FormsModule,
    SharedModule
  ]
})
export class ExosModule { }
