// child1.component.ts
import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';


const styles = `
  :host {
    display: block;
    padding: 5px 10px;
    border: 1px solid #000;
  }`;

@Component({
  selector: 'lz-what',
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
  styles,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhenOnPushComponent {
  count = 0;
  value = 'No value';
  response: any;
  cd = inject(ChangeDetectorRef);
  http = inject(HttpClient);

  networkCall() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((response: any) => {
        this.response = response;
      });
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

  ngAfterViewChecked() {
    this.count++;
  }

  ngOnInit() {
    // setTimeout(() => {
    //   this.cd.detectChanges();
    //   this.startEvent();
    // }, 15000);
  }
}