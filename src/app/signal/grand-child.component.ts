// child1.component.ts
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-signal-grand-child',
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>CD Counts: {{ count }}</h3>
      <p>Grand child</p>

      <!-- newSignal {{ newSignal() }} -->
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalGrandChildComponent {
  count = 0;
  // newSignal = signal(0);

  ngDoCheck() {
    this.count++;
  }

  // ngOnInit() {
  //   setTimeout(() => {
  //     this.newSignal.set(1);
  //   }, 5000);
  // }
}