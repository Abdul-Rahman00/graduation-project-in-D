import { ApiProductService } from './../service/api-product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-all-products',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.css'
})
export class AllProductsComponent implements OnInit{

  filterPrd:IProduct[]=[];
  constructor(private _ApiProductService:ApiProductService){
  }
  ngOnInit(): void {
    
    this._ApiProductService.getAllProducts().subscribe({
      next:(res)=>{
        this.filterPrd=res
      },
      error:(err)=>
        console.log(err)
    });
  }

}
