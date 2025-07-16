// child2.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, input, signal } from '@angular/core';
import { GrandChildComponent } from "./grand-child.component";
import { CdCounterDirective } from '../cd-counter.directive';

@Component({
  selector: 'lz-child2',
  hostDirectives: [CdCounterDirective],
  template: `
    <div style="border: 1px solid green; padding: 10px;">
      <h3>Child Component 2</h3>
      <p>Message: {{ message }}</p>
      <lz-grand-child />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [GrandChildComponent],
})
export class Child2Component {
  @Input() message!: string;
}