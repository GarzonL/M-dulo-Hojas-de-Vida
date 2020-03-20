import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarhvComponent } from './consultarhv.component';

describe('ConsultarhvComponent', () => {
  let component: ConsultarhvComponent;
  let fixture: ComponentFixture<ConsultarhvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultarhvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarhvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
