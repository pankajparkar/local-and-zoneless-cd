// child1.component.ts
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';


@Component({
  selector: 'app-what',
  standalone: true,
  imports: [JsonPipe],
  template: `
    Task - {{value}}
    <hr>
    Response - {{ response | json }}
    <hr>
    <button (click)="startEvent()">
      Start Event
    </button>
  `,
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhenComponent {
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

  ngOnInit() {
    // setTimeout(() => {
    // this.cd.detectChanges();
    // this.startEvent();
    // }, 15000);
  }
}