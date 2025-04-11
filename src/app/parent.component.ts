// parent.component.ts
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";
import { AsyncPipe } from '@angular/common';
import { map, tap, timer } from 'rxjs';

@Component({
    selector: 'app-parent',
    template: `
    <h2>Parent Component - Count: {{ parentCount }}</h2>
    <h2>Parent Component - CD: {{ cdCount }}</h2>
    <button (click)="incrementParent()">Increment Parent</button>
    <app-child1 [data]="$any(child1Data$ | async)"></app-child1>
    <app-child2 [message]="$any(child2Message$ | async)"></app-child2>
  `,
    imports: [Child1Component, Child2Component, AsyncPipe,],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit {
    cdCount = 0;
    parentCount = 0;
    child1Data = { value: 10 };
    child2Message = 'Hello from Parent';

    child1Data$ = timer(0, 2000).pipe(
        tap(() => console.log('Child 1 Data Changed')),
        map(() => ({ value: Math.random() }))
    );

    child2Message$ = timer(0, 4000).pipe(
        tap(() => console.log('Child 2 Message Changed')),
        map(() => 'Message updated by Timeout')
    );

    incrementParent() {
        this.parentCount++;
        console.log('Parent Count Incremented');
    }

    ngOnInit() {
    }

    ngAfterViewChecked() {
        this.cdCount += 1;
    }
}