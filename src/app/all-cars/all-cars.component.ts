import { Component } from '@angular/core';
import { AllcarsService } from '../allcars.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent {
allcars:any[]=[]
  constructor(private _AllcarsService:AllcarsService, private router:Router){}

  getAllCarsData(){
    this._AllcarsService.getallCars().subscribe((data)=>{
      this.allcars=data

    })
  }
  ngOnInit():void{
    this.getAllCarsData();
  }
  goToDetails(id:number){
    this.router.navigateByUrl(`CarDetails/${id}`)


  }
}
