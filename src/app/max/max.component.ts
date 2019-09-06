import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-max',
  templateUrl: './max.component.html',
  styleUrls: ['./max.component.css']
})
export class MaxComponent implements OnInit {
  @ViewChild('signupForm', {static: false}) sgnForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.sgnForm.value);

  }

}
