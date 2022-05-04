import { Component, } from '@angular/core';
import { TASKS } from './all-tasks';
import { TasksService } from './tasks-list/tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  tasks = TASKS;
  title = 'Tasks Planner';
  constructor(private tasksService: TasksService) {}

}
