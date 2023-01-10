import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelinePrimengComponent } from './timeline-primeng.component';

describe('TimelinePrimengComponent', () => {
  let component: TimelinePrimengComponent;
  let fixture: ComponentFixture<TimelinePrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelinePrimengComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimelinePrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
