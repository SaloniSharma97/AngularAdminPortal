import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../_services/categoryservice';
import { Category } from '../_services/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
categoryList: Category[];
  constructor(private _categoryservice: CategoryService) { }

  ngOnInit() {
    this._categoryservice.getCategories().subscribe(result => {
     this.categoryList= result; 
     console.log(this.categoryList);
  })
  }

}
