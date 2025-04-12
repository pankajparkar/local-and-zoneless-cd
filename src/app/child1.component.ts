// child1.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, input } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>Child Component 1</h3>
      <h3>CD Counts: {{ count }}</h3>
      <p>Data Value: {{ data?.value }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component {
  count = 0;
  @Input() data!: { value: number };

  ngDoCheck() {
    this.count++;
  }
}