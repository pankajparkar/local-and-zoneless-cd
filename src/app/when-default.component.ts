// child1.component.ts
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { CdCounterDirective } from './cd-counter.directive';

const styles = `
  :host{display:block;border: 1px solid blue; padding: 10px;}
`;

@Component({
  selector: 'lz-when-default',
  standalone: true,
  imports: [JsonPipe],
  hostDirectives: [CdCounterDirective],
  template: `
    Task - {{value}}
    <hr>
    Response - {{ response }}
    <hr>
    <button (click)="startEvent()">
      Start Event
    </button>
  `,
  styles,
})
export class WhenDefaultComponent {
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
}