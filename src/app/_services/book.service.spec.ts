import { BookService } from "./book.service";

import { async, getTestBed, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('Book Service', () => {

    let service: BookService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [BookService]
        })
    });
    beforeEach(() => {
        injector= getTestBed();
        service= injector.get(BookService);
        httpMock= injector.get(HttpTestingController);
       
    })

    it('Get Book Test', () => {
        const TestBook = [
            { BookId: undefined, BookTitle: "Book1", Price: 100, BookQuantity: 50, CategoryId: 400, SubCategoryId: 500, SupplierId: 1000, Image: "Book1"},
            { BookId: 200, BookTitle: "Book2", Price: 100, BookQuantity: 50, CategoryId: 401, SubCategoryId: 501, SupplierId: 1000, Image: "Book2"},
            { BookId: 200, BookTitle: "Book3", Price: 100, BookQuantity: 50, CategoryId: 402, SubCategoryId: 502, SupplierId: 1000, Image: "Book3"}
        ];
        service.getBooks().subscribe(SubCate => {
            expect(SubCate.length).toBe(3);
            expect(SubCate).toEqual(TestBook);
        });
        const req = httpMock.expectOne('http://localhost:3000/book');
        expect(req.request.method).toBe("GET");
        req.flush(TestBook);

    })
    afterEach(() => {
        httpMock.verify();
    })
})