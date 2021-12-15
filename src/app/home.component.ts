import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Cuisine, Restaurant } from '../responseData';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  uName:string
  city:string
  restaurants:Restaurant[]
  showRestaurant:boolean=true
  latitude:number
  longitude:number
  cuisines:any
  constructor(private dataService:DataService, private router:Router) { }

  ngOnInit(): void {
    console.log("calling ng onint")
    let userName = sessionStorage.getItem("name")
    console.log(userName)
    this.uName = userName

  }


  search(){
   console.log(this.city)
   //console.log(cityName)
   //console.log(cityName.value)
     let response = this.dataService.getRestaurants(this.city)
     response.subscribe((data)=>{console.log(data)
    console.log(data['restaurants'])
    this.restaurants= data['restaurants']
    
    console.log(this.restaurants[0].deeplink)},(error)=>{console.log(error)})
  }

  restaurantDetail(resId){
    console.log("calling restauarant detail")
    console.log(resId)
    this.showRestaurant = false
    this.router.navigate(['detail',{resId:resId}])
  }

  searchByLocation(){
   // localStorage // sessionStorage // navigator
    console.log("calling searchBy Location")
    navigator.geolocation.getCurrentPosition(
      (positon)=>{console.log(positon)
          this.latitude = positon.coords.latitude
         console.log(this.latitude)
          this.longitude = positon.coords.longitude
         console.log(this.longitude)
         let response = this.dataService.getRestaurantByLocation(
           this.latitude,this.longitude)
         response.subscribe((data)=>{console.log(data)
        this.restaurants = data['nearby_restaurants']},
        (error)=>{console.log(error)})
    }
    )
    console.log(this.latitude)
    console.log(this.longitude)
  }


  cuisinesByCity(cityId){
    console.log(cityId)
     let response = this.dataService.getCuisinesByCity(cityId)
     response.subscribe((data)=>{console.log(data)
    this.cuisines = data['cuisines']
    console.log(this.cuisines)},(error)=>{console.log(error)})
  }

  
}
