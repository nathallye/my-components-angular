import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccordionModule} from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimelinePrimengComponent } from './components/timeline-primeng';

@NgModule({
  declarations: [
    AppComponent,
    TimelinePrimengComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    TimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
