import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { CategoryComponent } from './category/category.component';;
import { SubcategoryComponent } from './subcategory/subcategory.component'
;
import { BookComponent } from './book/book.component'
;
import { BookDetailsComponent } from './book-details/book-details.component'
;
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SubcategoryDetailsComponent } from './subcategory-details/subcategory-details.component';;
import { AddBookComponent } from './add-book/add-book.component'
;
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';;
import { UpdateBookComponent } from './update-book/update-book.component'
;
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateSubcategoryComponent } from './update-subcategory/update-subcategory.component';
import { BookbycategoryComponent } from './bookbycategory/bookbycategory.component';
@NgModule({
    imports: [
        HttpClientModule,
        BrowserModule,
        RouterModule.forRoot(appRoutes,{onSameUrlNavigation: 'reload'}),
        ReactiveFormsModule,
        FormsModule,
        CommonModule

    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
,
        CategoryComponent ,
        SubcategoryComponent ,
        BookComponent ,
        BookDetailsComponent ,
        CategoryDetailsComponent,
        SubcategoryDetailsComponent,
        AddSubcategoryComponent,
        AddCategoryComponent,
        AddBookComponent,
        UpdateSubcategoryComponent,
        UpdateCategoryComponent,
        UpdateBookComponent,
    BookbycategoryComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }