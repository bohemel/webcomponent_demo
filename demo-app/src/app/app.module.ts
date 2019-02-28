import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DemoElementComponent } from './demo-element/demo-element.component';

@NgModule({
  declarations: [
    DemoElementComponent
  ],
  entryComponents: [
    DemoElementComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(DemoElementComponent, { injector });
    customElements.define('demo-element', el);
  }
  ngDoBootstrap() {}
}
