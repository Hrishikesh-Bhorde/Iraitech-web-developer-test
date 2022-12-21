import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que1',
  templateUrl: './que1.component.html',
  styleUrls: ['./que1.component.scss']
})
export class Que1Component implements OnInit {

  constructor() { }

  series = [2,3,10,15,26,35,50, 63];
  index : any;
  op : any;
  

  ngOnInit(): void {

  }

  search()
  {
    this.op = this.series[this.index];
  }

}