import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';

const routes: Routes = [
  { path:'', redirectTo: 'appointments', pathMatch: 'full' },
  { path:'appointments', component: FinalComponent },
  { path:'appointments/:appId', component: FinalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
