// import { HttpClient } from '@angular/common/http';
import { ButtonTemplateComponent } from './components/button-template/button-template.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { FooterComponent } from './components/footer/footer.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { VisitsComponent } from './components/visits/visits.component';
import { VisitCardComponent } from './components/visit-card/visit-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardsContainerComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    DoctorDetailsComponent,
    ButtonTemplateComponent,
    StarRatingComponent,
    NavbarComponent,
    FooterComponent,
    UserProfileComponent,
    VisitsComponent,
    VisitCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSpinner);
  }
}
