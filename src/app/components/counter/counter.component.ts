import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
seconds;
minutes;
hours;
days;
  constructor() {
   }

  ngOnInit(): void {
    window.setInterval(() => this.setTime(), 1000);
  }

  setTime(){
    const date = new Date();
    const birthday = new Date(2020, 8, 24, 0,0,0,0);
    let difference = birthday.getTime() - date.getTime() ;
    this.days = Math.floor(difference/(86400 * 1000));
    difference -= this.days*(86400*1000);
    this.hours = Math.floor(difference/(60 * 60 * 1000 ));
    difference -= this.hours * (60 * 60 * 1000);
    this.minutes = Math.floor(difference/(60 * 1000));
    difference -= this.minutes * (60 * 1000);
    this.seconds = Math.floor(difference / (1000));
  }

}
