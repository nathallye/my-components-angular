import { Component, OnInit } from '@angular/core';
import {PrimeIcons} from 'primeng/api';

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
