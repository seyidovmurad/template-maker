import { Component, OnInit } from '@angular/core';
import { Element } from '../../../models/interfaces/element';
import { Style } from '../../../models/interfaces/style';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements Element {
  isSelected: boolean = false;
  styles: Style[] = 
  [
    { label: 'Color', name: 'backgroundColor', value: 'black' },
    { label: 'Width', name: 'width', value: '50px' },
    { label: 'Z Index', name: 'zIndex', value: '2' },
  ];
  
  getStyles(): Style[] {
    return this.styles
  }

  updateStyle(style: Style) {
    this.styles = this.styles.filter(s => s.name !== style.name);
    this.styles.push(style);
  }
}
