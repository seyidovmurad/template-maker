import { ComponentRef } from "@angular/core";
import { Element } from '../components/models/interfaces/element';
import { Style } from "../components/models/interfaces/style";

export class ComponentRefWrapper<T> {
  constructor(private componentRef: ComponentRef<T>) {}

  // Custom method to get styles
  getStyles(): Style[] | null {
    const instance = this.componentRef.instance as Element; // Assume instance might have getStyles
    if (instance && typeof instance.getStyles === 'function') {
      return instance.getStyles();
    }
    return null;
  }

  // Expose original ComponentRef properties if needed
  get componentInstance(): T {
    return this.componentRef.instance;
  }
}