import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsRecordedComponent } from './sessions-recorded.component';

describe('SessionsRecordedComponent', () => {
  let component: SessionsRecordedComponent;
  let fixture: ComponentFixture<SessionsRecordedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsRecordedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsRecordedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
