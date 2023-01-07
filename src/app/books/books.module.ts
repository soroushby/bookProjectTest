import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book/book.component';
import { MaterialModule } from '../shared/material/material.module';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [BooksComponent, BookDetailComponent, BookComponent, LoadingComponent],
  imports: [CommonModule, BooksRoutingModule, MaterialModule],
})
export class BooksModule {}
