import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CustomObservableWithOperatorsComponent } from './pages/custom-observable-with-operators/custom-observable-with-operators.component';
import { AngularObservablesComponent } from './pages/angular-observables/angular-observables.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'customObservableWithOperators', component: CustomObservableWithOperatorsComponent},
  {path: 'angularObservables', component: AngularObservablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
