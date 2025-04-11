// parent.component.ts
import { Component, OnInit } from '@angular/core';
import { Child1Component } from "./child1.component";
import { Child2Component } from "./child2.component";

@Component({
    selector: 'app-parent',
    template: `
    <h2>Parent Component - Count: {{ parentCount }}</h2>
    <h2>Parent Component - CD: {{ cdCount }}</h2>
    <button (click)="incrementParent()">Increment Parent</button>
    <app-child1 [data]="child1Data"></app-child1>
    <app-child2 [message]="child2Message"></app-child2>
  `,
    imports: [Child1Component, Child2Component],
})
export class ParentComponent implements OnInit {
    cdCount = 0;
    parentCount = 0;
    child1Data = { value: 10 };
    child2Message = 'Hello from Parent';

    incrementParent() {
        this.parentCount++;
        console.log('Parent Count Incremented');
    }

    ngOnInit() {
        setInterval(() => {
            this.child1Data = { value: Math.random() }; // Changing data for Child1
            console.log('Child 1 Data Changed');
        }, 2000);

        setTimeout(() => {
            this.child2Message = 'Message updated by Timeout'; // Changing data for Child2
            console.log('Child 2 Message Changed');
        }, 4000);
    }

    ngAfterViewChecked() {
        this.cdCount += 1;
    }
}