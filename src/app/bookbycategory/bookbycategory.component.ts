import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/categoryservice';
import { Category } from '../_services/category';
import { ActivatedRoute, Params } from '@angular/router';
import { BookService } from '../_services/book.service';
import { Book } from '../_services/book';

@Component({
  selector: 'app-bookbycategory',
  templateUrl: './bookbycategory.component.html',
  styleUrls: ['./bookbycategory.component.css']
})
export class BookbycategoryComponent implements OnInit {
categoryList: Category[];
bookList: Book[];
  constructor(private _bookservice: BookService,private _route: ActivatedRoute,private _categoryservice: CategoryService) { }

  ngOnInit() {
    this._categoryservice.getCategories().subscribe(result => {
     this.categoryList= result; 
     console.log(this.categoryList);
     
  })
  
 this._bookservice.getBooks().subscribe(result =>{
  this.bookList=result;
})

}
  
  getBooks(){
    var i;
    var id;
   console.log(this.categoryList);
    for(i=0;i < this.categoryList.length;i++){
        id=this.categoryList[i].CategoryId;
        console.log(id);
    }
    this._route.params.forEach((params: Params) => {
       console.log(params);
      if(params['categoryId'] !== undefined) {
        var CategoryId =+params['categoryId'];
        this._bookservice.getBookByCategory(CategoryId).subscribe(result => {
          this.bookList=result;
          console.log(result);
        }) 
      } else {
        console.log('Done');
      }
    })
    
    
  }
}

