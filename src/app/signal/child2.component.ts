// child2.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SignalGrandChildComponent } from "./grand-child.component";

@Component({
  selector: 'app-signal-child2',
  template: `
    <div style="border: 1px solid green; padding: 10px;">
      <h3>Child Component 2 CD Counts: {{ count }}</h3>
      <p>Message: {{ message() }}</p>
      <app-signal-grand-child />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalGrandChildComponent],
})
export class SignalChild2Component {
  message = input();
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}