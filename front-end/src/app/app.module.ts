import { ButtonTemplateComponent } from './components/button-template/button-template.component';
import { ButtonComponent } from './components/button/button.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardsContainerComponent } from './components/cards-container/cards-container.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { DoctorDetailsComponent } from './pages/doctor-details/doctor-details.component';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsContainerComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DoctorDetailsComponent,
    ButtonComponent,
    ButtonTemplateComponent,
    StarRatingComponent,
    NavbarComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSpinner);
  }
}
