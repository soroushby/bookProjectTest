import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookDetail } from 'src/app/interfaces/book-detail';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  book: BookDetail | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.book = this.route.snapshot.data['book'];
    console.log('component details', this.book);
  }

  onBack() {
    return this.router.navigateByUrl('/books');
  }
}
