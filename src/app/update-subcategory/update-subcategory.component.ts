import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubCategory } from '../_services/subcategory';
import { SubCategoryService } from '../_services/subcategory.service';
import { Category } from '../_services/category';
import { CategoryService } from '../_services/categoryservice';
@Component({
  selector: 'app-update-subcategory',
  templateUrl: './update-subcategory.component.html',
  styleUrls: ['./update-subcategory.component.css']
})
export class UpdateSubcategoryComponent implements OnInit {
  updatesubcategoryForm: FormGroup;
  submitted: boolean = false;
  currentsubCategory: SubCategory = new SubCategory();
  subcategoryDetail: SubCategory[];
  subcategoryId: number;
  selected: number;
  categoryList: Category[];
  constructor(private _categoryservice: CategoryService,private _subcategoryservice: SubCategoryService, private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      console.log(params);
      if (params['subcategoryId'] !== undefined) {
        var SubCategoryId = +params['subcategoryId'];
        console.log(SubCategoryId);
        this._subcategoryservice.getSubCategory(SubCategoryId).subscribe(result => {
          this.subcategoryDetail = result;
          console.log(this.subcategoryDetail)
        })
      } 
    })
    this.updatesubcategoryForm = this._formBuilder.group({
      SubCategoryTitle: [''],
      CategoryId: ['']
    })
    this._categoryservice.getCategories().subscribe(result => {
      this.categoryList=result;
      console.log(this.categoryList);
    })
  }
  get f() {
    return this.updatesubcategoryForm.controls;
  }
  fillSub(selected:number){
    alert(selected)
    console.log("in func"+this.selected)
  }
  UpdateSubCategory() {
    this.submitted = true;
    if (this.updatesubcategoryForm.invalid) {
      return;
    }

    var id = this.subcategoryDetail[0].SubCategoryId;
    this.currentsubCategory = this.subcategoryDetail[0];
    this.currentsubCategory.CategoryId=this.selected;
    this._subcategoryservice.updateSubcategory(id,this.currentsubCategory).subscribe( result => {
      console.log(result);
      
    });
    console.log(this.currentsubCategory);
    console.log(id);
    alert('SubCategory Updated Successfully......');
    this._location.back();
    
  }

}
