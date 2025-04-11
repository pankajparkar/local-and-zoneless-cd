// child1.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input, Input, OnChanges, signal, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child1',
    template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>Child Component 1</h3>
      <p>Data Value: {{ data()?.value }}</p>

      {{ test }}
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Child1Component implements OnChanges {
    cdCount = 0;
    cd = inject(ChangeDetectorRef);
    data = input<{ value: number }>();

    ngOnChanges(changes: SimpleChanges): void {
        // if (changes['data']) {
        //     console.log('Child 1 - Input "data" changed:', changes['data']);
        // } else {
        //     console.log('Child 1 - Change detection triggered (but no "data" change)');
        // }
    }

    get test() {
        console.log('Update Child 1');
        return 1;
    }
}