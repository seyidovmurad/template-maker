import { Directive, ElementRef, HostListener, Renderer2, RendererStyleFlags2 } from '@angular/core';

@Directive({
  selector: '[draggableElement]'
})
export class DraggableDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, "position", "absolute");
    this.renderer.setStyle(this.el.nativeElement, "cursor", "grabbing");
  }

  private isDragging = false;
  private offsetX = 0;
  private offsetY = 0;

  @HostListener('mousedown', ['$event']) onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grabbing');

    const rect = this.el.nativeElement.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;

    event.preventDefault();
  }

  @HostListener('mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    if (!this.isDragging)
      return;

    // const x = event.clientX - this.offsetX;
    // const y = event.clientY - this.offsetY;

    const parentRect = this.el.nativeElement.parentElement.parentElement.getBoundingClientRect();
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = Math.min(
      Math.max(event.clientX - this.offsetX, parentRect.left),
      parentRect.right - rect.width
    );
    const y = Math.min(
      Math.max(event.clientY - this.offsetY, parentRect.top),
      parentRect.bottom - rect.height
    );

    this.renderer.setStyle(this.el.nativeElement, 'left', `${x}px`);
    this.renderer.setStyle(this.el.nativeElement, 'top', `${y}px`);

  }

  @HostListener('document:mouseup') onMouseUp() {
    if (!this.isDragging) 
      return

    this.isDragging = false;
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'grab');
  }
}
