import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BookStatus } from '../book-status';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css',
})
export class BookDetailComponent {
  public BS = BookStatus;
  book$: Observable<Book> = new Observable();
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute
  ) {}

  @Input()
  set id(id: string) {
    this.book$ = this.bookService.getBook(id);
  }
}