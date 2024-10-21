import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../service/static-product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../Models/iproduct';
import { Location } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ApiProductService } from '../service/api-product.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{

  RecivedPrdID:number=0
  RecivedProduct :IProduct | null = null;

  currentIndex:number=0
  prdIDs: number[]=[];
  AllPrd:IProduct[]=[]
  constructor(private _APIProductService:ApiProductService,
              private _StaticProductService:StaticProductService,
              private _activatedRoute:ActivatedRoute,
              private _router:Router,
              private _location:Location){
  }
  ngOnInit(): void {
    // 3lshan f kol mra y7sl t3'er ygeb el url w y3'er el product
    this._activatedRoute.paramMap.subscribe((paramMap)=>[
      this.RecivedPrdID = Number(paramMap.get('pid')),
      this.RecivedProduct = this._StaticProductService.getProductByID(this.RecivedPrdID)
      // this._APIProductService.getProductByID(this.RecivedPrdID).subscribe({
      //   next:(res)=>{
      //     this.RecivedProduct=res
      //   },
      //   error:(err)=>
      //     console.log(err)
      // })
    ]);
    console.log(this.RecivedPrdID);
    console.log(this.RecivedProduct);
    
    
    this.prdIDs = this._StaticProductService.getPrdIDs();
    // this._APIProductService.getAllProducts().subscribe((prds)=>{
    //   this.AllPrd = prds
    // });
    // this.prdIDs = this.AllPrd.map(prd=>prd.id)
    
    // this.RecivedPrdID = Number(this._activatedRoute.snapshot.paramMap.get('pid'));
    // this.RecivedProduct = this._StaticProductService.getProductByID(this.RecivedPrdID);
  }

  GoBack(){
    this._location.back();
  }
  PreviousPrd(){
    this.currentIndex = this.prdIDs.findIndex(elem=>elem==this.RecivedPrdID);
    let prevPrdID;
    if(this.currentIndex>0)
    {
      prevPrdID = this.prdIDs[this.currentIndex-1];
      this._router.navigate(['/productInfo',prevPrdID]);
    }
  }
  NextPrd(){
    this.currentIndex = this.prdIDs.findIndex(elem=>elem==this.RecivedPrdID);
    let prevPrdID;
    if(this.currentIndex<this.prdIDs.length)
    {
      prevPrdID = this.prdIDs[this.currentIndex+1];
      this._router.navigate(['/productInfo',prevPrdID]);
    }
  }
  
}
