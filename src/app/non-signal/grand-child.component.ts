// child1.component.ts
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { CdCounterDirective } from '../cd-counter.directive';

@Component({
  selector: 'lz-grand-child',
  hostDirectives: [CdCounterDirective],
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <p>Grand child</p>

      newValue {{ newValue }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  ngOnInit() {
    let lastValue = 0;
    setInterval(() => {
      ++lastValue;
      if (lastValue % 3 !== 0) {
        return;
      }
    }, 1000);
  }
}