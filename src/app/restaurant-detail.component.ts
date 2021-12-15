import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Restaurant } from '../responseData';
import { RestaurantDetailService } from './restaurant-detail.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  resId:number
  restaurant:any
  constructor(private route:ActivatedRoute,private detailService:RestaurantDetailService,
    private router:Router) { }

  ngOnInit(): void {
    console.log(this.route.snapshot)
    this.resId = this.route.snapshot.params.resId
    console.log(this.resId)
    let response = this.detailService.getRestaurantDetail(this.resId)
    response.subscribe((data)=>{console.log(data)
    this.restaurant = data})
  }

  menu(){


  }

  reviews(){
    console.log("calling reviews")
    console.log(this.resId)
    this.router.navigate(['review',{resId:this.resId}])

  }

}
