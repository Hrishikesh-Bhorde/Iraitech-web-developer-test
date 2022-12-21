import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Que1Component } from './que1/que1.component';
import { Que3Component } from './que3/que3.component';
import { Que4Component } from './que4/que4.component';

const routes: Routes = [
  {path:'q1', component:Que1Component},

  {path:'q3', component:Que3Component},
  {path:'q4', component:Que4Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
