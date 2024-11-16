import { Component } from '@angular/core';
import { Element } from '../../models/interfaces/element';
import { Style } from '../../models/interfaces/style';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements Element {
  isSelected: boolean = false;

  getStyles(): Style[] {
    return [
      { label: 'Color', name: 'backgroundColor', value: 'black' },
      { label: 'Width', name: 'width', value: '50px' },
      { label: 'Z Index', name: 'zIndex', value: '2' },
    ];
  }
}
