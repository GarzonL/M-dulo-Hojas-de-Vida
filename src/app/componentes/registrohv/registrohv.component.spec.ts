import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrohvComponent } from './registrohv.component';

describe('RegistrohvComponent', () => {
  let component: RegistrohvComponent;
  let fixture: ComponentFixture<RegistrohvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrohvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrohvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
