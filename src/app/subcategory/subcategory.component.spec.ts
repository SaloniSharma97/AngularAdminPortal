import { TestBed , async} from "@angular/core/testing";
import { SubcategoryComponent } from "./subcategory.component";
import { Injectable } from "@angular/core";
import { HttpClientTestingBackend } from "@angular/common/http/testing/src/backend";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe(' SubCategory Component Testing', () => {
    let debugElement: DebugElement;
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            declarations: [SubcategoryComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers:[]
        }).compileComponents();
    }))

    it('Should Create SubCategory Component', function(){
        const fixture = TestBed.createComponent(SubcategoryComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    })

})