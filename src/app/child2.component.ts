// child2.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, input, Input, OnChanges, signal, SimpleChanges } from '@angular/core';
import { GrandChildComponent } from "./grand-child.component";

@Component({
    selector: 'app-child2',
    template: `
    <div style="border: 1px solid green; padding: 10px;">
      <h3>Child Component 2</h3>
      <p>Message: {{ message() }}</p>

      {{test }}

      <app-grand-child />
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [GrandChildComponent],
})
export class Child2Component implements OnChanges {
    cdCount = 0;
    mfcCount = signal(0);
    message = input();
    cd = inject(ChangeDetectorRef);

    ngOnChanges(changes: SimpleChanges): void {
        // if (changes['message']) {
        //     console.log('Child 2 - Input "message" changed:', changes['message']);
        // } else {
        //     console.log('Child 2 - Change detection triggered (but no "message" change)');
        // }
    }

    get test() {
        console.log('Update Child 2');
        return 1;
    }
}