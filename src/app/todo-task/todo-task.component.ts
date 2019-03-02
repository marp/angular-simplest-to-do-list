import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.scss']
})
export class TodoTaskComponent implements OnInit {
  @Input()
  // taskList: Array<string> = [];
  taskList = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();

  constructor() {  }

  ngOnInit() {
  }

  remove(task: string){
      this.emitRemove.emit(task);
  }

  done(task: string){
    this.emitDone.emit(task);
  }

}
