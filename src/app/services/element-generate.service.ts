import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ComponentConfig } from '../components/models/interfaces/component-config';

@Injectable({
  providedIn: 'root'
})
export class ElementGenerateService {
  private componentChange = new Subject<ComponentConfig>();
  componentChange$ = this.componentChange.asObservable();

  constructor() { }

  emit(component: ComponentConfig) {
    this.componentChange.next(component);
  }
}
