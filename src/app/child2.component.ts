// child2.component.ts
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child2',
    template: `
    <div style="border: 1px solid green; padding: 10px;">
      <h3>Child Component 2- CD: {{ cdCount }}</h3>
      <h3>Child Component 2</h3>
      <p>Message: {{ message }}</p>
    </div>
  `,
})
export class Child2Component implements OnChanges {
    cdCount = 0;
    @Input() message!: string;

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['message']) {
            console.log('Child 2 - Input "message" changed:', changes['message']);
        } else {
            console.log('Child 2 - Change detection triggered (but no "message" change)');
        }
    }

    ngAfterViewChecked() {
        this.cdCount += 1;
    }
}