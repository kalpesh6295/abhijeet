import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  task;
  onItemAdded(data: {newtask:string}){
  this.task=data.newtask;
  }
}
