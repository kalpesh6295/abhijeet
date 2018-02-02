import { Component, OnInit,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent implements OnInit {
  @Output()  taskcreated= new EventEmitter<{newtask:string[]}>();
 task:string='';
 todolist= [];
  constructor() { }

  ngOnInit() {
  }
  addtolist(event:Event){
    this.task = (<HTMLInputElement>event.target).value;
    console.log(this.task);
  }

onadditem(){
  this.todolist.push(this.task);
 this.taskcreated.emit({
  newtask: this.todolist
 });
}  



}
  
