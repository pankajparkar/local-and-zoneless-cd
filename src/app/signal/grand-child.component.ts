// child1.component.ts
import { afterEveryRender, ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

@Component({
  selector: 'lz-signal-grand-child',
  template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>CD Counts: {{ count }}</h3>
      <p>Grand child</p>

      newSignal {{ newSignal() }}
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalGrandChildComponent {
  count = 0;

  _ = afterEveryRender(() => {
    this.count++;
  });

  newSignal = signal(0);

  ngOnInit() {
    let lastValue = 0;
    setInterval(() => {
      ++lastValue;
      if (lastValue % 3 !== 0) {
        return;
      }
      this.newSignal.set(lastValue);
    }, 1000);
  }
}