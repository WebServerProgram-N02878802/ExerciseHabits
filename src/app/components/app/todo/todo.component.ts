import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';
import { User, Todo } from '../../../models/app';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  Model = new Todo();

  constructor(private _App: AppService) { }

  ngOnInit() {
    this._App.TodoRefresh().subscribe(res => { this.Model = res });
  }

  clearToDo() {
    this.Model.MyList.splice(0);
  }

  addTask(value: string) {
    this.Model.MyList.push(value);
  }

  deleteTask(index: number) {
    this.Model.MyList.splice(index, 1);
  }

}
