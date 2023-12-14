import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'xgrid-test-app';

  hourHandStyle: any;
  minuteHandStyle: any;
  secondHandStyle: any;
  hour: any;
  min: any;
  sec: any;

  ngOnInit() {
    setInterval(() => { this.animateAnalogClock() }, 1000);
  }

  animateAnalogClock() {

    const _moment = moment();

    this.hour = _moment.hour();
    this.min = _moment.minute();
    this.sec = _moment.second();

    this.hourHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.hour * 30) + (this.min * 0.5) + (this.sec * (0.5 / 60))}deg)` };

    this.minuteHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${(this.min * 6) + (this.sec * 0.1)}deg)` };

    this.secondHandStyle = { transform: `translate3d(-50%, 0, 0) rotate(${this.sec * 6}deg)` };
  }
}
