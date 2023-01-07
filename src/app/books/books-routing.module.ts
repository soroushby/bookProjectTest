import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookResolver } from '../resolver/book.resolver';

const routes: Routes = [
  { path: '', component: BooksComponent },
  {
    path: ':id',
    component: BookDetailComponent,
    resolve: {
      book: BookResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
