import { SubCategoryService } from "./subcategory.service";

import { async, getTestBed, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
describe('SubCategory Service', () => {

    let service: SubCategoryService;
    let injector: TestBed;
    let httpMock: HttpTestingController;
    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SubCategoryService]
        })
    });
    beforeEach(() => {
        injector= getTestBed();
        service= injector.get(SubCategoryService);
        httpMock= injector.get(HttpTestingController);
       
    })

    it('Get SubCategory Test', () => {
        const TestSubCategory = [
            { SubCategoryId: 500, SubCategoryTitle: "Title1", CategoryId: 400 },
            { SubCategoryId: 501, SubCategoryTitle: "Title2", CategoryId: 401 },
            { SubCategoryId: 502, SubCategoryTitle: "Title3", CategoryId: 402 }
        ];
        service.getSubCategories().subscribe(SubCate => {
            expect(SubCate.length).toBe(3);
            expect(SubCate).toEqual(TestSubCategory);
        });
        const req = httpMock.expectOne('http://localhost:3000/subcategory');
        expect(req.request.method).toBe("GET");
        req.flush(TestSubCategory);

    })
    
    afterEach(() => {
        httpMock.verify();
    })
})