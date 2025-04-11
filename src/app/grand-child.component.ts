// child1.component.ts
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <p>{{ test }}</p>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  cdCount = 0;

  get test() {
    console.log('Update Grand Child 1');
    return 1;
  }
}