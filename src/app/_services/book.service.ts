import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Book } from "./book";

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}
@Injectable({
    providedIn: 'root'
})
export class BookService {
    title: string = 'Book Details';
    bookId: number;
    constructor(private _http: HttpClient) { }

    getBooks():Observable<Book[]>{
        return  this._http.get<Book[]>('http://localhost:3000/book');
 
      
       }
       getBook(BookId:number):Observable<Book[]>{
           console.log(BookId);
           return this._http.get<Book[]>('http://localhost:3000/book/'+BookId);
       }
         addBook(book:Book):Observable<Book>{
             console.log(book)
             return this._http.post<Book>('http://localhost:3000/books/',book,httpOptions)
         }
         deleteBook(id:number):Observable<Book[]>{
              return this._http.delete<Book[]>('http://localhost:3000/book/'+ id);
         }
         updateBook(BookId:number,book:Book):Observable<Book[]>{
          
             return this._http.put<Book[]>('http://localhost:3000/book/'+BookId,book,httpOptions)
 
         }
         getBookByCategory(CategoryId:number):Observable<Book[]>{
             return this._http.get<Book[]>('http://localhost:3000/bookbycategory/'+CategoryId);
 
         }
}