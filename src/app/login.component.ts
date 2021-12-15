import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string
  password:string
  loginError:string

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login(){
    console.log("calling login")
    console.log(this.email)
    console.log(this.password)

    let user = localStorage.getItem(this.email)
    console.log(user)
    let userObj = JSON.parse(user)
    console.log(userObj)
    console.log(userObj.name)
    if(this.email === userObj.email && this.password == userObj.password){
      console.log("login is success")
      // if(this.password === userObj.password){
      //   console.log("password is valid")
      // } else {
      //   console.log("email or password is incorrect")
      // }
        sessionStorage.setItem("name",userObj.name)
        this.router.navigate(['restaurant'])
    } else {
      console.log("email  or password is incorrect")
      this.loginError = "Email or password is incorrect"
    }




  }
}
