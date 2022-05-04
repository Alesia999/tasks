import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Task } from '../task';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from '../tasks-list/tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.getCard();
  }
  getCard(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.tasksService.getTask(id)
    .subscribe(task => this.task = task)
  }
  goBack(): void {
    this.location.back();
  }
  save(): void {
    if (this.task) {
      this.tasksService.updateTask(this.task).subscribe();
    }
  }
}
