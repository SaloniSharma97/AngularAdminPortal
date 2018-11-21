import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { AuthGuard } from './_guards';
import { CategoryComponent } from './category/category.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { BookComponent } from './book/book.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { SubcategoryDetailsComponent } from './subcategory-details/subcategory-details.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { AddSubcategoryComponent } from './add-subcategory/add-subcategory.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';
import { UpdateSubcategoryComponent } from './update-subcategory/update-subcategory.component';
import { BookbycategoryComponent } from './bookbycategory/bookbycategory.component';

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    {
        path: '', component: HomeComponent, canActivate:[AuthGuard] ,children: [
            { path: 'category', component: CategoryComponent },
            { path: 'subcategory', component: SubcategoryComponent},
            { path: 'book', component: BookComponent},
            { path: 'book-details/:BookId', component: BookDetailsComponent},
            { path: 'category-details/:CategoryId', component: CategoryDetailsComponent},
            { path: 'subcategory-details/:SubCategoryId', component: SubcategoryDetailsComponent}, 
            { path:'addbook', component: AddBookComponent},
            { path:'addcategory', component: AddCategoryComponent},
            { path:'addsubcategory', component: AddSubcategoryComponent},
            { path:'update/:bookId', component: UpdateBookComponent},
            { path:'updatecategory/:categoryId', component: UpdateCategoryComponent},
            { path:'updatesubcategory/:subcategoryId', component: UpdateSubcategoryComponent},
            { path:'bookbycategory', component: BookbycategoryComponent},
            { path:'getbookbyid/:categoryId', component: BookbycategoryComponent}
        ]
    },


   

    // otherwise redirect to home
    { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);