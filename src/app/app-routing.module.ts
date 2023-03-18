import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CustomObservableWithOperatorsComponent } from './pages/custom-observable-with-operators/custom-observable-with-operators.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { PipesComponent } from './pages/pipes/pipes.component';

import { TakeLastComponent } from './operators/take-last/take-last.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { MergeMap2Component } from './operators/merge-map2/merge-map2.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { ConcatMap2Component } from './operators/concat-map2/concat-map2.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map.component';
import { ZipComponent } from './operators/zip/zip.component';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { CombineLatest2Component } from './operators/combine-latest2/combine-latest2.component';
import { ShareComponent } from './operators/share/share.component';

import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { TestingComponent } from './pages/testing/testing.component';
import { Testing2Component } from './pages/testing2/testing2.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'user/:id', component: UserComponent},
  {path: 'customObservableWithOperators', component: CustomObservableWithOperatorsComponent},
  {path: 'operators/takeLast', component: TakeLastComponent},
  {path: 'operators/switchMap', component: SwitchMapComponent},
  {path: 'operators/mergeMap', component: MergeMapComponent},
  {path: 'operators/mergeMap2', component: MergeMap2Component},
  {path: 'operators/concatMap', component: ConcatMapComponent},
  {path: 'operators/concatMap2', component: ConcatMap2Component},
  {path: 'operators/exhaustMap', component: ExhaustMapComponent},
  {path: 'operators/zip', component: ZipComponent},
  {path: 'operators/combineLatest', component: CombineLatestComponent},
  {path: 'operators/combineLatest2', component: CombineLatest2Component},
  {path: 'operators/share', component: ShareComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'subjects/subjects', component: SubjectComponent},
  {path: 'subjects/behavior-subjects', component: BehaviorSubjectComponent},
  {path: 'subjects/replay-subjects', component: ReplaySubjectComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'testing', component: TestingComponent},
  {path: 'testing2', component: Testing2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
