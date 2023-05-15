import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  onDelete(task: Task) {
    console.log(task);
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    console.log(
      '🚀 ~ file: task-item.component.ts:22 ~ TaskItemComponent ~ toggleReminder ~ toggleReminder: ', task
    );
    this.onToggleReminder.emit(task);
    //this.enabled = !this.enabled;
  }
}
