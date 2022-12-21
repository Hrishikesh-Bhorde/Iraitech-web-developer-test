import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.scss']
})
export class C3Component implements OnInit {
  @Input() values:any;
  constructor() { }

  ngOnInit(): void {
  }

}
