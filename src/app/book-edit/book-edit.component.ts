import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { Book } from '../book.model';
import { BookFormComponent } from "../book-form/book-form.component";

@Component({
  selector: 'app-book-edit',
  standalone: true,
  imports: [BookFormComponent],
  templateUrl: './book-edit.component.html',
  styleUrl: './book-edit.component.css'
})
export class BookEditComponent {
  subscriptions: Subscription[] = [];
  constructor(
    private bookService: BookService,
    private router: Router
  ) {}

  ngOnDestroy() {
    console.log('Je me détruis');
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
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
