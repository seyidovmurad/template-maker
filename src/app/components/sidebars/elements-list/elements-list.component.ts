import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TextComponent } from '../../tools/text/text.component';
import { ElementGenerateService } from 'src/app/services/element-generate.service';
import { ComponentConfig } from '../../models/interfaces/component-config';

@Component({
  selector: 'app-elements-list',
  templateUrl: './elements-list.component.html',
  styleUrls: ['./elements-list.component.css']
})
export class ElementsListComponent {
  
  constructor (private elementGenerateService: ElementGenerateService) { }

  components = 
  [
    { label: 'Text', type: TextComponent },
  ]


  createComponent(component: ComponentConfig) {
    this.elementGenerateService.emit(component);
  }
}
