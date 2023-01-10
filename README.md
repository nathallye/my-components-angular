# MyComponentsAngular

## Angular PrimeNG TimeLine Component

![WhatsApp Image 2023-01-10 at 10 22 58](https://user-images.githubusercontent.com/86172286/211565016-17484606-be37-4ba9-9127-b059bc39491c.jpeg)

Angular PrimeNG é uma estrutura de código aberto com um rico conjunto de componentes de interface do usuário angular nativos que são usados ​​para um ótimo estilo e essa estrutura é usada para criar sites responsivos com muita facilidade.

- Para instalar o PrimeNG vamos rodar o comando seguinte:

``` 
npm install primeng --save 
npm install primeicons --save
```

- app.module.ts:

``` TS
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
```

- timeline-primeng.component.ts: 

``` TS
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-with-primeng',
  templateUrl: './timeline-primeng.component.html',
  styleUrls: ['./timeline-primeng.component.css']
})

export class TimelinePrimengComponent implements OnInit {
  events!: any[];

  ngOnInit() {
    this.events = [
      { status: 'Criação de prontuário' },
      { status: 'Criação de episódio' },
      { status: 'Vínculo de prontuários' },
      { status: 'Vínculo de episódios' },
      { status: 'Integração com legados' },
      { status: 'Alocação no leito' }
    ];
  }
}
```

- timeline-primeng.component.html:

``` TS
<p-timeline [value]="events" layout="horizontal">
  <ng-template pTemplate="content" let-event>
    {{event.status}}
  </ng-template>
</p-timeline>
```

- angular.json:

``` JSON
//...
"styles": [
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
    "node_modules/primeng/resources/primeng.min.css",
    //...
]
```

Links úteis: 
- http://primefaces.org/primeng/timeline
- https://www.geeksforgeeks.org/angular-primeng-timeline-component/
- https://stackblitz.com/edit/ngx-horizontal-timeline?file=src%2Fapp%2Fapp.component.ts
- https://www.npmjs.com/package/ngx-horizontal-timeline


## Stepper Material Angular

Links úteis: https://material.angular.io/components/stepper/overview
