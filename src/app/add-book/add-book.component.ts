import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
} from '@angular/forms';
import { BookStatus, BookStatusLabelMapping } from '../book-status';
import { BookService } from '../book.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Book } from '../book.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css',
})
export class AddBookComponent {
  public BS = Object.values(BookStatus);
  public bsLabels = BookStatusLabelMapping;
  subscriptions: Subscription[] = [];
  bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required],
    status: [BookStatus.AVAILABLE, Validators.required],
  });

  constructor(
    private bookService: BookService,
    private formBuilder: NonNullableFormBuilder,
    private router: Router
  ) {}

  ngOnDestroy() {
    console.log('Je me détruis');
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  onSubmit() {
    const newBook: Book = {
      id: '',
      title: this.bookForm.value.title || '',
      author: this.bookForm.value.author || '',
      description: this.bookForm.value.description || '',
      status: this.bookForm.value.status || BookStatus.AVAILABLE,
    };
    this.subscriptions.push(
      this.bookService
        .addBook(newBook)
        .subscribe(() => this.router.navigate(['books']))
    );
  }
}
