import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BookFormComponent } from '../book-form/book-form.component';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-add',
  standalone: true,
  imports: [ReactiveFormsModule, BookFormComponent],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css',
})
export class BookAddComponent {
  subscriptions: Subscription[] = [];
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnDestroy() {
    console.log('Je me détruis');
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  addBook(newBook: Book) {
    if (newBook) {
      console.log(newBook);

      this.subscriptions.push(
        this.bookService
          .addBook(newBook)
          .subscribe(() => this.router.navigate(['books']))
      );
    }
  }
}
