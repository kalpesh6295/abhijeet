import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dolist',
  templateUrl: './dolist.component.html',
  styleUrls: ['./dolist.component.css']
})
export class DolistComponent implements OnInit {
@Input('newtask') newtask;
  constructor() { }

  ngOnInit() {
  }
}
