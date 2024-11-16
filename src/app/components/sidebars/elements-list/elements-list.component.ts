import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TextComponent } from '../../tools/text/text.component';
import { ElementService } from 'src/app/services/element.service';
import { ComponentConfig } from '../../models/interfaces/component-config';
import { LineComponent } from '../../tools/line/line.component';
import { InputComponent } from '../../tools/input/input.component';
import { TableComponent } from '../../tools/table/table.component';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.css']
})
export class ElementsListComponent {
  
  constructor (private elementGenerateService: ElementService) { }

  components = 
  [
    { label: 'Text', type: TextComponent },
    { label: 'Line', type: LineComponent },
    { label: 'Input', type: InputComponent },
    { label: 'Table', type: TableComponent },
  ]

  createComponent(component: ComponentConfig) {
    this.elementGenerateService.emitComponentChange(component);
  }
}
