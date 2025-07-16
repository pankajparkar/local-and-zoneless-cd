// child1.component.ts
import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';

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


  ngAfterViewChecked() {
    this.count++;
  }

  newSignal = signal(0);
  _lastValue = 0;

  ngOnInit() {
    setInterval(() => {
      ++this._lastValue;
      if (this._lastValue % 3 !== 0) {
        return;
      }
      this.newSignal.set(this._lastValue);
    }, 1000);
  }
}