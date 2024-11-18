import { Component, OnInit } from '@angular/core';
import { Element } from '../../../models/interfaces/element';
import { Style } from '../../../models/interfaces/style';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements Element {
  isSelected: boolean = false;
  styles: Style[] = 
  [
    { label: 'Color', name: 'color', value: 'black' },
    { label: 'Z Index', name: 'zIndex', value: '2' },
    { label: 'Border', name: 'border', value: 'none' },
    { label: 'Font Size', name: 'fontSize', value: '12px' }
  ];

  getStyles(): Style[] {
    return this.styles
  }

  updateStyle(style: Style) {
    this.styles = this.styles.filter(s => s.name !== style.name);
    this.styles.push(style);
  }
}
