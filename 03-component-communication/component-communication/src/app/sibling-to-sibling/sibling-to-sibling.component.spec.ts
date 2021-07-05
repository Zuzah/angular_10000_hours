import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SiblingToSiblingComponent } from './sibling-to-sibling.component';

describe('SiblingToSiblingComponent', () => {
  let component: SiblingToSiblingComponent;
  let fixture: ComponentFixture<SiblingToSiblingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SiblingToSiblingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiblingToSiblingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
