import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserClass } from '../UserClass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  constructor(public service:ServiceService, private router: Router){}
  user:UserClass=new UserClass();
  name:any;
  uname:any;
  password:any;
  email:any;
  mobileNo:any;
  address:any;
  message:any;
  ngOnInit(): void {
  
  }
  addUser(){
    let response=this.service.addUser(this.user);
    response.subscribe((data:any)=>this.user=data);
   
    if(this.user!==null){
      this.message="Welcome to My Food Box";
    }
    else{
      this.message="Check";
    }
    
  }
  }