import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HomeComponent,
    UserComponent,
    AngularObservablesComponent,
    CustomObservableWithOperatorsComponent,
    ForkJoinComponent,
    SubjectsComponent,
    TakeComponent,
    TakeLastComponent
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
