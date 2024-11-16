import { ComponentRef, Injectable, Renderer2, RendererFactory2, Type, ViewContainerRef } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentConfig } from '../components/models/interfaces/component-config';
import { Element } from '../components/models/interfaces/element';
import { ComponentRefWrapper } from '../wrappers/component-ref-wrapper';
import { Style } from '../components/models/interfaces/style';

@Injectable({
  providedIn: 'root'
})
export class ElementService {
  
  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
  }

  private componentChange = new Subject<ComponentConfig>();
  private elementSelect = new Subject<ComponentRefWrapper<any>>();
  private renderer: Renderer2;
  private selectedComponentRef: any = null;
  
  componentChange$ = this.componentChange.asObservable();
  elementSelect$ = this.elementSelect.asObservable();
  
  emitComponentChange(component: ComponentConfig) {
    this.componentChange.next(component);
  }

  createElement(container: ViewContainerRef,component: ComponentConfig) {
    const componentRef = container.createComponent(component.type);
    const toolElement = (componentRef.hostView as any).rootNodes[0] as HTMLElement;

    toolElement.addEventListener('mousedown', () => this.select(componentRef));
    
    const element = toolElement.querySelector('.element');

    this.select(componentRef);

    const styles = this.getSelectedElementStyles();

    if (styles) {
      for(const style of styles) {
        this.renderer.setStyle(element, style.name, style.value); 
      }
    }

    return componentRef;
  }


  unselect() {
    if (this.selectedComponentRef === null)
      return;

    const element = (this.selectedComponentRef.hostView as any).rootNodes[0] as HTMLElement;
    const instance = this.selectedComponentRef.instance as Element;

    element.children.item(0)?.classList.remove('selected');
    instance.isSelected = false;

    this.selectedComponentRef = null;
  }

  select(componentRef: ComponentRef<any>) {
    if (this.selectedComponentRef !== null)
      this.unselect();

    const element = (componentRef.hostView as any).rootNodes[0] as HTMLElement;
    const instance = componentRef.instance as Element;

    instance.isSelected = true;
    element.children.item(0)?.classList.add('selected');

    this.selectedComponentRef = componentRef;
  
    this.elementSelect.next(this.selectedComponentRef);
  }

  getSelectedElementStyles() {
    if (this.selectedComponentRef === null)
      return null;
    
    const instance = this.selectedComponentRef.instance as Element;
    const styles = instance.getStyles();
    
    return styles;
  }

  changeStyle(style: Style) {
    if (!this.selectedComponentRef)
      return;
    console.log(style);
    const element = ((this.selectedComponentRef.hostView as any).rootNodes[0] as HTMLElement).querySelector('.element');

    this.renderer.setStyle(element, style.name, style.value);
  }
}
