import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Book } from '../_services/book';
import { Category } from '../_services/category';
import { SubCategory } from '../_services/subcategory';
import { SubCategoryService } from '../_services/subcategory.service';
import { CategoryService } from '../_services/categoryservice';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  updateBookForm: FormGroup;
  submitted: boolean = false;
  currentBook: Book = new Book();
  bookDetail: Book[];
  bookId: number;
  categoryList: Category[];
  subcategoryList: SubCategory[];
  selected:number;
  selectedsub:number;
  constructor(private _subcategoryservice: SubCategoryService,private _categoryservice: CategoryService,private _bookservice: BookService, private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      console.log(params);
      if (params['bookId'] !== undefined) {
        var BookId = +params['bookId'];
        console.log(BookId);
        this._bookservice.getBook(BookId).subscribe(result => {
          this.bookDetail = result
          console.log(this.bookDetail)
        })
      } 
    })
    // this.bookId=this.bookList.BookId;
    this.updateBookForm = this._formBuilder.group({
      BookTitle: [''],
      Price: [''],
      BookQuantity: [''],
      CategoryId: [''],
      SubCategoryId: [''],
      SupplierId: [''],
      Image: ['']
    })
    this._categoryservice.getCategories().subscribe(result => {
      this.categoryList=result;
      console.log(this.categoryList);
      this._subcategoryservice.getSubCategories().subscribe(result => {
        this.subcategoryList=result;
      })
    })
  }
  fillSub(selected:number){
    alert(selected)
    console.log("in func"+this.selected)
  }
  get f() {
    return this.updateBookForm.controls;
  }

  Update() {
    this.submitted = true;
    if (this.updateBookForm.invalid) {
      return;
    }

    var id = this.bookDetail[0].BookId;
    this.currentBook = this.bookDetail[0];
    this.currentBook.CategoryId=this.selected;
    this.currentBook.SubCategoryId=this.selectedsub;
    this._bookservice.updateBook(id,this.currentBook).subscribe( result => {
      console.log(result);
    });
    console.log(this.currentBook);
    alert('Book Updated Successfully......');
    this._location.back();
    //location.reload();
  }

}
