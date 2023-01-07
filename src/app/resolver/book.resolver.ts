import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BookService } from '../services/book.service';
import { Book } from '../interfaces/books';
import { BookDetail } from '../interfaces/book-detail';

@Injectable({
  providedIn: 'root',
})
export class BookResolver implements Resolve<any> {
  constructor(private bookService: BookService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<BookDetail> {
    const bookId = route.paramMap.get('id');
    return this.bookService.book(bookId);
  }
}
