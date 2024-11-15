import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() data!: string;
  ngOnInit(): void {
    console.log(this.data);
  }

  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    // Calculate the offset of the mouse position relative to the square
    const square = event.target as HTMLElement;
    const rect = square.getBoundingClientRect();
    this.offsetX = event.clientX - rect.left;
    this.offsetY = event.clientY - rect.top;

    console.log('mouese down');
  }

  onMouseMove(event: MouseEvent) {
    if (this.isDragging) {
      const square = document.querySelector('.text') as HTMLElement;
      // Update the position of the square
      square.style.left = `${event.clientX - this.offsetX}px`;
      square.style.top = `${event.clientY - this.offsetY}px`;

      console.log('mouse movieng');
    }
  }

  onMouseUp() {
    this.isDragging = false;
  }
}
