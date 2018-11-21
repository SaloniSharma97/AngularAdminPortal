import { Injectable } from "@angular/core";
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";
import { SubCategory } from "./subcategory";
const httpOptions = {
    headers:new HttpHeaders({ 'Content-Type': 'application/json'})
}
@Injectable({
    providedIn: 'root'
})
export class SubCategoryService{
    title: string = 'SubCategory Details';

    constructor(private _http: HttpClient){}

    getSubCategories():Observable<SubCategory[]>{
        return  this._http.get<SubCategory[]>('http://localhost:3000/SubCategory');
    
      
       }
       getSubCategory(SubCategoryId:number):Observable<SubCategory[]>{
           return this._http.get<SubCategory[]>('http://localhost:3000/SubCategory/'+SubCategoryId);
       }
       addSubCategory(subcategory:SubCategory):Observable<SubCategory>{
           return this._http.post<SubCategory>('http://localhost:3000/SubCategory1',subcategory,httpOptions)
       }
       deleteSubCategory(id:number):Observable<SubCategory[]>{
        return this._http.delete<SubCategory[]>('http://localhost:3000/subcategory/'+id);
       
    }
      updateSubcategory(SubcategoryId:number,subcategory:SubCategory):Observable<SubCategory[]>{
          return this._http.put<SubCategory[]>('http://localhost:3000/subcategory/'+SubcategoryId,subcategory,httpOptions);
      }
}