import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import {EGPtoUSDPipe} from '../Pipe/egpto-usd.pipe';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, EGPtoUSDPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


  constructor(private _cartService: CartService){}

  items = this._cartService.getItems();
  
}


