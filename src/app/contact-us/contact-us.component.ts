import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    date: [new Date(), [Validators.required]],
    bookType: ['', [Validators.required]],
    price: ['', [Validators.required]],
    terms: [false, [Validators.required]],
  });

  bookTypes: any = [
    { value: 'comedy', viewValue: 'Comedy' },
    { value: 'political', viewValue: 'Political' },
    { value: 'math', viewValue: 'Math' },
    { value: 'history', viewValue: 'History' },
    { value: 'drama', viewValue: 'Drama' },
  ];
  constructor(private fb: FormBuilder) {}
}
