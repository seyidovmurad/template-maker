import { Component, Input, OnInit } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';
import { Style } from '../../../models/interfaces/style';

@Component({
  selector: 'app-element-style',
  templateUrl: './element-style.component.html',
  styleUrls: ['./element-style.component.css']
})
export class ElementStyleComponent implements OnInit {
  
  constructor (private elementService: ElementService) { }

  styles: Style[] = [];

  ngOnInit(): void {
    this.elementService.elementSelect$.subscribe(component => {
      const styles = this.elementService.getSelectedElementStyles();
      
      if (styles === null)
        return;

      this.styles = styles;
    });
  }

  onChange(style: Style) {
    console.log('change')
    //setTimeout(() => , 150)
    this.elementService.changeStyle(style);
  }
  
}
