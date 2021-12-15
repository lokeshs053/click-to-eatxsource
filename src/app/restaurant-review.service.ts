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
export class RestaurantReviewService {

  private URL="https://developers.zomato.com/api/v2.1"
  private REVIEW="/reviews"

  constructor(private httpclient:HttpClient) { }


  getReview(resId){
    let response = this.httpclient.get(this.URL+this.REVIEW+"?res_id="+resId,httpOptions)
    return response

  }
}
