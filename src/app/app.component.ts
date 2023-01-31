import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'This is a One-way Data binding example..';
  clientName: string = 'Carl';

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
  items = ['Kare - kare', 'Adobo', 'Caldereta', 'Sisig', 'Tinola'];

  //ngSwitch
  selectedOption = 5;

  //ngStyle
  color = 'green';
  othercolor = 'red';

  //ngClass
  isBold = true;
  isItalic = false;

  //ngModel
  name = '';
}
