// child1.component.ts
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CdCounterDirective } from '../cd-counter.directive';

@Component({
  selector: 'lz-grand-child',
  hostDirectives: [CdCounterDirective],
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <p>Grand child</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
}