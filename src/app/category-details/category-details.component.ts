import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from '../_services/categoryservice';
import { Category } from '../_services/category';
import { Location } from '@angular/common';
@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  categoryDetail: Category[];
  constructor(private _location: Location,private _routes: ActivatedRoute,private _categoryservice: CategoryService) { }

  ngOnInit() {
    this._routes.params.forEach((params: Params) => {
      if(params['CategoryId'] !== undefined) {
        var CategoryId =+params['CategoryId'];
        this._categoryservice.getCategory(CategoryId).subscribe( result => {
          this.categoryDetail=result;
          console.log(this.categoryDetail);
      })
  }
})
  }
  delete(){
    var i;
    var id;
   console.log(this.categoryDetail);
    for(i=0;i < this.categoryDetail.length;i++){
        id=this.categoryDetail[i].CategoryId;
        console.log(id);
    }
    console.log(id);
    this._categoryservice.deleteCategory(id).subscribe( result => {
      console.log(id);
    });
    //console.log(id);
    alert('Book Deleted  Successfully......');
    this._location.back();
    //location.reload();
  }
}
