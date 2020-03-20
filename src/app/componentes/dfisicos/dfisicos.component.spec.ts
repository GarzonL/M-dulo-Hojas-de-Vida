import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DfisicosComponent } from './dfisicos.component';

describe('DfisicosComponent', () => {
  let component: DfisicosComponent;
  let fixture: ComponentFixture<DfisicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DfisicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DfisicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
