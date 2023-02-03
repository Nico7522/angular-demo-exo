import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerpipePipe } from './pipetimer/timerpipe.pipe';
import { ToTemperaturePipe } from './pipes/to-temperature';
import { BarremenuComponent } from './barremenu/barremenu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TimerpipePipe,
    ToTemperaturePipe,
    BarremenuComponent,
  ],
  exports: [
    TimerpipePipe,
    ToTemperaturePipe,
    BarremenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
