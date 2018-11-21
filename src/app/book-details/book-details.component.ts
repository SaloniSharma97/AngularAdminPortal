import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { from } from 'rxjs';
import { PARAMETERS } from '@angular/core/src/util/decorators';

import { Location } from '@angular/common';
import { Book } from '../_services/book';
import { BookService } from '../_services/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  bookDetail: Book[];
  bookId: number;
  id: number;
  constructor(private _bookservice: BookService,private _route: ActivatedRoute,private _location: Location) { }

  ngOnInit() {
    // this.bookId=this.bookDetail.BookId;
    
    this._route.params.forEach((params: Params) => {
      if(params['BookId'] !== undefined) {
        var BookId =+params['BookId'];
        this._bookservice.getBook(BookId).subscribe( result => {
        this.bookDetail=result;
        console.log(this.bookDetail);
        })
      } else {
        console.log('Done');
      }
    })
  }
  
  
  delete() {
    var i;
    var id;
   console.log(this.bookDetail);
    for(i=0;i < this.bookDetail.length;i++){
        id=this.bookDetail[i].BookId;
        console.log(id);
    }
    console.log(id);
    this._bookservice.deleteBook(id).subscribe( result => {
      console.log(id);
    })
    //console.log(id);
    alert('Book Deleted  Successfully......');
    this._location.back();
    //location.reload();
  }

}
