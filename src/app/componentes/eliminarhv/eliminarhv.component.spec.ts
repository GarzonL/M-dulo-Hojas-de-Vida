import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarhvComponent } from './eliminarhv.component';

describe('EliminarhvComponent', () => {
  let component: EliminarhvComponent;
  let fixture: ComponentFixture<EliminarhvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EliminarhvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarhvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
