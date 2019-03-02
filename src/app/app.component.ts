import { Component } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // newTask: string;
  taskList: Array<string> = [];
  doneList: Array<string> = [];

  add(task: string){
    this.taskList.push(task);
  }


  remove(task: string) {
    // e in filter mean each element
    // this.taskList = this.taskList.filter( (e, i) => e !== task || i !== index  );
    this.taskList = this.taskList.filter( e => e !== task );
  }

  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
  }


}
