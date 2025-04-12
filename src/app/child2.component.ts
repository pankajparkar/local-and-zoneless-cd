// child2.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, input, signal } from '@angular/core';
import { GrandChildComponent } from "./grand-child.component";

@Component({
  selector: 'app-child2',
  template: `
    <div style="border: 1px solid green; padding: 10px;">
      <h3>Child Component 2</h3>
      <h3>CD Counts: {{ count }}</h3>
      <p>Message: {{ message }}</p>
      <app-grand-child />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GrandChildComponent],
})
export class Child2Component {
  @Input()
  message!: string;
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}