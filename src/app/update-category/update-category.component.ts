import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Category } from '../_services/category';
import { CategoryService } from '../_services/categoryservice';
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  updatecategoryForm: FormGroup;
  submitted: boolean = false;
  currentCategory: Category = new Category();
  categoryDetail: Category[];
  categoryId: number;
  selected: number;
  constructor(private _categoryservice: CategoryService, private _formBuilder: FormBuilder, private _route: ActivatedRoute, private _location: Location) { }

  ngOnInit() {
    this._route.params.forEach((params: Params) => {
      console.log(params);
      if (params['categoryId'] !== undefined) {
        var CategoryId = +params['categoryId'];
        console.log(CategoryId);
        this._categoryservice.getCategory(CategoryId).subscribe(result => {
          this.categoryDetail = result
          console.log(this.categoryDetail)
        })
      } 
    })
    this.updatecategoryForm = this._formBuilder.group({
      CategoryTitle: ['']
    })
  }
  get f() {
    return this.updatecategoryForm.controls;
  }
  fillSub(selected:number){
    alert(selected)
    console.log("in func"+this.selected)
  }
  UpdateCategory() {
    this.submitted = true;
    if (this.updatecategoryForm.invalid) {
      return;
    }

    var id = this.categoryDetail[0].CategoryId;
    this.currentCategory = this.categoryDetail[0];

    this._categoryservice.updateCategory(id,this.currentCategory).subscribe( result => {
      console.log(result);
      alert('Category Updated Successfully......');
    });
    console.log(this.currentCategory);
    console.log(id);
    
    this._location.back();
    //location.reload();
  }

}
