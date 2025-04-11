// parent.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";
import { JsonPipe } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap, timer } from 'rxjs';

@Component({
    selector: 'app-parent',
    template: `
    <h2>Parent Component - Count: {{ parentCount }}</h2>
    <button (click)="incrementParent()">Increment Parent</button>
    {{ test }}
    <app-child1 [data]="$any(child1Data())"></app-child1>
    <app-child2 [message]="$any(child2Message())"></app-child2>
  `,
    imports: [Child1Component, Child2Component, JsonPipe,],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
    cdCount = 0;
    parentCount = 0;
    // child1Data = { value: 10 };
    // child2Message = 'Hello from Parent';

    child1Data = toSignal(timer(0, 2000).pipe(
        // tap(() => console.log('Child 1 Data Changed')),
        map(() => ({ value: Math.random() }))
    ));

    child2Message = toSignal(timer(0, 4000).pipe(
        // tap(() => console.log('Child 2 Message Changed')),
        map(() => 'Message updated by Timeout'),
    ));

    incrementParent() {
        this.parentCount++;
        // console.log('Parent Count Incremented');
    }

    get test() {
        console.log('Update Parent');
        return 1;
    }

}