import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantReviewService } from './restaurant-review.service';

@Component({
  selector: 'app-restaurant-review',
  templateUrl: './restaurant-review.component.html',
  styleUrls: ['./restaurant-review.component.css']
})
export class RestaurantReviewComponent implements OnInit {

  reviews:any
  userReviews:any=[]
  constructor(private route:ActivatedRoute,private reviewService:RestaurantReviewService) { }

  ngOnInit(): void {
    let resId = this.route.snapshot.params.resId
    console.log(resId)
    let response = this.reviewService.getReview(resId)
    response.subscribe((data)=>{console.log(data)
    this.userReviews = data['user_reviews']
     console.log(this.userReviews)},(error)=>{console.log(error)})

  }

}
