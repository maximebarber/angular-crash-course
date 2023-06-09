import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  constructor(private taskService: TaskService) {}
  tasks: Task[] = [];

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task) {
    console.log("🚀 ~ file: tasks.component.ts:19 ~ TasksComponent ~ deleteTask ~ deleteTask:", task)
    
    this.taskService
      .deleteTask(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    console.log("🚀 ~ file: tasks.component.ts:28 ~ TasksComponent ~ toggleReminder ~ toggleReminder:", task)

    task.reminder = !task.reminder
    this.taskService.updateTaskReminder(task).subscribe()
    
    //let taskId: number = this.tasks.findIndex(((t) => t.id == task.id));
    //this.tasks[taskId].reminder = !this.tasks[taskId].reminder
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task))
  }
}
