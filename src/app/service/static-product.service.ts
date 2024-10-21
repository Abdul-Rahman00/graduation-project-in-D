import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {

  private prdList : IProduct[];
  constructor() {
    this.prdList =[
      {"id":1,"prdName":"Digital Stethoscope","quantity":5,"imgURL":"prd1.png","price":100,"catID":1,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":2,"prdName":"Antiseptic Spray","quantity":0,"imgURL":"prd2.png","price":100,"catID":1,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":3,"prdName":"Cosmetic Containers","quantity":10,"imgURL":"prd4.png","price":200,"catID":1,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":4,"prdName":"Cosmetic Containers","quantity":2,"imgURL":"prd3.png","price":100,"catID":2,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":5,"prdName":"Blue Hand Gloves","quantity":11,"imgURL":"prd5.png","price":100,"catID":2,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":6,"prdName":"Thermometer Gun","quantity":1,"imgURL":"prd6.png","price":100,"catID":3,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":7,"prdName":"Aloevera Food Supliment","quantity":3,"imgURL":"prd7.jpg","price":200,"catID":3,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"},
        {"id":8,"prdName":"First Medicine Aid Kit","quantity":3,"imgURL":"prd8.jpg","price":200,"catID":3,"description":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vero enim iusto sunt consequuntur fugit nisi ad adipisci modi eligendi dignissimos minima tempora animi, odit similique? Velit quaerat a unde!"}
    ]
  }

  getProduct():IProduct[]{
    return this.prdList;
  }

  getProductByCatID(catID:number):IProduct[]{
    if(catID == 0){
      return this.prdList;
    }else{
      return this.prdList.filter((prd)=>catID==prd.catID);
    }
  }

  getProductByID(id:number):IProduct | null{
    let foundPrd = this.prdList.find(prd=>prd.id==id)
    return foundPrd? foundPrd:null
  }

  getPrdIDs():number[]{
    return this.prdList.map(prd=>prd.id)
  }

  removeProductByID(id:number){
    for(let i=0;i<this.prdList.length;i++){
      if(this.prdList[i].id==id){
        this.prdList.splice(i,1);
      }
    }
  }

  addProduct(prd:IProduct){
    this.prdList.push(prd);
  }

  updateProduct(prd:IProduct,id:number){
    for(let i=0;i<this.prdList.length;i++){
      if(this.prdList[i].id==id){
        this.prdList[i].prdName == prd.prdName;
        this.prdList[i].price == prd.price;
        this.prdList[i].quantity == prd.quantity;
        this.prdList[i].imgURL == prd.imgURL;
        this.prdList[i].catID == prd.catID;
      }
    }
  }

  updateQuantityOFprd(quantity:number){
    for(let i=0;i<this.prdList.length;i++){
      if(this.prdList[i].quantity==quantity){
      }
    }
  }

}
