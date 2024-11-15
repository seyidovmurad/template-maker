import { Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ElementGenerateService } from 'src/app/services/element-generate.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  
  constructor (private elementGenerateService: ElementGenerateService) { }
  counter: number = 0;
  
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  ngOnInit(): void {
    this.elementGenerateService.componentChange$.subscribe( component => {
      const containerRef = this.container.createComponent(component.type) as ComponentRef<typeof component.type>;
      this.counter++;
      if (containerRef)
        containerRef.instance.data = this.counter.toString();
    });
  }

}
