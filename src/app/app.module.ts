import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextComponent } from './components/tools/text/text.component';
import { ElementsListComponent } from './components/sidebars/elements-list/elements-list.component';
import { PageComponent } from './components/page/page.component';
import { ElementPreferencesComponent } from './components/sidebars/element-preferences/element-preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    ElementsListComponent,
    PageComponent,
    ElementPreferencesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
