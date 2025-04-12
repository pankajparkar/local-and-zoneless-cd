import { ApplicationRef, Component } from '@angular/core';
import { ParentComponent } from "./parent.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'lz-root',
  template: `
      <h3>CD Counts: {{ count }}</h3>
      <br>
    <!-- <app-parent /> -->
    <router-outlet></router-outlet>
  `,
  imports: [ParentComponent, RouterOutlet],
})
export class App {
  title = 'local-and-zoneless-cd';
  count = 0;

  ngDoCheck() {
    ++this.count;
  }
}
