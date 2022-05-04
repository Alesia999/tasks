import { Component, OnInit } from '@angular/core'
import { Task } from '../task'
import { TasksService } from '../tasks-list/tasks.service'

@Component({
  selector: 'app-tasks-dashboard',
  templateUrl: './tasks-dashboard.component.html',
  styleUrls: ['./tasks-dashboard.component.scss'],
})
export class TasksDashboardComponent implements OnInit {
  tasks: Task[] = []

  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.getTasks()
  }
  getTasks(): void {
    this.tasksService.getTasks().subscribe((tasks) => (this.tasks = tasks))
  }
  delete(task:Task): void {
    this.tasks = this.tasks.filter((t) => t.id !== task.id)
    this.tasksService
    .deleteTask(task.id).subscribe();
  }
}
