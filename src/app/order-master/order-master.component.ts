import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { ICategory } from '../Models/icategory';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from "../product-list/product-list.component";
import { StaticCategoryService } from '../service/static-category.service';
import { CartShopping } from '../ViewModels/cart-shopping';



@Component({
  selector: 'app-order-master',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductListComponent],
  templateUrl: './order-master.component.html',
  styleUrl: './order-master.component.css'
})
export class OrderMasterComponent implements OnChanges{

  catogry: ICategory[];
  selectedCategory:number=0;
  totalPrice:number=0
  cart:CartShopping[]=[]
  priceOFprd:number=0

  constructor(private categoryService:StaticCategoryService){
    this.catogry = this.categoryService.getCategory();
  }

  ngOnChanges(): void {
    for(let i=0;i<this.cart.length;i++){
      this.priceOFprd = this.cart[i].price * this.cart[i].neededCount;
    }
  }

  // totalPriceChange(totalPrice:number){
  //   this.totalPrice = totalPrice;
  // }

  sendCartShopping(cartShopping:CartShopping[]){
    this.cart = cartShopping;
  }

  removePrd(name:string){
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].name===name){
        this.cart.splice(i,1);
      }
    }
  }
  
}
