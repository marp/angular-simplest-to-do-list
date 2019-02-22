import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  newTask: string;
  taskList: Array<string> = [];
  doneList: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = '';
  }

  remove(task: string, index: number) {
    // e in filter mean each element
    this.taskList = this.taskList.filter( (e, i) => e !== task || i !== index  );
  }

  done(task: string, index: number) {
    this.doneList.push(task);
    this.remove(task, index);
  }


}
