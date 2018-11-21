

import { async, getTestBed, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryService } from "./categoryservice";
describe('Category Service', () => {

    let service: CategoryService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [CategoryService]
        })
    });
    beforeEach(() => {
        injector= getTestBed();
        service= injector.get(CategoryService);
        httpMock= injector.get(HttpTestingController); 
    })

    it('Get Category Test', () => {
        const TestCategory = [
            { CategoryId: 400, CategoryTitle: "Title1" },
            { CategoryId: 401, CategoryTitle: "Title2" },
            { CategoryId: 402, CategoryTitle: "Title3" }
        ];
        service.getCategories().subscribe(Cate => {
            expect(Cate.length).toBe(3);
            expect(Cate).toEqual(TestCategory);
        });
        const req = httpMock.expectOne('http://localhost:3000/category');
        expect(req.request.method).toBe("GET");
        req.flush(TestCategory);

    })
    afterEach(() => {
        httpMock.verify();
    })
})