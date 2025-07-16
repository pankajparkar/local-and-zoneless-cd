import { Directive, ElementRef, inject, Renderer2 } from "@angular/core";

@Directive({
    selector: '[lzCdCounter]',
    standalone: true,
})
export class CdCounterDirective {
    count = 0;
    private el = inject(ElementRef<HTMLElement>);
    private renderer = inject(Renderer2);

    createDomElement() {
        const cdCounterElement = this.renderer.createElement('div');
        const span = this.renderer.createElement('span');
        this.renderer.addClass(cdCounterElement, 'cd-counter');
        this.renderer.insertBefore(cdCounterElement, span, null);
        this.renderer.setProperty(span, 'textContent', `${this.el.nativeElement.tagName.toLowerCase()} CD Counts: ${this.count}`);
        return cdCounterElement;
    }

    ngAfterViewChecked() {
        // Ensure the element has children
        ++this.count;
        const cdCounterElement = this.el.nativeElement.querySelector('.cd-counter');
        if (cdCounterElement) {
            this.renderer.removeChild(this.el.nativeElement, cdCounterElement);
        }
        // Insert the new element at the beginning of the host element
        this.renderer.insertBefore(this.el.nativeElement, this.createDomElement(), this.el.nativeElement.firstChild);
    }
}