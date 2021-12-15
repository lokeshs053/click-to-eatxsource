import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppGuard } from './app.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantReviewComponent } from './restaurant-review/restaurant-review.component';

const routes: Routes = [
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'restaurant',component:HomeComponent,canActivate:[AppGuard]
  },
  {
    path:'detail',component:RestaurantDetailComponent,canActivate:[AppGuard]
  },
  {
    path:'review',component:RestaurantReviewComponent,canActivate:[AppGuard]
  },
  {
    path:"**", redirectTo:'register'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
