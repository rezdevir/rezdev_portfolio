import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, Validators, NgForm,ReactiveFormsModule  } from '@angular/forms'
import { OktaAuthService } from '@okta/okta-angular';
import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { CartService } from '../cart.service';
import {HttpClient} from '@angular/common/http'
import { from } from 'rxjs';
@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss']
})
export class ContactMeComponent {
    constructor(
    private http: HttpClient,
    public datepipe: DatePipe,
    // private cartService: CartService,
    private formBuilder: FormBuilder,
// private    formGroup :ReactiveFormsModule
  ) {}
  messageForm = this.formBuilder.group({
    name: '',
    email: '',
    message:'',
    date:this.datepipe.transform((new Date), 'MM/dd/yyyy h:mm:ss'),
  });

  onSubmit(): void {
    // this.http.
    const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar','Access-Control-Allow-Origin' : '*' };
    this.http.post<any>('contact.php', {},{headers}).subscribe(data => {
      this.messageForm.value.name,
      this.messageForm.value.email,
      this.messageForm.value.message,
      this.messageForm.value.date
  });
    // this.http.post('http://rezdev.ir/contact.php','');
    console.warn('Thank you for your message... I respond you as soon as i can !', this.messageForm.value);
    this.messageForm.reset();
  }
//   // onSubmit()
//   //   {
//   //     // this.http.post('contact.php',from)
//   //   }
}
