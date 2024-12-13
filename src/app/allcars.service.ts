import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from './car';


@Injectable({
  providedIn: 'root'
})
export class AllcarsService {

  constructor(private http:HttpClient) { }

  getallCars():Observable<Car[]>{
    return this.http.get<Car[]>('https://www.freetestapi.com/api/v1/cars')
  }
  getcarsDetails(id:string): Observable<Car>{
    return this.http.get<Car>(`https://www.freetestapi.com/api/v1/cars/${id}`)
  }
}
