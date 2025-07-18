// parent.component.ts
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";
import { CdCounterDirective } from '../cd-counter.directive';

const styles = `:host{display:block;border: 1px solid blue; padding: 10px;}`;

@Component({
    selector: 'lz-parent',
    hostDirectives: [CdCounterDirective],

    template: `
        <h2>Parent Component - Count: {{ parentCount }}</h2>
        <button (click)="incrementParent()">Increment Parent</button>
        <lz-child1 [data]="$any(child1Data)"></lz-child1>
        <lz-child2 [message]="$any(child2Message)"></lz-child2>
    `,
    imports: [Child1Component, Child2Component,],
    changeDetection: ChangeDetectionStrategy.OnPush,
    styles,
})
export class ParentComponent {
    parentCount = 0;
    child1Data = { value: 10 };
    child2Message = 'Hello from Parent';
    cd = inject(ChangeDetectorRef);

    ngOnInit() {
        setInterval(() => {
            this.child1Data = { value: Math.random() };
            this.cd.detectChanges();
        }, 2000);

        setInterval(() => {
            this.child2Message = 'Child 2 Message Changed';
            this.cd.detectChanges();
        }, 4000);
    }

    incrementParent() {
        this.parentCount++;
    }

}