// parent.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SignalChild1Component } from "./child1.component";
import { SignalChild2Component } from "./child2.component";
import { toSignal } from '@angular/core/rxjs-interop';
import { map, timer } from 'rxjs';

@Component({
    selector: 'app-signal-parent',
    template: `
    <h2>Parent Component - Count: {{ parentCount }}</h2>
    <h3>CD Counts: {{ count }}</h3>
    <button (click)="incrementParent()">Increment Parent</button>

    <app-signal-child1 [data]="$any(child1Data())" />
    <app-signal-child2 [message]="$any(child2Message())" />
  `,
    imports: [SignalChild1Component, SignalChild2Component],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles: `:host{display:block;border: 1px solid blue; padding: 10px;}`,
})
export class SignalParentComponent {
    parentCount = 0;
    count = 0;

    child1Data = toSignal(timer(0, 2000).pipe(
        map(() => ({ value: Math.random() }))
    ));

    child2Message = toSignal(timer(0, 4000).pipe(
        map(() => 'Message updated by Timeout'),
    ));

    incrementParent() {
        this.parentCount++;
    }

    ngDoCheck() {
        this.count++;
    }

}