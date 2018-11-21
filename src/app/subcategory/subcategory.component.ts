import { Component, OnInit } from '@angular/core';
import { SubCategoryService } from '../_services/subcategory.service';
import { SubCategory } from '../_services/subcategory';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {
subCategoryList: SubCategory[];
  constructor(private _subcategoryservice: SubCategoryService) { }

  ngOnInit() {
    this._subcategoryservice.getSubCategories().subscribe(result => {
     this.subCategoryList= result; 
     console.log(this.subCategoryList);
  })
  }

}
