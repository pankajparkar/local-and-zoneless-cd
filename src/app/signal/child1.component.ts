// child1.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input } from '@angular/core';

@Component({
  selector: 'lz-signal-child1',
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>Child Component 1</h3>
      <h3>CD Counts: {{ count }}</h3>
      <p>Data Value: {{ data()?.value }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalChild1Component {
  data = input<{ value: number }>();
  count = 0;

  ngDoCheck() {
    this.count++;
  }
}