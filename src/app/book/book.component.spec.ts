import { TestBed , async} from "@angular/core/testing";
import { BookComponent } from "./book.component";
import { Injectable } from "@angular/core";
import { HttpClientTestingBackend } from "@angular/common/http/testing/src/backend";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe(' Book Component Testing', () => {
    let debugElement: DebugElement;
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            declarations: [BookComponent],
            imports: [HttpClientTestingModule, RouterTestingModule],
            providers:[]
        }).compileComponents();
    }))

    it('Should Create Book Component', function(){
        const fixture = TestBed.createComponent(BookComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    })

})