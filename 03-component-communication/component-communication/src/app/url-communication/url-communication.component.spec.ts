import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlCommunicationComponent } from './url-communication.component';

describe('UrlCommunicationComponent', () => {
  let component: UrlCommunicationComponent;
  let fixture: ComponentFixture<UrlCommunicationComponent>;

  beforeEach(async(() => {
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
