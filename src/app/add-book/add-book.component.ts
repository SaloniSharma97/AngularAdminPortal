import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Book } from '../_services/book';
import { Category } from '../_services/category';
import { SubCategory } from '../_services/subcategory';
import { BookService } from '../_services/book.service';
import { SubCategoryService } from '../_services/subcategory.service';
import { CategoryService } from '../_services/categoryservice';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  addBookForm: FormGroup;
  submitted: boolean = false;
  currentBook: Book = new Book();
  categoryList: Category[];
  subcategoryList: SubCategory[];
  selected:number;
  selectedsub:number;
  constructor(private _formBuilder: FormBuilder,private _bookservice: BookService, private _location: Location, private _subcategoryservice: SubCategoryService, private _categoryservice: CategoryService) { }

  ngOnInit() {
    this.addBookForm = this._formBuilder.group({
      BookTitle: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Price: ['', Validators.required],
      BookQuantity: ['', Validators.required],
      CategoryId: [''],
      SubCategoryId: [''],
      SupplierId: ['', Validators.required],
      Image: ['', Validators.required]
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
    return this.addBookForm.controls;
  }

  AddBook() {
    this.submitted = true;
    if (this.addBookForm.invalid) {
      return;
    }
    console.log(this.currentBook);
     this.currentBook.CategoryId=this.selected;
    this.currentBook.SubCategoryId=this.selectedsub;
    this._bookservice.addBook(this.currentBook).subscribe(result => {
      console.log(this.currentBook);
      
    }, error => { console.log(error) })
    alert('Book Added Successfully......');
    this._location.back();
    //location.reload();
  }

}
