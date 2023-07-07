import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartClass } from '../CartClass';
import { FoodClass } from '../FoodClass';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-user-add-food-to-cart',
  templateUrl: './user-add-food-to-cart.component.html',
  styleUrls: ['./user-add-food-to-cart.component.css']
})
export class UserAddFoodToCartComponent implements OnInit {

  constructor(private service: ServiceService,private router: Router) {}

  cart:CartClass=new CartClass();
  carts:any;
  food:FoodClass=new FoodClass();


    ngOnInit(): void {

      let id=this.service.FoodIDForCart

      let resp1=this.service.getFoodById(id)
      resp1.subscribe((data:any)=>this.food=data)

    }
  
    addMore(){
      
  
      this.router.navigate(['/user-dashboard']);
    }

    proceed(){


      this.router.navigate(['/user-checkout']);
    }
    
    

  }