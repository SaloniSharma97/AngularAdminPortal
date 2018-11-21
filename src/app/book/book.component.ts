import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/book.service';
import { Book } from '../_services/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
bookList: Book[];
  constructor(private _bookservice: BookService) { }

  ngOnInit() {
    this._bookservice.getBooks().subscribe(result => {
     this.bookList= result; 
     console.log(this.bookList);
  })
  }

}
