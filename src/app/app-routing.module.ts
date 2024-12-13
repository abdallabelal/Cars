import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BecomeArenterComponent } from './become-arenter/become-arenter.component';
import { RentaldealsComponent } from './rentaldeals/rentaldeals.component';
import { HowitworksComponent } from './howitworks/howitworks.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CarsDataComponent } from './cars-data/cars-data.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AllCarsComponent } from './all-cars/all-cars.component';
import { CarDetailsComponent } from './car-details/car-details.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent,

  },
  {path:'becomeArenter',component:BecomeArenterComponent},
  {path:'rentaldeals',component:RentaldealsComponent},
  {path:'howitworks',component:HowitworksComponent},
  {path:'whychooseus',component:WhyChooseUsComponent},
  {path:'signIn',component:SignInComponent},
  {path:'signUp',component:SignUpComponent},
  {path:'CarsData',component:CarsDataComponent},
  {path:'AllCars',component:AllCarsComponent},
  {path:'CarDetails/:id',component:CarDetailsComponent},

  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
