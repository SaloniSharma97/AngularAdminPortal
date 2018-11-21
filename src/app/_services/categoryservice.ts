
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Category } from "./category";
const httpOptions = {
    headers:new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
    providedIn: 'root'
})
export class CategoryService{
    title: string = 'Category Details';

    constructor(private _http: HttpClient){}

    getCategories():Observable<Category[]>{
        return  this._http.get<Category[]>('http://localhost:3000/category');
 
      
       }
       getCategory(CategoryId:number):Observable<Category[]>{
           return this._http.get<Category[]>('http://localhost:3000/category/'+CategoryId);
       }
       addCategory(category:Category):Observable<Category>{
        return this._http.post<Category>('http://localhost:3000/category1/',category,httpOptions);
    }
  deleteCategory(id:number):Observable<Category[]>{
        return this._http.delete<Category[]>('http://localhost:3000/category/'+id);
    }

    updateCategory(CategoryId:number,category:Category):Observable<Category[]>{
        return this._http.put<Category[]>('http://localhost:3000/category/'+CategoryId,category,httpOptions);
    }
}