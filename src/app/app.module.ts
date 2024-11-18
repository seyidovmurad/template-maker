import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './components/tools/text/text.component';
import { ElementsListComponent } from './components/sidebars/elements-list/elements-list.component';
import { PageComponent } from './components/page/page.component';
import { ElementStyleComponent } from './components/sidebars/element-style/element-style.component';
import { DraggableDirective } from './directive/draggable.directive';
import { TableComponent } from './components/tools/table/table.component';
import { LineComponent } from './components/tools/line/line.component';
import { InputComponent } from './components/tools/input/input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ElementModelsComponent } from './components/sidebars/element-models/element-models.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ElementsListComponent,
    PageComponent,
    ElementStyleComponent,
    DraggableDirective,
    TableComponent,
    LineComponent,
    InputComponent,
    ElementModelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
