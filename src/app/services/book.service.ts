import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  debounceTime,
  finalize,
  map,
  shareReplay,
  timer,
} from 'rxjs';
import { Book } from '../interfaces/books';
import { BookDetail } from '../interfaces/book-detail';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(
    private http: HttpClient,
    private loadingService: LoadingService
  ) {}

  allBooks(): Observable<Book[]> {
    return this.http.get<any>('https://api.itbook.store/1.0/new').pipe(
      map((books) => books['books']),
      shareReplay()
    );
  }

  book(courseid: any) {
    return this.http
      .get<BookDetail>(`https://api.itbook.store/1.0/books/${courseid}`)
      .pipe(shareReplay());
  }
}
