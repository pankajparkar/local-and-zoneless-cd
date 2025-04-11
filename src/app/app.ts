import { Component } from '@angular/core';

@Component({
  selector: 'lz-root',
  template: `Hello {{title}}`,
})
export class App {
  title = 'local-and-zoneless-cd';
}
