// child2.component.ts
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { SignalGrandChildComponent } from "./grand-child.component";
import { CdCounterDirective } from '../cd-counter.directive';

@Component({
  selector: 'lz-signal-child2',
  hostDirectives: [CdCounterDirective],
  template: `
    <div style="border: 1px solid green; padding: 10px;">
      <p>Message: {{ message() }}</p>
      <lz-signal-grand-child />
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SignalGrandChildComponent],
})
export class SignalChild2Component {
  message = input<string | undefined>();
}