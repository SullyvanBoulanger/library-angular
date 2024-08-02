import { Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { AddBookComponent } from './add-book/add-book.component';

export const routes: Routes = [
    {path: '', redirectTo: 'books', pathMatch:'full'},
    {path: 'books', component:BookListComponent},
    {path: 'add-book', component:AddBookComponent},
    
];
