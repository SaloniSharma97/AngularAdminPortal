import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubCategory } from '../_services/subcategory';
import { SubCategoryService } from '../_services/subcategory.service';
import { Category } from '../_services/category';
import { CategoryService } from '../_services/categoryservice';
@Component({
  selector: 'app-add-subcategory',
  templateUrl: './add-subcategory.component.html',
  styleUrls: ['./add-subcategory.component.css']
})
export class AddSubcategoryComponent implements OnInit {
  addSubCategoryForm: FormGroup;
  submitted: boolean = false;
  currentSubCategory: SubCategory = new SubCategory();
  selected: number;
  categoryList: Category[];
  subcategoryDetail: SubCategory[];
  subcategoryId: number;
  constructor(private _formbuilder: FormBuilder,
    private _subcategoryservice: SubCategoryService,
    private _location: Location,
    private _categoryservice: CategoryService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this.addSubCategoryForm=this._formbuilder.group({
      SubCategoryTitle: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
      //CategoryId: ['', Validators.required]
      //Name:['', [Validators.required, Validatore.minlength(6)]]
    })
    this._categoryservice.getCategories().subscribe(result => {
      this.categoryList=result;
      console.log(this.categoryList);
    })
  }

  get f() {
    return this.addSubCategoryForm.controls;
  }
  fillSub(selected:number){
    alert(selected)
    console.log("in func"+this.selected)
  }
  AddSubCategory() {
    this.submitted = true;
    if(this.addSubCategoryForm.invalid) {
      return;
    }
    console.log(this.currentSubCategory);
    
    var id = this.subcategoryDetail[0].SubCategoryId;
    this.currentSubCategory = this.subcategoryDetail[0];
    this.currentSubCategory.CategoryId=this.selected;
    this._subcategoryservice.addSubCategory(this.currentSubCategory).subscribe(result => {
      console.log(result); 
      console.log('Record Inserted Successfully..');
    })
    console.log(this.currentSubCategory);
    console.log(id);
    alert('SubCategory Added Successfully......');
    this._location.back();
    //location.reload();
  }

}
