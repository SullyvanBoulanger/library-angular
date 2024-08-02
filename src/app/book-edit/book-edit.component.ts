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
  book?: Book;
  constructor(private bookService: BookService, private router: Router) {}

  ngOnDestroy() {
    console.log('Je me détruis');
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }
  @Input()
  set id(id: string) {
    this.subscriptions.push(
      this.bookService.getBook(id).subscribe((book) => (this.book = book))
    );
  }
  editBook(updatedBook: Book) {
    if (updatedBook) {
      console.log(updatedBook);

      this.subscriptions.push(
        this.bookService
          .editBook(updatedBook)
          .subscribe(() => this.router.navigate(['books']))
      );
    }
  }
}
