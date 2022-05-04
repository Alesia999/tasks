import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Task } from '../task';
import { TasksService } from './../tasks-list/tasks.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  tasks: Task[] = [];
  title = '';
  text = '';

  constructor(private tasksService: TasksService) {
    console.log('constructor');
  }
  ngOnInit(): void {}
  getTasks(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  add(name: string, description: string): void {
    if (name.trim()) {
      this.tasksService
        .addTask({ name, description } as Task)
        .subscribe((task) => {
          this.tasks.push(task);
        });
    }
    this.title = this.text = '';
  }
}
