import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CToPChildCComponent } from './c-to-p-childC.component';

describe('CToPChildCComponent', () => {
  let component: CToPChildCComponent;
  let fixture: ComponentFixture<CToPChildCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CToPChildCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CToPChildCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
