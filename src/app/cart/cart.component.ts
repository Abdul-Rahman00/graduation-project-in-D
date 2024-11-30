import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import {EGPtoUSDPipe} from '../Pipe/egpto-usd.pipe';
import { CartShopping } from '../ViewModels/cart-shopping';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, EGPtoUSDPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  items:CartShopping[]=[];

  constructor(private _cartService: CartService){}   

  ngOnInit(): void {
    this._cartService.getItems()
  }

  
}


