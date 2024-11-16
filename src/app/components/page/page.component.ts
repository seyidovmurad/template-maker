import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ElementService } from 'src/app/services/element.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  constructor (private elementGenerateService: ElementService) { }
  
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container?: ViewContainerRef;

  ngOnInit(): void {
    this.elementGenerateService.componentChange$.subscribe( component => {
      if (this.container == null)
        return;

      this.elementGenerateService.createElement(this.container, component);
    });
  }

}
