import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { AsyncPipe } from '@angular/common';
import { BookItemComponent } from '../book-item/book-item.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [AsyncPipe,BookItemComponent, RouterLink],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books$: Observable<Book[]>;

  constructor(private bookService:BookService){
    this.books$ = this.bookService.getBooks();
  }
}
