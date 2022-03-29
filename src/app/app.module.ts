import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { AngularObservablesComponent } from './pages/angular-observables/angular-observables.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AngularObservablesComponent,
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
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
