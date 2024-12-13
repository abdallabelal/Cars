import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllcarsService } from '../allcars.service';
import { Car } from '../car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {

  carId:string=''
  carDetails!:Car

  
  constructor(private activetedRoute:ActivatedRoute , private _allcarsService:AllcarsService){
    activetedRoute.params.subscribe((param:any)=>{
     this.carId=param.id


    })

  }

  getCarsInfo(){
this._allcarsService.getcarsDetails(this.carId).subscribe({
  next:(data:any)=>{
    this.carDetails=data
  },
  error:(err:string)=>{
    console.log(err);},
    complete:()=>{
      console.log('completeee');

    }
})
  }

ngOnInit(): void {
  this.getCarsInfo()
}

}
