// child1.component.ts
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';


@Component({
  selector: 'app-what',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h3>Child Component Component CD Counts: {{ count }}</h3>
    Task - {{value}}
    <hr>
    Response - {{ response | json }}
    <hr>
    <button (click)="startEvent()">
      Start Event
    </button>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `:host{display:block;border: 1px solid blue; padding: 10px;}`,
})
export class WhenComponent {
  count = 0;
  value = 'No value';
  response: any;
  cd = inject(ChangeDetectorRef);
  http = inject(HttpClient);

  networkCall() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response: any) => (this.response = response));
  }

  task() {
    setTimeout(() => {
      this.value = 'Test';
    }, 2000);
  }

  startEvent() {
    this.networkCall();
    this.task();
  }

  ngDoCheck() {
    this.count++;
  }
}