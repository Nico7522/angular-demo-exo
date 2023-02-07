import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerpipePipe } from './pipetimer/timerpipe.pipe';
import { ToTemperaturePipe } from './pipes/to-temperature';
import { BarremenuComponent } from './barremenu/barremenu.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    TimerpipePipe,
    ToTemperaturePipe,
    BarremenuComponent,
    NotFoundComponent,
    BasicLayoutComponent,
    HomeComponent,
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
