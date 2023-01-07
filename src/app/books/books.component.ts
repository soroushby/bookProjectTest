import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Observable, finalize } from 'rxjs';
import { Book } from '../interfaces/books';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  // books$: Observable<Book[]> | undefined = this.bookService.allBooks();
  books$: Observable<Book[]> | undefined;

  constructor(
    private bookService: BookService,
    private loadingService: LoadingService
  ) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    const allbooks = this.bookService.allBooks();
    this.books$ = this.loadingService.showLoaderUntilCompleted(allbooks);
  }
}
