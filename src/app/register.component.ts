import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userName:string
  email:string
  password:string
  mobNumber:number
  success:string=""
  constructor(private service:RegisterService) { }

  ngOnInit(): void {
  }

  register(){
    console.log("start register")
    console.log(this.userName)
    console.log(this.email)
    console.log(this.password)
    console.log(this.mobNumber)

    const json = {
      name:this.userName,
      email:this.email,
      password:this.password,
      mobNumber:this.mobNumber
    }


    console.log(json)

    let response =this.service.registerService(json)
    console.log(response)
    if(response){
      this.success = "Registration successfull"
      console.log(this.success)
    }
  }
}
