import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailDataComponent } from './email-data.component';

describe('EmailDataComponent', () => {
  let component: EmailDataComponent;
  let fixture: ComponentFixture<EmailDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
