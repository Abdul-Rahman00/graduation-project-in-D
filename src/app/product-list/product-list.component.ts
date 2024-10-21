import { IProduct } from './../Models/iproduct';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {EGPtoUSDPipe} from '../Pipe/egpto-usd.pipe'
import { StaticProductService } from '../service/static-product.service';
import { CartShopping } from '../ViewModels/cart-shopping';
import { Router, RouterLink } from '@angular/router';
import { ApiProductService } from '../service/api-product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule,FormsModule,EGPtoUSDPipe,RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnChanges{

  totalPrice :number=0;
  // @Output() OrderTotalPriceChange : EventEmitter<number>
  @Output() cartBought : EventEmitter<CartShopping[]>;
  selectedProduct:number=0;
  @Input() sendCategoryID:number=0
  filterPrd : IProduct[]=[];
  cart : CartShopping[];
  AllPrds : IProduct[]=[];
  constructor(private _APIProductService:ApiProductService,
              //private prdService:StaticProductService,
              private router :Router ){
    this._APIProductService.getAllProducts().subscribe((prds)=>{
      this.filterPrd=prds;
    });
    this._APIProductService.getAllProducts().subscribe((prds)=>{
      this.AllPrds=prds;
    });
    //this.OrderTotalPriceChange = new EventEmitter<number>();
    this.cart = [];
    this.cartBought = new EventEmitter<CartShopping[]>();
  }

  ngOnChanges(): void {
    this._APIProductService.getProductByCatID(this.sendCategoryID).subscribe((prds)=>{
      this.filterPrd = prds
    });
  }

  BuyProduct(prdName:string,prdPrice:number,quantity:number,neededQuantity:number,id:number){
    for(let i=0;i<this.AllPrds.length;i++){
          if(this.AllPrds[i].id==id){
            if(this.AllPrds[i].quantity>=0){
              this.AllPrds[i].quantity = this.AllPrds[i].quantity-neededQuantity;
            }
          }
        }
    let newprd:CartShopping
    newprd = {name:prdName , price:prdPrice , neededCount:neededQuantity, avaliableQuantity:quantity}
    this.cart.push(newprd);
    this.cartBought.emit(this.cart);
  }

  // Details(id:number){
  //   this.router.navigate(['/productInfo',id]);
  // }

  // BuyPrd(id:number,neededQuanity:any,price:number){
  //   for(let i=0;i<this.prdService.prdList.length;i++){
  //     if(this.prdService.prdList[i].id==id){
  //       if(this.prdService.prdList[i].quantity>=0){
  //         this.prdService.prdList[i].quantity = this.prdService.prdList[i].quantity - Number(neededQuanity) ;
  //       }
  //     }
  //   }
  //   this.totalPrice += neededQuanity* price;
  //   this.OrderTotalPriceChange.emit(this.totalPrice);
  // }

}

