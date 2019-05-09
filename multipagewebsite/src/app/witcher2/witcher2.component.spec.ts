import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Witcher2Component } from './witcher2.component';

describe('Witcher2Component', () => {
  let component: Witcher2Component;
  let fixture: ComponentFixture<Witcher2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Witcher2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Witcher2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
