import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'X-Zomato-API-Key':'7749b19667964b87a3efc739e254ada2'
  })
}

@Injectable({
  providedIn: 'root'
})
export class RestaurantDetailService {

  private URL="https://developers.zomato.com/api/v2.1"
  private restuarant="/restaurant"

  constructor(private httpClient:HttpClient) { }

  getRestaurantDetail(resId){
    console.log("calling restaurant detail")
    let response  = this.httpClient.get(this.URL+this.restuarant+"?res_id="+resId,httpOptions)
    console.log(response)
    return response
  }
}
