import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoryService {

  constructor(private _httpClient:HttpClient) { }

  getAllCategories():Observable<ICategory>{
    return this._httpClient.get<ICategory>(`http://localhost:3000/Categories`);
  }
}
