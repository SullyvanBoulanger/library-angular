import { Component, Input } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookFormComponent } from '../book-form/book-form.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [BookFormComponent, AsyncPipe],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css',
})
export class BookEditComponent {
  subscriptions: Subscription[] = [];
  book$: Observable<Book> = new Observable();

  constructor(private bookService: BookService, private router: Router) {}

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  @Input()
  set id(id: string) {
    this.book$ = this.bookService.getBook(id);
  }

  editBook(updatedBook: Book) {
    if (updatedBook) {

      this.subscriptions.push(
        this.bookService
          .editBook(updatedBook)
          .subscribe(() => this.router.navigate(['book', updatedBook.id]))
      );
    }
  }
}
