// child1.component.ts
import { ChangeDetectorRef, Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child1',
    template: `
    <div style="border: 1px solid blue; padding: 10px;">
      <h3>Child Component 1- CD: {{ cdCount }}</h3>
      <h3>Child Component 1</h3>
      <p>Data Value: {{ data.value }}</p>
    </div>
  `,
})
export class Child1Component implements OnChanges {
    cdCount = 0;
    cd = inject(ChangeDetectorRef);
    @Input() data!: { value: number };

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['data']) {
            console.log('Child 1 - Input "data" changed:', changes['data']);
        } else {
            console.log('Child 1 - Change detection triggered (but no "data" change)');
        }
    }

    ngOnInit() {
        setInterval(() => {
            this.cd.detectChanges();
        }, 5000)
    }

    ngAfterViewChecked() {
        this.cdCount += 1;
    }
}