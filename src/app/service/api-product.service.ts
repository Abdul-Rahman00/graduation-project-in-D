import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductService {

  httpOption
  
  constructor(private _httpClient:HttpClient) {
    this.httpOption = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json'
        // ,Authorization : 'my-auth-token'
      })
    };
  }

  getAllProducts():Observable<IProduct[]>{
    return this._httpClient.get<IProduct[]>("http://localhost:3000/Products");
  }

  getProductByCatID(catid:number):Observable<IProduct[]>{
    if(catid==0){
      return this._httpClient.get<IProduct[]>("http://localhost:3000/Products");
    }else{
      ttp://localhost:3000/Products?catID=${catID}
      return this._httpClient.get<IProduct[]>(`http://localhost:3000/Products?catID=${catid}`);
    }
  }

  getProductByID(prdID:number):Observable<IProduct>{
    if(prdID==0){
      return this._httpClient.get<IProduct>("http://localhost:3000/Products");
    }else{
    return this._httpClient.get<IProduct>(`http://localhost:3000/Products?id=${prdID}`);
    }
  }

  // getPrdIDs():number[]{
  //   return this._httpClient.get<number[]>('')
  // }

  DeleteProudct(prdId:number){
    this._httpClient.delete(`http://localhost:3000/Products/${prdId}`);
  }

  // UpdateProduct(prdId:number,updatePrd:IProduct):Observable<IProduct>{
  //   return 
  // }

  AddProduct(newPrd:IProduct):Observable<IProduct>{
    return  this._httpClient
    .post<IProduct>(`http://localhost:3000/Products`,JSON.stringify(newPrd),this.httpOption)
    // .pipe(
    //   retry(2),
    //   catchError((err)=>{
    //     console.log(err);
    //     return throwError(()=> new Error('Error occur'));
    //   })
    // )
  }


}
