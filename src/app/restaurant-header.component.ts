import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-restaurant-header',
  templateUrl: './restaurant-header.component.html',
  styleUrls: ['./restaurant-header.component.css']
})
export class RestaurantHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  logOut(){
    sessionStorage.clear()
   // this.router.navigate(['/login'])
  }

}
