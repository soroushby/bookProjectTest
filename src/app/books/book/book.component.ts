import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/books';
import { BookDetailComponent } from '../book-detail/book-detail.component';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input() book!: Book;

  constructor(private router: Router) {}

  onBookDetail(id: any) {
    this.router.navigate(['books', id]);
  }
}
