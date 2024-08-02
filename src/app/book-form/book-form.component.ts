import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { BookStatus, BookStatusLabelMapping } from '../book-status';
import { Book } from '../book.model';

@Component({
  selector: 'app-book-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './book-form.component.html',
  styleUrl: './book-form.component.css',
})
export class BookFormComponent {
  public BS = Object.values(BookStatus);
  public bsLabels = BookStatusLabelMapping;

  @Input() defaultBook?: Book;
  @Output() onSubmit = new EventEmitter<Book>();
  bookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    description: ['', Validators.required],
    status: [BookStatus.AVAILABLE, Validators.required],
  });

  constructor(private formBuilder: NonNullableFormBuilder) {}

  ngOnInit() {
    console.log(this.defaultBook);
    if (this.defaultBook) {
      console.log('defaultBook');

      const {id, ...book} = this.defaultBook;
      this.bookForm.setValue(book);
    }
  }

  submit() {
    const book: Book = {
      id: this.defaultBook?.id || '',
      title: this.bookForm.value.title || '',
      author: this.bookForm.value.author || '',
      description: this.bookForm.value.description || '',
      status: this.bookForm.value.status || BookStatus.AVAILABLE,
    };
    this.onSubmit.emit(book);
  }
}
