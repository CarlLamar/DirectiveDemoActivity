import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //name = 'Angular ' + VERSION.major;
  appName = 'Welcome to kapampangan cuisine';
  clientName: string = 'Carl';

  appliedCSSClass = 'green';
  notappliedCSSClass = false;
  myColor = 'red';

  //Event binding

  message = '';

  onButtonClick1() {
    this.message = 'You choose Kare - kare';
  }
  onButtonClick2() {
    this.message = 'You choose Adobo';
  }
  onButtonClick3() {
    this.message = 'You choose Caldereta';
  }
  onButtonClick4() {
    this.message = 'You choose Sisig';
  }
  onButtonClick5() {
    this.message = 'You choose Tinola';
  }

  //Event as an alert()
  showAlert() {
    alert('You canceled your order!');
  }

  // for two-way data binding demo
  myName = 'may i take your order?';

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
