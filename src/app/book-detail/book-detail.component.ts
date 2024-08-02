import { AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BookStatus } from '../book-status';
import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [AsyncPipe, RouterLink],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  public BS = BookStatus;

  book$: Observable<Book> = new Observable();

  private subscriptions: Subscription[] = [];

  constructor(private bookService: BookService, private router: Router) {}

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  @Input()
  set id(id: string) {
    this.book$ = this.bookService.getBook(id);
  }

  removeBook(id: string) {
    this.subscriptions.push(
      this.bookService
        .removeBook(id)
        .subscribe(() => this.router.navigate(['books']))
    );
  }
}
