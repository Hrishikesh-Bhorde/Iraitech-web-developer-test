import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-que3',
  templateUrl: './que3.component.html',
  styleUrls: ['./que3.component.scss']
})
export class Que3Component implements OnInit {

  values:any = [];
  ngOnInit() {
  }

  removevalue(i: number){
    this.values.splice(i,1);
  }

  addvalue(){
    this.values.push({value: ""});
  }
}