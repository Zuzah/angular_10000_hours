import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UrlCommunicationComponent } from './url-communication.component';

describe('UrlCommunicationComponent', () => {
  let component: UrlCommunicationComponent;
  let fixture: ComponentFixture<UrlCommunicationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
