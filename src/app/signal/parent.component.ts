// parent.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, signal } from '@angular/core';
import { SignalChild1Component } from "./child1.component";
import { SignalChild2Component } from "./child2.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { map, take, timer } from 'rxjs';
import { CdCounterDirective } from '../cd-counter.directive';

const styles = `:host{display:block;border: 1px solid blue; padding: 10px;}`;

@Component({
    selector: 'lz-signal-parent',
    hostDirectives: [CdCounterDirective],
    template: `
        <h2>Parent Component - Count: {{ parentCount() }}</h2>
        <button (click)="incrementParent()">Increment Parent</button>

        <lz-signal-child1 [data]="child1Data()" />
        <lz-signal-child2 [message]="child2Message()" />
  `,
    imports: [SignalChild1Component, SignalChild2Component],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles,
})
export class SignalParentComponent {
    parentCount = signal(0);

    child1Data = toSignal(timer(0, 2000).pipe(
        take(1),
        map(() => ({ value: Math.random() }))
    ));

    child2Message = toSignal(timer(0, 4000).pipe(
        take(1),
        map(() => 'Message updated by Timeout'),
    ));

    incrementParent() {
        this.parentCount.set(this.parentCount() + 1);
    }
}