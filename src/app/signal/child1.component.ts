// child1.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input } from '@angular/core';
import { CdCounterDirective } from '../cd-counter.directive';

@Component({
  selector: 'lz-signal-child1',
  hostDirectives: [CdCounterDirective],
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>Child Component 1</h3>
      <p>Data Value: {{ data()?.value }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalChild1Component {
  data = input<{ value: number } | undefined>();
}