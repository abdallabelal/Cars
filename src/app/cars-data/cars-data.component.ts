import { Component } from '@angular/core';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-cars-data',
  templateUrl: './cars-data.component.html',
  styleUrls: ['./cars-data.component.css']
})
export class CarsDataComponent {
  cars:any[]=[];
  constructor(private _CarsService:CarsService){

  }

  getCrasDetails(){
    this._CarsService.getcars().subscribe((data)=>{
      this.cars=data;



    })





  }
  ngOnInit():void{
    this.getCrasDetails();
  }


}
