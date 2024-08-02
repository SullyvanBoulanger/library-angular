import { Component, Input } from '@angular/core';
import { Book } from '../book.model';
import { BookStatus } from '../book-status';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-book-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-item.component.html',
  styleUrl: './book-item.component.css',
})
export class BookItemComponent {
  @Input() book!: Book;
  public BS = BookStatus;
  constructor() {}
}
