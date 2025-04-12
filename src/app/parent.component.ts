// parent.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";

@Component({
    selector: 'app-parent',
    template: `
    <h2>Parent Component - Count: {{ parentCount }}</h2>
    <h3>CD Counts: {{ count }}</h3>
    <button (click)="incrementParent()">Increment Parent</button>
    <app-child1 [data]="$any(child1Data)"></app-child1>
    <app-child2 [message]="$any(child2Message)"></app-child2>
    `,
    imports: [Child1Component, Child2Component,],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
    parentCount = 0;
    count = 0;
    child1Data = { value: 10 };
    child2Message = 'Hello from Parent';
    cd = inject(ChangeDetectorRef);

    ngOnInit() {
        setInterval(() => {
            this.child1Data = { value: Math.random() };
            this.cd.markForCheck();
        }, 2000);

        setInterval(() => {
            this.child2Message = 'Child 2 Message Changed';
            this.cd.markForCheck();
        }, 4000);
    }

    incrementParent() {
        this.parentCount++;
    }

    ngDoCheck() {
        this.count++;
    }

}