import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrendimientoComponent } from './drendimiento.component';

describe('DrendimientoComponent', () => {
  let component: DrendimientoComponent;
  let fixture: ComponentFixture<DrendimientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrendimientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrendimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
