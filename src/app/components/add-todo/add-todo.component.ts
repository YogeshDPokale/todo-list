import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  title !: string;
  desc !: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data: any): void {
    console.log("onClick Submit has been triggerd")
    const todo = {
      sno: Date.now(),
      title: data.title,
      desc: data.desc,
      active: true
    }
    this.todoAdd.emit(todo);
    console.log(todo + "todo Added");

  }

}
