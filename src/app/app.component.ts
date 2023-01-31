import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example..';
  clientName: string = 'Joseph';

  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'red';

  //Event binding

  message = '';

  onButtonClick() {
    this.message = 'Button was clicked!';
  }

  //Event as an alert()
  showAlert() {
    alert('Button was clicked!');
  }

  // for two-way data binding demo
  myName = '';

  //ngIf Demo
  showElement = false;

  //ngFor Demo
  items = ['Item 1', 'Item 2', 'Item 3'];

  //ngSwitch
  selectedOption = 3;

  //ngStyle
  color = 'green';

  //ngClass
  isBold = true;
  isItalic = true;

  //ngModel
  name = '';
}
