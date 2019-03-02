import { Component, OnInit, Input, Output } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Input() tasks;
  @Output() emitTask = new EventEmitter<string>();

  newTask: string;
  constructor() { }

  ngOnInit() {
  }

  add() {
    this.emitTask.emit(this.newTask);
    this.newTask = '';
  }

}
