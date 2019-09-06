import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form-assignment-td';
  @ViewChild('f', {static: true}) signupForm: NgForm;
  defaultSubscription = 'advanced';
  password = '';

  onSubmit() {
    console.log('Submitted!')
    console.log(this.password);
   
  }
}
