import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { CustomObservableWithOperatorsComponent } from './pages/custom-observable-with-operators/custom-observable-with-operators.component';
import { ForkJoinComponent } from './operators/fork-join/fork-join.component';
import { SubjectsComponent } from './pages/subjects/subjects.component';
import { TakeComponent } from './operators/take/take.component';
import { TakeLastComponent } from './operators/take-last/take-last.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { TestingComponent } from './pages/testing/testing.component';
import { SubjectComponent } from './subjects/subject/subject.component';
import { BehaviorSubjectComponent } from './subjects/behavior-subject/behavior-subject.component';
import { ReplaySubjectComponent } from './subjects/replay-subject/replay-subject.component';
import { SwitchMapComponent } from './operators/switch-map/switch-map.component';
import { MergeMapComponent } from './operators/merge-map/merge-map.component';
import { ZipComponent } from './operators/zip/zip.component';
import { ConcatMapComponent } from './operators/concat-map/concat-map.component';
import { ShareComponent } from './operators/share/share.component';
import { CombineLatestComponent } from './operators/combine-latest/combine-latest.component';
import { CombineLatest2Component } from './operators/combine-latest2/combine-latest2.component';
import { MergeMap2Component } from './operators/merge-map2/merge-map2.component';
import { ConcatMap2Component } from './operators/concat-map2/concat-map2.component';
import { ExhaustMapComponent } from './operators/exhaust-map/exhaust-map.component';
import { Testing2Component } from './pages/testing2/testing2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserComponent,
    CustomObservableWithOperatorsComponent,
    ForkJoinComponent,
    SubjectsComponent,
    TakeComponent,
    TakeLastComponent,
    PipesComponent,
    TestingComponent,
    SubjectComponent,
    BehaviorSubjectComponent,
    ReplaySubjectComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ZipComponent,
    ConcatMapComponent,
    ShareComponent,
    CombineLatestComponent,
    CombineLatest2Component,
    MergeMap2Component,
    ConcatMap2Component,
    ExhaustMapComponent,
    Testing2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
