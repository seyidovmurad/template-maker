import { Component, Input, OnInit } from '@angular/core';
import { Element } from '../../../models/interfaces/element';
import { Style } from '../../../models/interfaces/style';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements Element {
  isSelected: boolean = false;
  styles: Style[] = 
  [
    { label: 'Color', name: 'color', value: 'black' },
    { label: 'Z Index', name: 'zIndex', value: '2' },
    { label: 'Border', name: 'border', value: 'none' },
    { label: 'Font Size', name: 'fontSize', value: '12px' },
    { label: 'Width', name: 'width', value: '100px' },
    { label: 'Height', name: 'height', value: '40px' },
    { label: 'Background Color', name: 'backgroundColor', value: 'none' }
  ];

  getStyles(): Style[] {
    return this.styles
  }

  updateStyle(style: Style) {
    this.styles = this.styles.filter(s => s.name !== style.name);
    this.styles.push(style);
  }
}
