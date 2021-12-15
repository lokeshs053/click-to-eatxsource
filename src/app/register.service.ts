import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  isRegister:boolean
  constructor() { }


  registerService(json:any):boolean{
    console.log("calling register service")
    console.log(json)

    //localStorage.setItem("email",JSON.stringify(json))


    localStorage.setItem(json.email,JSON.stringify(json))

    this.isRegister = true
    return this.isRegister


  }
}
