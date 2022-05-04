import { Component, OnInit } from '@angular/core';
import { Task } from '../task';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = []

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  delete(task:Task): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id)
    this.tasksService
    .deleteTask(task.id).subscribe();
  }
}
