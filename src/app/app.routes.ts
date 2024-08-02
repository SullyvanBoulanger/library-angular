import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDetailComponent } from './book-detail/book-detail.component';

export const routes: Routes = [
    {path: '', redirectTo: 'books', pathMatch:'full'},
    {path: 'books', component:BookListComponent},
    {path: 'add-book', component:BookAddComponent},
    {path: 'edit-book', component:BookEditComponent},
    {path: 'book/:id', component:BookDetailComponent},
];
