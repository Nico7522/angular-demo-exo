import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Exo1Component } from './exo1/exo1.component';
import { InfoUserComponent } from './exo1/info-user/info-user.component';
import { InputComponent } from './exo1/input/input.component';
import { Exo2Component } from './exo2/exo2.component';
import { TimerComponent } from './exo2/timer/timer.component';
import { SpoilbambiComponent } from './exo3/spoilbambi/spoilbambi.component';
import { MenubarreComponent } from './exo4/menubarre/menubarre.component';
import { CourspreferesComponent } from './exo5/courspreferes/courspreferes.component';
import { BlooklistComponent } from './exo6/blooklist/blooklist.component';

const routes: Routes = [
  { path: 'exo1', component: Exo1Component },
  { path: 'info-user', component: InfoUserComponent }, 
  { path: 'input', component: InputComponent },
  { path: 'exo2', component: Exo2Component },
  { path: 'timer', component: TimerComponent },
  { path: 'spoilbambi', component: SpoilbambiComponent },
  { path: 'menubarre', component: MenubarreComponent },
  { path: 'courspreferes', component: CourspreferesComponent },
  { path: 'blooklist', component: BlooklistComponent}

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExosRoutingModule { }