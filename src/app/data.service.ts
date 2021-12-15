import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Restaurant } from './responseData';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'X-Zomato-API-Key':'7749b19667964b87a3efc739e254ada2'
  })
}
@Injectable({
  providedIn: 'root'
})
export class DataService {

  private URL = "https://developers.zomato.com/api/v2.1"
  private SEARCH  = "/search"
  private GEOCODE = "/geocode"
  private CUISINES = "/cuisines"

  constructor(private httpClient:HttpClient) { }

  getRestaurants(cityName):Observable<Restaurant>{

    console.log(cityName)
    let response =this.httpClient.get(
      this.URL+this.SEARCH+"?q="+cityName,httpOptions)
      .pipe(map((response:Restaurant)=> {return response}))
    console.log(response)
    return response
  }


  getRestaurantByLocation(latitude, longitude){
    console.log(latitude)
    console.log(longitude)

   return this.httpClient.get(
     this.URL+this.GEOCODE+"?lat="+latitude+"&lon="+longitude,httpOptions)

  }


  getCuisinesByCity(cityId){
    console.log("calling get cusines by city")
    console.log(cityId)
    return this.httpClient.get(
      this.URL+this.CUISINES+"?city_id="+cityId,httpOptions)
  }
}
