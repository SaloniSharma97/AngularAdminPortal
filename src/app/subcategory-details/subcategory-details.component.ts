import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { SubCategory } from '../_services/subcategory';
import { SubCategoryService } from '../_services/subcategory.service';
@Component({
  selector: 'app-subcategory-details',
  templateUrl: './subcategory-details.component.html',
  styleUrls: ['./subcategory-details.component.css']
})
export class SubcategoryDetailsComponent implements OnInit {
  subcategoryList: SubCategory[];
  constructor(private _location: Location,private _subcategoryservice: SubCategoryService,private _routes: ActivatedRoute) { }
  
  ngOnInit() {
    
    this._routes.params.forEach((params: Params) => {
      if(params['SubCategoryId'] !== undefined) {
        var SubCategoryId =+params['SubCategoryId'];
        this._subcategoryservice.getSubCategory(SubCategoryId).subscribe( result => {
          this.subcategoryList=result;
          console.log(this.subcategoryList);
      })
  }
})
  }
  delete(){
    var i;
    var id;
   console.log(this.subcategoryList);
    for(i=0;i < this.subcategoryList.length;i++){
        id=this.subcategoryList[i].SubCategoryId;
        console.log(id);
    }
    console.log(id);
    this._subcategoryservice.deleteSubCategory(id).subscribe( result => {
      console.log(id);
    });
    //console.log(id);
    alert('Book Deleted  Successfully......');
    this._location.back();
    //location.reload();
  }
 }
