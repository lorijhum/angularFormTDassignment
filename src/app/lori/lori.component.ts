import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-lori',
  templateUrl: './lori.component.html',
  styleUrls: ['./lori.component.css']
})
export class LoriComponent implements OnInit {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  defaultSubscription = 'advanced';
  password = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Submitted!')
    console.log(this.password);
   
  }

}
