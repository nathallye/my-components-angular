import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineWithPrimengComponent } from './timeline-with-primeng.component';

describe('TimelineWithPrimengComponent', () => {
  let component: TimelineWithPrimengComponent;
  let fixture: ComponentFixture<TimelineWithPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineWithPrimengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelineWithPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
