import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnterpriseMapControlComponent } from './enterprise-map-control/enterprise-map-control.component';

const routes: Routes = [
  { path: 'map', component: EnterpriseMapControlComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
