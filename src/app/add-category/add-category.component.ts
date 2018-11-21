import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Location } from '@angular/common';
import { Category } from '../_services/category';
import { CategoryService } from '../_services/categoryservice';
@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  addCategoryForm: FormGroup;
  submitted: boolean = false;
  currentCategory: Category = new Category();

  constructor(private _formBuilder: FormBuilder,private _categoryservice: CategoryService,private _location: Location) { }

  ngOnInit() {
     this.addCategoryForm=this._formBuilder.group({
       CategoryTitle: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]]
       //Name:['', [Validators.required, Validatore.minlength(6)]]
     })
  }
 
  get f() {
    return this.addCategoryForm.controls;
  }

  AddCategory() {
    this.submitted = true;
    if(this.addCategoryForm.invalid) {
      return;
    }
    console.log(this.currentCategory);
    this._categoryservice.addCategory(this.currentCategory).subscribe(result => {
        console.log('Record Inserted Successfully..');
    })
    alert('Category Added Successfully......');
    this._location.back();
    //location.reload();
  }
}
