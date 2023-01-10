import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { MenuItem } from 'primeng/api';                  //api
import { TimelineModule } from 'primeng/timeline';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { TimelineWithPrimengComponent } from './components/timeline-with-primeng';

@NgModule({
  declarations: [
    AppComponent,
    TimelineWithPrimengComponent
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
