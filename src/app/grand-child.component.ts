// child1.component.ts
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>CD Counts: {{ count }}</h3>
      <p>Grand child</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}