import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CustomObservableWithOperatorsComponent } from './pages/custom-observable-with-operators/custom-observable-with-operators.component';
import { AngularObservablesComponent } from './pages/angular-observables/angular-observables.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { PipesComponent } from './pages/pipes/pipes.component';

import { TakeLastComponent } from './operators/take-last/take-last.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { ZipComponent } from './operators/zip/zip.component';
import { ShareComponent } from './operators/share/share.component';

import { TestingComponent } from './pages/testing/testing.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'customObservableWithOperators', component: CustomObservableWithOperatorsComponent},
  {path: 'angularObservables', component: AngularObservablesComponent},
  {path: 'operators/takeLast', component: TakeLastComponent},
  {path: 'operators/switchMap', component: SwitchMapComponent},
  {path: 'operators/mergeMap', component: MergeMapComponent},
  {path: 'operators/concatMap', component: ConcatMapComponent},
  {path: 'operators/zip', component: ZipComponent},
  {path: 'operators/share', component: ShareComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'subjects/subjects', component: SubjectComponent},
  {path: 'subjects/behavior-subjects', component: BehaviorSubjectComponent},
  {path: 'subjects/replay-subjects', component: ReplaySubjectComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'testing', component: TestingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
