import { Component } from '@angular/core';
import { ParentComponent } from "./parent.component";

@Component({
  selector: 'lz-root',
  template: `
    <app-parent />
  `,
  imports: [ParentComponent],
})
export class App {
  title = 'local-and-zoneless-cd';
}
