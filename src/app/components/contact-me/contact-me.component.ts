import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, Validators, NgForm,ReactiveFormsModule  } from '@angular/forms'
import { OktaAuthService } from '@okta/okta-angular';
import { DatePipe } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
// import { CartService } from '../cart.service';
import {HttpClient,HttpHeaders} from '@angular/common/http'

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


  // onSubmit(hero: Hero): Observable<Hero> {
  //   const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar','Access-Control-Allow-Origin' : '*' };
  //   return this.http.post<Hero>(`contact.php`, this.messageForm.value, headers)
  //     .pipe(
  //       catchError(this.handleError('addHero', hero))
  //     );
  // }
  onSubmit(): void {


      //  this.http.post(`contact.php`, { data: this.messageForm.value }).pipe(
      //   ((res: any) => {
      //     return res['data'];
      //   })
      // );

  const headers= new HttpHeaders()
  .set('content-type', 'application/x-www-form-urlencoded ; charset=UTF-8')
  .set('Access-Control-Allow-Origin', '*'); 
    this.http.post<any>('contact.php', JSON.stringify(this.messageForm.value),{headers}).subscribe(text => {
      console.log('Message Successfully send.',text);
  })
  //   // this.http.
  // const headers= new HttpHeaders()
  // .set('content-type', 'application/x-www-form-urlencoded')
  // .set('Access-Control-Allow-Origin', '*'); 
  //   // const headers = { 'content-type': 'application/json','Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar','Access-Control-Allow-Origin' : '*' };
  //   this.http.post<any>('contact.php', JSON.stringify(this.messageForm.value),{headers}).subscribe(text => {
  //     console.log('Message Successfully send.',text);
  // })
  console.log('Message:',JSON.stringify(this.messageForm.value) );
    // this.http.post('http://rezdev.ir/contact.php',''); 
    this.messageForm.reset();
  }
//   // onSubmit()
//   //   {
//   //     // this.http.post('contact.php',from)
//   //   }
}
