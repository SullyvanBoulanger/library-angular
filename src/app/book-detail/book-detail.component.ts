import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book.model';
import { BookService } from '../book.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { BookStatus } from '../book-status';

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
  constructor(
    private bookService: BookService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  @Input()
  set id(id: string) {
    this.book$ = this.bookService.getBook(id);
  }
  removeBook(id: string){
    this.bookService.removeBook(id).subscribe(() => this.router.navigate(['books']));
  }
}
