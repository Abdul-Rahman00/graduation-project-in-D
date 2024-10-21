import { IProduct } from './../Models/iproduct';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';
import { AllProductsComponent } from "../all-products/all-products.component";
import { ApiProductService } from '../service/api-product.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, AllProductsComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  PrdbyCat:IProduct[]=[];
  prdcat=1;
  constructor(private _APIProductService:ApiProductService){}
  ngOnInit(): void {
    this._APIProductService.getProductByCatID(this.prdcat).subscribe({
      next:(res)=>{
        this.PrdbyCat=res
      },
      error:(err)=>
        console.log(err)
    });

    // //  //  //  //  //  //  //  //  //
  }
}
