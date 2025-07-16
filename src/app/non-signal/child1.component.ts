// child1.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, input } from '@angular/core';
import { CdCounterDirective } from '../cd-counter.directive';

@Component({
  selector: 'lz-child1',
  hostDirectives: [CdCounterDirective],
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>Child Component 1</h3>
      <p>Data Value: {{ data?.value }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component {
  @Input() data: { value: number } | undefined;
}