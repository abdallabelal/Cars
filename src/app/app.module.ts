import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BecomeArenterComponent } from './become-arenter/become-arenter.component';
import { RentaldealsComponent } from './rentaldeals/rentaldeals.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarsDataComponent } from './cars-data/cars-data.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BecomeArenterComponent,
    RentaldealsComponent,
    HowitworksComponent,
    WhyChooseUsComponent,
    SignInComponent,
    SignUpComponent,
    CarsDataComponent,
    NotfoundComponent,
    ContactComponent,
    FooterComponent,
    AllCarsComponent,
    CarDetailsComponent,


  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
