import { Injectable } from '@angular/core';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class StaticCategoryService {

  catogry: ICategory[];

  constructor() {
    this.catogry = [{id:1,name:'Mobile'},{id:2,name:'Laptop'},{id:3,name:'Tab'}]
  }

  getCategory():ICategory[]{
    return this.catogry;
  }
}
