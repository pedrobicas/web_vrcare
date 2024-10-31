import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsLiveComponent } from './sessions-live.component';

describe('SessionsLiveComponent', () => {
  let component: SessionsLiveComponent;
  let fixture: ComponentFixture<SessionsLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionsLiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionsLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
