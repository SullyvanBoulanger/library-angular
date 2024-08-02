import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private apiUrl = 'http://localhost:3000/books';
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }
  
  getBook(id: string): Observable<Book> {
    return this.http.get<Book>(`${this.apiUrl}/${id}`);
  }

  addBook({ id, ...book }: Book): Observable<void> {
    const newBook = {
      ...book,
      status: `${book.status}`,
    };

    return this.http.post<void>(this.apiUrl, newBook);
  }

  editBook(book: Book) {
    return this.http.put<void>(`${this.apiUrl}/${book.id}`, book);
  }
  removeBook(id:string){
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
