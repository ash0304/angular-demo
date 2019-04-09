import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ng7';
  initialCounter = 3;
  counter: number = this.initialCounter;

  onCounterChange(counter: number) {
    this.counter = counter;
  }
}
